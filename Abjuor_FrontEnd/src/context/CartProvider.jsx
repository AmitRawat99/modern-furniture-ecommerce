import React from 'react'
import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItem, setcartItem] = useState(() => {
    const saveCart = localStorage.getItem("cartItem")
    return saveCart ? JSON.parse(saveCart) : []
  })

  const addtoCart = (product) => {
    const existing = cartItem.find(item => item.id === product.id)
    if (!existing) {
      setcartItem(prev => [...prev, product])
    }
    else {
      alert("Product Already Added")
    }
  }

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem))
  }, [cartItem])

  const removeCart = (productId) => {
    setcartItem(prev => prev.filter(item => item.id != productId))
  }

  return (
    <>
      <CartContext.Provider value={{ cartItem, addtoCart, removeCart }}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider