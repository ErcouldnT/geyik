import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://qmcmuhpqtxdqkpkohtfs.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtY211aHBxdHhkcWtwa29odGZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNTA4NzAsImV4cCI6MTk5MzYyNjg3MH0.kjo9LjWaqZQUjTnbc81nrQsS7Ogi1RbbC6T80wRJz0g'
);
