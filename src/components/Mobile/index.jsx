import React, { useState } from 'react'
import './style.scss'

export function Mobile({children}) {
  return (
      <div className="mobile-only">
        {children}
      </div>
  )
}
