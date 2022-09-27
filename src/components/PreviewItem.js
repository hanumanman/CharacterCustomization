import React from 'react'

function PreviewItem({item}) {
  return (
        <img
        className={`${item.listName}part`}
        src={`character/${item.path}/${item.index}.png`} 
        alt={`earring${item.index}`}
        />
  )
}

export default PreviewItem