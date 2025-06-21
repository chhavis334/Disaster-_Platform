// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ouzffatomgedmlrawrjv.supabase.co; 
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91emZmYXRvbWdlZG1scmF3cmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDAwNzYsImV4cCI6MjA2NTgxNjA3Nn0.DqWH8hW_ouxDpwou2rlsHfDUk6ubnKud5x4bMn8E7gE;             // Replace with your real key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

