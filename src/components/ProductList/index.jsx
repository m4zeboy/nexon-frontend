import React, { useState } from 'react'
import { Product } from '../Product'

import './style.scss'

export function ProductList({ name, Products = [], type }) {
  return (
    <section>
      <h3>{name}</h3>
      <div className={'product-list ' + type} data-ProductListName={name}>
        {Products &&
          Products.map((product) => {
            return <Product data={product} />
          })}
      </div>
    </section>
  )
}
