'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/useAuth'

export default function ProfilePanel() {
  const { user, loading } = useAuth()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        password_confirmation: ''
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setErrors({})
    setSuccess('')

    try {
      const res = await axios.put(
        'http://127.0.0.1:8000/api/profile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      )
      setSuccess('Profile updated successfully!')
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors)
      } else {
        alert('Something went wrong.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete your account?')) return
    try {
      await axios.delete('http://127.0.0.1:8000/api/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      alert('Account deleted.')
      localStorage.removeItem('token')
      window.location.href = '/' // Redirect to home or login
    } catch (error) {
      alert('Failed to delete account.')
    }
  }

  if (loading) return <p className="text-center mt-20 text-gray-700">Loading...</p>

  return (
    <section className="bg-gray-100 min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-10 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 mb-2">Your Profile</h1>
          <p className="text-gray-600 text-sm">Update your account information below.</p>
        </div>

        {success && <p className="text-green-600 text-center font-medium">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-full text-gray-700 focus:ring-red-500 focus:border-red-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name[0]}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-full text-gray-700 focus:ring-red-500 focus:border-red-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
              className={`w-full px-4 py-3 border rounded-full text-gray-700 focus:ring-red-500 focus:border-red-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password[0]}</p>}
          </div>

          {/* Password Confirmation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="bg-red-900 text-white w-full sm:w-auto px-6 py-3 rounded-full hover:bg-red-800 transition"
            >
              {submitting ? 'Saving...' : 'Save Changes'}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="bg-gray-200 text-gray-800 w-full sm:w-auto px-6 py-3 rounded-full hover:bg-red-100 transition"
            >
              Delete My Account
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
