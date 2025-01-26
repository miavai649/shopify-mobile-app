import React, { createContext, useReducer, useContext } from 'react'

// Types for Cart Item and Action
type CartItem = any

type CartState = CartItem[]

type CartAction =
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'REMOVE_FROM_CART'; id: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number }
  | { type: 'CLEAR_CART' }

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.item.id)
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, action.item]

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.id)

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )

    case 'CLEAR_CART':
      return []

    default:
      return state
  }
}

type CartContextType = {
  cart: CartState
  dispatch: React.Dispatch<CartAction>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
