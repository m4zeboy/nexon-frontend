import React, { useState } from 'react'
import { Banner } from '../Banner';
import { IoCaretBack, IoCaretForwardOutline } from "react-icons/io5";
import './style.scss'

export function Carrousel({Banners = []}) {
  const [selectedId, setSelectedId] = useState(Banners[0].id);
  const selected = Banners.find(banner => banner.id === selectedId);

  function next() {
    if(selectedId === Banners[Banners.length -1].id) {
      setSelectedId(1);
    } else {
      setSelectedId(selectedId + 1);

    }
  }

  function previous() {
    if(selectedId === 1) {
      setSelectedId(Banners[Banners.length -1].id);
    } else {
      setSelectedId(selectedId - 1);
    }
  }
  
  return (
   <div className='carrousel'>
    <Banner 
     bannerData={selected}
    />
    <div className="controls">
      
      <div><IoCaretBack color='#ddd' size={24} onClick={next}/></div>
      <div><IoCaretForwardOutline color='#ddd' size={24} onClick={previous}/></div>
    </div>
   </div>
  )
}
