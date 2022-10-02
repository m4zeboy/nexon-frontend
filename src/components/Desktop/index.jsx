import React, { useState } from 'react'
import './style.scss'

export function Desktop({children}) {
  return (
      <div className="desktop-only">
        {children}
      </div>
  )
}
