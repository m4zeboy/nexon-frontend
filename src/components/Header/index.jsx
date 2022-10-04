import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar'
import { Container } from '../Container'
import categories from '../../services/categories.json'
import logo from '../../assets/logo.svg'
import { IoBagOutline } from 'react-icons/io5'
import { HiMenuAlt4 } from 'react-icons/hi'

import { Mobile } from '../Mobile'
import { Desktop } from '../Desktop'
import { Breadcrumbs } from '../Breadcrumbs';

import './style.scss'

export function Header() {
  const [modal, setModal] = useState(false)
 
  const renderCategories = categories.map((category) => {
    return (
      <li key={category.id}>
        <Link to={"/category/" + category.id}>{category.title}</Link>
      </li>
    )
  })

  return (
    <>
    <header className="app-header">
      <Mobile>
        <Container>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <SearchBar theme="dark" />
          <Link to="#" onClick={() => setModal(!modal)}>
            <HiMenuAlt4 size={24} color="#eee" />
          </Link>
          <Link to="#">
            <IoBagOutline size={24} color="#eee" />
          </Link>
        </Container>
      </Mobile>
      <Desktop>
        <Container>
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <ul>{renderCategories}</ul>
          <Link to="#">
            <IoBagOutline size={24} color="#eee" />
          </Link>
        </Container>
      </Desktop>
    </header>
    <Desktop>
        <Breadcrumbs>
          <Container>
            <SearchBar theme="dark"></SearchBar>
          </Container>
        </Breadcrumbs> 
    </Desktop>
    <Mobile>
      {modal && (
        <div className='drop-down'>
          <Container>
            <ul>{renderCategories}</ul>
          </Container>
        </div>
      )}
    </Mobile>        
    </>
  )
}
