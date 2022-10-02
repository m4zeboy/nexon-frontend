import React from 'react'
import {SearchBar} from '../SearchBar';
import {Container} from '../Container';

import logo from '../../assets/logo.svg'
import { IoBagOutline } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";

import { Mobile } from '../Mobile';
import { Desktop } from '../Desktop';

import './style.scss'

export function Header() {
  return (
      <header className="app-header">
        <Mobile>
          <Container>
            <a href="#"><img src={logo} alt="" /></a>
            <SearchBar theme="dark"/>
            <a href="#"><HiMenuAlt4 size={24} color="#eee"/></a>
            <a href="#"><IoBagOutline size={24} color="#eee"/></a>
          </Container>
        </Mobile>
        <Desktop>
          <Container>
            <a href="#" className='logo'><img src={logo} alt="" /></a>
            <ul>
              <li><a href="#">Europeus</a></li>
              <li><a href="#">Seleções</a></li>
              <li><a href="#">NBA</a></li>
              <li><a href="#">Linha Casual</a></li>
            </ul>
            <a href="#"><IoBagOutline size={24} color="#eee"/></a>
          </Container>
        </Desktop>
      </header>
  )
}
