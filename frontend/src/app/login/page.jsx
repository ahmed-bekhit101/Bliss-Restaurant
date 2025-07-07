'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      setError('')
      setLoading(true)

      try {
        const res = await axios.post('http://localhost:8000/api/login', {
          email: values.email,
          password: values.password,
        })

        const token = res.data.token
        localStorage.setItem('token', token)

        const me = await axios.get('http://localhost:8000/api/me', {
          headers: { Authorization: `Bearer ${token}` },
        })

        console.log('Logged in as:', me.data)

window.location.href = '/'
      } catch (err) {
        setError(err.response?.data?.message || 'Login failed')
      } finally {
        setLoading(false)
      }
    },
  })

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Please sign in to continue your experience.
          </p>
        </div>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-4 py-3 border rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-4 py-3 border rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-900 text-white py-3 px-6 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-lg font-medium"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>

        </form>
      </div>
    </section>
  )
}
