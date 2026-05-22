import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* Left Section */}
        <div className="sm:col-span-2 lg:col-span-1">

          <img
            src={assets.logo}
            alt="logo"
            className="w-32"
          />

          <p className="text-sm leading-6 mt-6">
            Quick AI helps you create articles, generate stunning images,
            review resumes, remove backgrounds, and boost productivity
            with powerful AI tools — all in one platform.
          </p>

        </div>

        {/* Company Links */}
        <div className="flex flex-col lg:items-center lg:justify-center">

          <div className="flex flex-col text-sm space-y-2.5">

            <h2 className="font-semibold mb-5 text-gray-800">
              Company
            </h2>

            <a className="hover:text-slate-600 transition" href="#">
              Home
            </a>

            <a className="hover:text-slate-600 transition" href="#">
              About Us
            </a>

            <a className="hover:text-slate-600 transition" href="#">
              Contact Us
            </a>

            <a className="hover:text-slate-600 transition" href="#">
              Privacy Policy
            </a>

          </div>

        </div>

        {/* Newsletter */}
        <div>

          <h2 className="font-semibold text-gray-800 mb-5">
            Subscribe to our newsletter
          </h2>

          <div className="text-sm space-y-6 max-w-sm">

            <p>
              Get the latest AI tools, updates, and productivity tips
              delivered directly to your inbox.
            </p>

            <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">

              <input
                className="focus:ring-2 bg-white ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2"
                type="email"
                placeholder="Enter your email"
              />

              <button className="bg-indigo-600 px-4 py-2 text-white rounded">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      <p className="py-4 text-center border-t mt-10 border-slate-200">
        Copyright 2026 © Quick AI. All Rights Reserved.
      </p>

    </footer>
  )
}

export default Footer