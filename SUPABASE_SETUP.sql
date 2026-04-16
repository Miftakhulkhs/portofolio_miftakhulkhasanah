create table if not exists projects (
  id text primary key,
  title text not null,
  co text,
  yr text,
  category text not null, 
  short_desc text,
  description text,
  tools text[] default '{}',
  responsibilities text[] default '{}',
  imgs text[] default '{}',  
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists certifications (
  id text primary key,
  title text not null,
  issuer text,
  date text,
  base text,                 
  imgs text[] default '{}',  
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists experience (
  id text primary key,
  title text not null,
  company text,
  badge text,
  date_from text,
  date_to text,
  responsibilities text[] default '{}',
  tags text[] default '{}',
  "order" int default 0,
  created_at timestamptz default now()
);

insert into storage.buckets (id, name, public)
values ('portfolio-media', 'portfolio-media', true)
on conflict (id) do nothing;

create policy "Public read" on storage.objects
  for select using (bucket_id = 'portfolio-media');

create policy "Admin upload" on storage.objects
  for insert with check (bucket_id = 'portfolio-media');

create policy "Admin update" on storage.objects
  for update using (bucket_id = 'portfolio-media');

create policy "Admin delete" on storage.objects
  for delete using (bucket_id = 'portfolio-media');

alter table projects enable row level security;
alter table certifications enable row level security;
alter table experience enable row level security;

create policy "Public read projects" on projects for select using (true);
create policy "Public read certifications" on certifications for select using (true);
create policy "Public read experience" on experience for select using (true);

create policy "All insert projects" on projects for insert with check (true);
create policy "All update projects" on projects for update using (true);
create policy "All delete projects" on projects for delete using (true);

create policy "All insert certifications" on certifications for insert with check (true);
create policy "All update certifications" on certifications for update using (true);
create policy "All delete certifications" on certifications for delete using (true);

create policy "All insert experience" on experience for insert with check (true);
create policy "All update experience" on experience for update using (true);
create policy "All delete experience" on experience for delete using (true);


