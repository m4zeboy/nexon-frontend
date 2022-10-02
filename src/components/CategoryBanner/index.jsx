import React from 'react'
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
        <a href="#" className="link-blue">
          Ver Mais &gt;
        </a>
      </div>
    </div>
  )
}
