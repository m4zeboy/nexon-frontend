import React from 'react'
import { Header } from './components/Header'

import Banners from './services/banners.json'
import Products from './services/products.json'
import { Container } from './components/Container'

import './styles/style.scss'
import { Desktop } from './components/Desktop'
import { Breadcrumbs } from './components/Breadcrumbs'
import { SearchBar } from './components/SearchBar'
import { Banner } from './components/Banner'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <div>
      <Header />
      <Desktop>
        <Breadcrumbs>
          <Container>
            <SearchBar theme="dark"></SearchBar>
          </Container>
        </Breadcrumbs> 
      </Desktop>
          <img width="100%"src="https://i.pinimg.com/originals/4e/bf/f0/4ebff08fc528b95500ce143551ed00a9.jpg" alt="" />
        <Container>
          <div className="highlights">
            <h3>DESTAQUES</h3>
            <ProductList name="highlights" Products={Products} key="0" type="product-carrousel "/>
          </div>
        </Container>
    </div>
  )
}

export default App
