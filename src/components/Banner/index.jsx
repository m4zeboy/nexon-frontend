import React, { useState } from 'react'

import './style.scss'

export function Banner({bannerData}) {
  const { src } = bannerData
  console.log(src)
  return (
    <div
      className={`main-banner ${bannerData.theme}`}
      style={{
        background: `url(${bannerData.image}) top/cover no-repeat`,
      }}
    >
      <div className="info">
        <span className='text-orange'>{bannerData.text.highlight}</span>
        <h1>{bannerData.text.title}</h1>
        <p>{bannerData.text.description}</p>
        <p className="availability">{bannerData.text.availability}</p>
        <a href="#" className="link-purple">
          Ver Mais &gt;
        </a>
      </div>
    </div>
  )
}
