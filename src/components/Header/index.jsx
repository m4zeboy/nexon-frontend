import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar'
import { Container } from '../Container'

import logo from '../../assets/logo.svg'
import { IoBagOutline } from 'react-icons/io5'
import { HiMenuAlt4 } from 'react-icons/hi'

import { Mobile } from '../Mobile'
import { Desktop } from '../Desktop'
import { Breadcrumbs } from '../Breadcrumbs';

import './style.scss'

export function Header() {
  const categories = ['Europeus', 'Seleções', 'NBA', 'Linha Casual']
  const [dropDown, setDropDown] = useState(false)

  const dropDownEl = <div className="drop-down"></div>
  return (
    <>
    <header className="app-header">
      <Mobile>
        <Container>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <SearchBar theme="dark" />
          <Link to="#">
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
          <ul>
            {categories.map((category, index) => {
              return (
                <li key={index}>
                  <Link to={"/category/" + index}>{category}</Link>
                </li>
              )
            })}
          </ul>
          <Link to="#">
            <IoBagOutline size={24} color="#eee" />
          </Link>
        </Container>
        {dropDown && dropDownEl}
      </Desktop>
    </header>
    <Desktop>
        <Breadcrumbs>
          <Container>
            <SearchBar theme="dark"></SearchBar>
          </Container>
        </Breadcrumbs> 
      </Desktop>
    </>
  )
}
