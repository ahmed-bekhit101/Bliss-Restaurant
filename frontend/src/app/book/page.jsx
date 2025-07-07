'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../../hooks/useAuth'

export default function BookTableSection() {
  const { user, loading } = useAuth()

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    totalPerson: '1',
  })

  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      alert('Please log in to book a table.')
      return
    }

    try {
      setSubmitting(true)
      await axios.post(
        'http://127.0.0.1:8000/api/bookings',
        {
          date: formData.date,
          time: formData.time,
          name: formData.name,
          phone: formData.phone,
          total_persons: parseInt(formData.totalPerson),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      )

      alert('Table booked successfully!')
      setFormData({
        date: '',
        time: '',
        name: '',
        phone: '',
        totalPerson: '1',
      })
      setErrors({})
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {})
      } else {
        console.error('Booking failed:', error)
        alert('Booking failed. Please try again.')
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return <p className="text-center mt-20 text-gray-700">Loading...</p>

  return (
    <>
      {/* Booking Section */}
      <section className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl translate-y-1/6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-800 mb-4">
              Book A Table
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              We consider all the drivers of change gives you the components you need to change to create a truly happens.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            >
              {/* Date Input */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700"
                  required
                />
                {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date[0]}</p>}
              </div>

              {/* Time Input */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700"
                  required
                />
                {errors.time && <p className="text-sm text-red-600 mt-1">{errors.time[0]}</p>}
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700"
                  required
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name[0]}</p>}
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="X-XXX-XXX-XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700"
                  required
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone[0]}</p>}
              </div>

              {/* Total Person Dropdown */}
              <div className="md:col-span-2">
                <label htmlFor="totalPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  Total Person
                </label>
                <select
                  id="totalPerson"
                  name="totalPerson"
                  value={formData.totalPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-red-500 focus:border-red-500 text-gray-700 appearance-none bg-white pr-8"
                  required
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'Person' : 'Persons'}
                    </option>
                  ))}
                </select>
                {errors.total_persons && (
                  <p className="text-sm text-red-600 mt-1">{errors.total_persons[0]}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-red-900 text-white py-3 px-6 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-lg font-medium"
                >
                  {submitting ? 'Booking...' : 'Book A Table'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full aspect-[16/9] md:h-[550px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54586.66780099168!2d29.906962119531244!3d31.22996119180871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5db005b78e7df%3A0x906c980fe7351b1d!2sTAVOLO!5e0!3m2!1sen!2seg!4v1751542334808!5m2!1sen!2seg"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </div>
    </>
  )
}
