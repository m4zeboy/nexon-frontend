import React, { useState } from 'react'
import './style.scss'

export function Breadcrumbs({children, theme}) {
  return (
      <div className={"breadcrumbs " + theme}>
        {children}
      </div>
  )
}
