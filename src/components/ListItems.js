import React from 'react'
import Items from './Items'
import './ListItems.css'



function ListItems ({list, listName, setList, modifySelectedArray}) {
  const setSelected = (itemId)=>{
    listName.map(
      item => {
      if(item.id === itemId){
        console.log(`found object w id`);
        if(item.status === ""){
          item.status = "selected";
          modifySelectedArray(item);
        } else {
          item.status = "";
          modifySelectedArray(item);
        }
        return {...item}
      } else {
        item.status = ""; //keep only 1 item selected at a time
        
        return {...item}
      }      
    })   
    setList([...listName])
  }
  return (
    <ul className="partList">

          {list.map((item) =>(
          <Items key={`${listName}${item.index}`} item={item} setSelected = {setSelected} />
          ))}

    </ul>
  )
}

export default ListItems