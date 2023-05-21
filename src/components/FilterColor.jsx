import React from 'react'
import "./FilterColor.scss"
export default function FilterColor({FilterColorBtn,getColorValue}) {
 
  return (
    <div className='by-color'>
      {
        FilterColorBtn.map((item)=>{
          
          return <div className="color-specter" value={item} onclick={getColorValue} style={{background:item}}></div>
        })
      }
    </div>
  )
}
