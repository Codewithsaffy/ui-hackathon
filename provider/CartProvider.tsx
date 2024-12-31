'use client'

import React from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <USCProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
    currency="USD"
    successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
    cancelUrl={`${process.env.NEXT_PUBLIC_URL}/cancel`}
    shouldPersist={true}
  >
      {children}
    </USCProvider>
  )
}

export default CartProvider