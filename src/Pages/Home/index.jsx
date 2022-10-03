import React, { useState } from 'react'
import {Container} from '../../components/Container'
import {CategoryBanner} from '../../components/CategoryBanner'
import categories from '../../services/categories.json'
import './style.scss'

export function HomePage() {
  
  return (
    <div className='home-page'>
      <div className="category-banners">
      {
          categories.map(category => {
            return (
                <CategoryBanner text={category.text} image={category.image}/>
            )
          })
        }
      </div>
       
        {/* <img src="https://i.pinimg.com/originals/4e/bf/f0/4ebff08fc528b95500ce143551ed00a9.jpg" alt="" width="100%"/> */}
        {/* <ProductList name="Highlights"Products={products} type="product-carrousel"/> */}
    </div>
  )
}
