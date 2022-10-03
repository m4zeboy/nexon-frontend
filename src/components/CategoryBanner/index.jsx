import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export function CategoryBanner({ image, text }) {
  return (
    <div
      className="category-banner"
      style={{
        background: `url(${image}) top/cover no-repeat`,
      }}
    >
      <div className="info">
        <p className="text-orange">{text.highlight}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
        <p className="details">{text.availability}</p>
        <Link to="#" className="link-purple">
          Ver Mais &gt;
        </Link>
      </div>
    </div>
  )
}
