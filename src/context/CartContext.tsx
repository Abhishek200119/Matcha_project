import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CartItem {
  id: string
  name: string
  image: string
  price: string
  quantity: number
}

interface CartContextType {

  cartItems: CartItem[]

  addToCart: (product: CartItem) => void

  removeFromCart: (id: string) => void

  increaseQuantity: (id: string) => void

  decreaseQuantity: (id: string) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {

  // LOAD CART FROM LOCAL STORAGE
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {

    const savedCart = localStorage.getItem('matcha-cart')

    return savedCart
      ? JSON.parse(savedCart)
      : []

  })

  // SAVE TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      'matcha-cart',
      JSON.stringify(cartItems)
    )

  }, [cartItems])

  // ADD TO CART
  const addToCart = (product: CartItem) => {

    setCartItems((prev) => {

      const existingProduct = prev.find(
        (item) => item.id === product.id
      )

      // IF PRODUCT ALREADY EXISTS
      if (existingProduct) {

        return prev.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + product.quantity,
              }

            : item

        )

      }

      // ADD NEW PRODUCT
      return [...prev, product]

    })

  }

  // REMOVE PRODUCT
  const removeFromCart = (id: string) => {

    setCartItems((prev) =>

      prev.filter((item) => item.id !== id)

    )

  }

  // INCREASE QUANTITY
  const increaseQuantity = (id: string) => {

    setCartItems((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item

      )

    )

  }

  // DECREASE QUANTITY
  const decreaseQuantity = (id: string) => {

    setCartItems((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }

          : item

      )

    )

  }

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export function useCart() {

  const context = useContext(CartContext)

  if (!context) {

    throw new Error(
      'useCart must be used inside CartProvider'
    )

  }

  return context
}