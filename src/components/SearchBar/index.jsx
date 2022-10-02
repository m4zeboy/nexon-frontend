import React, { useState } from 'react'

import { IoSearchOutline } from "react-icons/io5";

import './style.scss'

export function SearchBar({theme}) {
  return (
    <div className={`search-bar ${theme}`}>
        <input type="text" placeholder='Que tal fazer uma busca?'/>
        <IoSearchOutline size={24} color="#555"/>
    </div>
  )
}
