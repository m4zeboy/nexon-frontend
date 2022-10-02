import React, { useState } from 'react'


import './style.scss'

export function Product({data}) {
  const formattedPrice = {
    old: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"}).format(data.price.old),
    actual: new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"}).format(data.price.actual),
  }

  return (
    <div className='product'>
        <img src={data.image} alt="" />
        <div className="info">
          <p className='product-category text-orange'>{data.category.toUpperCase()}</p>
          <strong>{data.description}</strong>
          <div className="price">
            <p className="old-price">{formattedPrice.old}</p>
            <p className="actual-price">{formattedPrice.old}</p>
          </div>
          {data.availability? (
            <button className='primary-button'>Adicionar na sacola</button>

          ) : (
            <button className='forbidden-button'>Em breve</button>

          )

        }
        </div>
    </div>
  )
}
