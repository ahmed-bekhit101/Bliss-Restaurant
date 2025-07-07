'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';
import axios from 'axios';

const API = 'http://127.0.0.1:8000/api';
const TABS = ['Dashboard', 'Users', 'Bookings', 'Menu'];

export default function AdminPanel() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.replace('/');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="text-center mt-20 text-gray-600">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row">
      <aside className="bg-white shadow-md w-full sm:w-64 p-4">
        <h2 className="text-2xl font-serif text-gray-800 mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-red-900 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6">{renderTab(activeTab)}</main>
    </div>
  );
}

function renderTab(tab) {
  switch (tab) {
    case 'Dashboard':
      return <Dashboard />;
    case 'Users':
      return <UserList />;
    case 'Bookings':
      return <BookingList />;
    case 'Menu':
      return <MenuManager />;
    default:
      return null;
  }
}

function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Admin Overview</h1>
      <p className="text-sm text-gray-600">Quick glance at system activity.</p>
    </div>
  );
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/admin/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error('Failed to fetch users:', err);
      });
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Users</h3>
      <table className="w-full bg-white rounded-lg shadow overflow-hidden">
        <thead className="bg-gray-200 text-gray-700 text-left">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="px-4 py-2">{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BookingList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/admin/bookings`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setBookings(res.data));
  }, []);

  const updateStatus = (id, status) => {
    axios
      .patch(
        `${API}/admin/bookings/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then(() =>
        setBookings((prev) =>
          prev.map((b) => (b.id === id ? { ...b, status } : b))
        )
      );
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Table Bookings</h3>
      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{b.user.name}</div>
              <div className="text-sm text-gray-600">
                {b.date} at {b.time} – {b.people} people
              </div>
              <div className="text-sm">
                Status:{' '}
                <span
                  className={`font-medium ${
                    b.status === 'pending'
                      ? 'text-yellow-600'
                      : b.status === 'confirmed'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {b.status === 'pending'
                    ? 'Pending'
                    : b.status === 'confirmed'
                    ? 'Accepted'
                    : 'Rejected'}
                </span>
              </div>
            </div>
            {b.status === 'pending' && (
              <div className="space-x-2">
                <button
                  onClick={() => updateStatus(b.id, 'confirmed')}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
                >
                  Accept
                </button>
                <button
                  onClick={() => updateStatus(b.id, 'rejected')}
                  className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


function MenuManager() {
  const [menu, setMenu] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '' });
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/menu`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => setMenu(res.data))
      .catch((err) => console.error('Failed to fetch menu:', err))
      .finally(() => setLoading(false));
  }, []);

  const addItem = async () => {
    if (!newItem.name || !newItem.price) {
      alert('Please enter both name and price.');
      return;
    }

    setAdding(true);
    try {
      const res = await axios.post(`${API}/menu`, newItem, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMenu((prev) => [...prev, res.data]);
      setNewItem({ name: '', price: '' });
    } catch (err) {
      console.error('Add item error:', err.response?.data || err.message);
      alert('Failed to add item.');
    } finally {
      setAdding(false);
    }
  };

  const updateItem = (id, field, value) => {
    setMenu((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const saveItem = async (item) => {
    try {
      await axios.put(`${API}/menu/${item.id}`, item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (err) {
      alert('Failed to update item.');
      console.error(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API}/menu/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setMenu(menu.filter((item) => item.id !== id));
    } catch (err) {
      alert('Failed to delete item.');
      console.error(err);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Menu Items</h3>

      {loading ? (
        <p className="text-gray-600">Loading menu...</p>
      ) : (
        <div className="space-y-4">
          {menu.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
            >
              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                  className="w-full font-medium text-gray-800 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                  className="w-full text-sm text-gray-600 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
              <div className="space-x-2 ml-4">
                <button
                  onClick={() => saveItem(item)}
                  className="text-sm px-4 py-1 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  Save
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-sm px-4 py-1 bg-red-700 text-white rounded-full hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Add Item Form */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h4 className="text-lg font-semibold text-gray-700">Add New Item</h4>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Item Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            />
            <button
              onClick={addItem}
              disabled={adding}
              className="w-full bg-red-900 text-white font-medium py-2 rounded-full hover:bg-red-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {adding ? 'Adding...' : '+ Add Item'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
