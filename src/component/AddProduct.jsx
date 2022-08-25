import React from 'react'
import {useContext} from 'react'
import styled from "styled-components"
import Context from"../store/ContextProvider"

function AddProduct() {
    const {products, message, addProduct}= useContext(Context)
  return (
    <div> 
          <button type="button" onClick={addProduct}>Add product</button>   <div>
    {
    products&& 
      <ul>
        {
         products.map(item=>{
          return <li>Title: {item.product_title}</li>
         })
        }
      </ul>
    }
  </div>
  <h4 style={{color: 'red'}}>{message}</h4>

  </div>
  )
}

export default AddProduct