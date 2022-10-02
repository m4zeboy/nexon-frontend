import React, { useState } from 'react'
import { Product } from '../Product'


import './style.scss'

export function ProductList({name, Products=[], type}) {
  return (
    <div className={'product-list ' + type} data-ProductListName={name}>
       {Products && (
        Products.map(product => {
          return (
            <Product data={product}/>
          )
        })

       )}
    </div>
  )
}
