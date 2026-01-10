import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types
export interface SubmissionData {
  serviceCategory: string;
  price: number;
  country: string;
  province: string;
  city: string;
  postalCode?: string;
  satisfaction: number;
  timeliness: number;
  quality: number;
  sessionId?: string;
}

export interface BenchmarkResult {
  level: 'fsa' | 'city' | 'province' | 'category';
  levelLabel: string;
  stats: {
    count: number;
    min: number;
    max: number;
    avg: number;
    median: number;
    p25: number;
    p50: number;
    p75: number;
  };
  userPercentile?: number;
  interpretation?: string;
}

export interface SubmissionResponse {
  success: boolean;
  transactionId: number;
  submittedPrice: number;
  benchmark: BenchmarkResult | null;
}

export interface OverallStats {
  totalSubmissions: number;
  categories: number;
  cities: number;
}

export interface Category {
  name: string;
  count: number;
}

// API functions
export async function submitTransaction(data: SubmissionData): Promise<SubmissionResponse> {
  const response = await api.post('/api/transactions', data);
  return response.data;
}

export async function getOverallStats(): Promise<OverallStats> {
  const response = await api.get('/api/analytics/stats');
  return response.data;
}

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/api/analytics/categories');
  return response.data;
}

export async function getBenchmark(
  category: string,
  province: string,
  city: string,
  fsa?: string,
  price?: number
): Promise<BenchmarkResult> {
  const params = new URLSearchParams({ category, province, city });
  if (fsa) params.append('fsa', fsa);
  if (price !== undefined) params.append('price', price.toString());

  const response = await api.get(`/api/analytics/benchmark?${params}`);
  return response.data;
}
