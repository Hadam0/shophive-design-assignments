-- ShopHive sign-up app: database setup for Supabase
-- Run this once in Supabase: SQL Editor > New query > paste > Run

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  location text,
  interests text[],
  onboarded boolean not null default false,
  created_at timestamptz not null default now()
);

-- Row Level Security: each user can only see and change their own profile
alter table public.profiles enable row level security;

create policy "Users can read their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can create their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);
