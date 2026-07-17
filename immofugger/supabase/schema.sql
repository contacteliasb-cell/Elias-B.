-- ============================================================
-- ImmoFugger — Datenbankschema für Supabase
-- Dieses Skript 1:1 im Supabase-SQL-Editor ausführen
-- (Dashboard → SQL Editor → New query → einfügen → Run).
-- Es ist idempotent: mehrfaches Ausführen ist unschädlich.
-- ============================================================

-- ------------------------------------------------------------
-- 1) profiles — ein Profil pro Auth-Nutzer
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  anzeigename text not null default 'Mitglied',
  level_slug text not null default 'lehrling',
  erstellt_am timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

drop policy if exists "profiles_delete_own" on public.profiles;
create policy "profiles_delete_own" on public.profiles
  for delete using (auth.uid() = id);

-- Profil automatisch anlegen, wenn sich jemand registriert
-- (nimmt Anzeigename + Level aus den Registrierungs-Metadaten).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, anzeigename, level_slug)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'anzeigename', 'Mitglied'),
    coalesce(new.raw_user_meta_data ->> 'level_slug', 'lehrling')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------
-- 2) lesson_progress — Lernfortschritt pro Nutzer & Lektion
-- ------------------------------------------------------------
create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  lesson_id text not null,
  status text not null default 'gestartet' check (status in ('gestartet', 'abgeschlossen')),
  quiz_score integer,
  abgeschlossen_am timestamptz,
  primary key (user_id, lesson_id)
);

alter table public.lesson_progress enable row level security;

drop policy if exists "progress_select_own" on public.lesson_progress;
create policy "progress_select_own" on public.lesson_progress
  for select using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.lesson_progress;
create policy "progress_insert_own" on public.lesson_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.lesson_progress;
create policy "progress_update_own" on public.lesson_progress
  for update using (auth.uid() = user_id);

drop policy if exists "progress_delete_own" on public.lesson_progress;
create policy "progress_delete_own" on public.lesson_progress
  for delete using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- 3) community_posts — Beiträge im Kontor-Board
--    Lesen: alle eingeloggten · Schreiben/Löschen: nur eigene
-- ------------------------------------------------------------
create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  autor_name text not null,
  titel text not null,
  text text not null,
  kategorie text not null default 'einsteiger'
    check (kategorie in ('einsteiger', 'kaufleute', 'investoren')),
  erstellt_am timestamptz not null default now()
);

alter table public.community_posts enable row level security;

drop policy if exists "posts_select_authenticated" on public.community_posts;
create policy "posts_select_authenticated" on public.community_posts
  for select using (auth.role() = 'authenticated');

drop policy if exists "posts_insert_own" on public.community_posts;
create policy "posts_insert_own" on public.community_posts
  for insert with check (auth.uid() = user_id);

drop policy if exists "posts_delete_own" on public.community_posts;
create policy "posts_delete_own" on public.community_posts
  for delete using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- 4) community_replies — Antworten auf Beiträge
-- ------------------------------------------------------------
create table if not exists public.community_replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.community_posts (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  autor_name text not null,
  text text not null,
  erstellt_am timestamptz not null default now()
);

alter table public.community_replies enable row level security;

drop policy if exists "replies_select_authenticated" on public.community_replies;
create policy "replies_select_authenticated" on public.community_replies
  for select using (auth.role() = 'authenticated');

drop policy if exists "replies_insert_own" on public.community_replies;
create policy "replies_insert_own" on public.community_replies
  for insert with check (auth.uid() = user_id);

drop policy if exists "replies_delete_own" on public.community_replies;
create policy "replies_delete_own" on public.community_replies
  for delete using (auth.uid() = user_id);

-- Indizes für die häufigsten Abfragen
create index if not exists idx_posts_erstellt on public.community_posts (erstellt_am desc);
create index if not exists idx_replies_post on public.community_replies (post_id, erstellt_am);
