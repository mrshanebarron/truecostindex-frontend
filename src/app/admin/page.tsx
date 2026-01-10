'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

interface AdminStats {
  overall: {
    total: number;
    categories: number;
    provinces: number;
    cities: number;
    avgPrice: number;
    avgSatisfaction: number;
  };
  byCategory: Array<{
    category: string;
    count: number;
    avgPrice: number;
    avgSatisfaction: number;
  }>;
  byProvince: Array<{
    province: string;
    count: number;
    avgPrice: number;
  }>;
  recent: Array<{
    date: string;
    count: number;
  }>;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const authenticate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get('/api/admin/stats', {
        headers: { Authorization: `Bearer ${password}` },
      });
      setStats(response.data);
      setIsAuthenticated(true);
      sessionStorage.setItem('adminToken', password);
    } catch {
      setError('Invalid password');
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = async () => {
    const token = sessionStorage.getItem('adminToken');
    if (!token) return;

    try {
      const response = await api.get('/api/admin/export', {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `pricewise-export-${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setError('Export failed');
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      setPassword(token);
      api
        .get('/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setStats(response.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          sessionStorage.removeItem('adminToken');
        });
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="card max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Access</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              onKeyDown={(e) => e.key === 'Enter' && authenticate()}
            />
          </div>

          <button
            onClick={authenticate}
            disabled={loading || !password}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Access Dashboard'}
          </button>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-[80vh] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={exportCSV} className="btn-primary">
            Export CSV
          </button>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="card">
            <p className="text-3xl font-bold text-blue-600">{stats.overall.total.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">Total Submissions</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-blue-600">{stats.overall.categories}</p>
            <p className="text-gray-600 text-sm">Categories</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-blue-600">${stats.overall.avgPrice.toFixed(2)}</p>
            <p className="text-gray-600 text-sm">Avg Price</p>
          </div>
          <div className="card">
            <p className="text-3xl font-bold text-blue-600">{stats.overall.avgSatisfaction.toFixed(1)}</p>
            <p className="text-gray-600 text-sm">Avg Satisfaction</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* By Category */}
          <div className="card">
            <h2 className="font-semibold text-gray-900 mb-4">By Category</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Category</th>
                    <th className="text-right py-2">Count</th>
                    <th className="text-right py-2">Avg Price</th>
                    <th className="text-right py-2">Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.byCategory.map((row) => (
                    <tr key={row.category} className="border-b border-gray-100">
                      <td className="py-2">{row.category}</td>
                      <td className="text-right">{row.count}</td>
                      <td className="text-right">${row.avgPrice.toFixed(2)}</td>
                      <td className="text-right">{row.avgSatisfaction.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* By Province */}
          <div className="card">
            <h2 className="font-semibold text-gray-900 mb-4">By Province</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Province</th>
                    <th className="text-right py-2">Count</th>
                    <th className="text-right py-2">Avg Price</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.byProvince.map((row) => (
                    <tr key={row.province} className="border-b border-gray-100">
                      <td className="py-2">{row.province}</td>
                      <td className="text-right">{row.count}</td>
                      <td className="text-right">${row.avgPrice.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card mt-8">
          <h2 className="font-semibold text-gray-900 mb-4">Recent Activity (Last 30 Days)</h2>
          {stats.recent.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Date</th>
                    <th className="text-right py-2">Submissions</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recent.slice(0, 10).map((row) => (
                    <tr key={row.date} className="border-b border-gray-100">
                      <td className="py-2">{new Date(row.date).toLocaleDateString()}</td>
                      <td className="text-right">{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No recent activity</p>
          )}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              sessionStorage.removeItem('adminToken');
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
