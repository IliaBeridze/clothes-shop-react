import React from 'react'
import './FilterStyle.scss'
export default function FilterStyle({FilterStyleBtn,getStyleValue }) {
  return (
    <div className='style-fit'>
      {FilterStyleBtn.map((item)=>{
        return <button onClick={getStyleValue} value={item} className='style-btn'>
          {item}
        </button>
      })}
    </div>
  )
}
