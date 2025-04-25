// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvjyezxczhfdidgjsiha.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2anllenhjemhmZGlkZ2pzaWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NjczNzMsImV4cCI6MjA1ODI0MzM3M30.SVvv-FFCggcTu6pMKMTk5RYqsSzmDg6Ub3DALKgbcD4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
