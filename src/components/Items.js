import React from 'react'

function Items({item, setSelected}) {
  return (
    <li 
      id={`${item.id}`} 
      className={`part ${item.status} ${item.listName}`}>
        
        <img  
        src={`character/${item.path}/${item.index}.png`} 
        alt={`earring${item.index}`}
        role="button"
        onClick={(e)=> setSelected(`${item.id}`)}/>

      </li>
  )
}

export default Items