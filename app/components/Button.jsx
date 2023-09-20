"use client";

import React from 'react'

export default function Button({title, style}) {
  return (
    <button
        onClick={() => alert(title)} 
        className={`border px-8 py-2 text-slate-100 rounded-lg`}>
            {title}
    </button>
  )
}
