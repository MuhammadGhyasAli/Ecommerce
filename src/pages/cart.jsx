"use client"

import { useState } from "react"
import Header from "../components/header"
import PageData from "../components/productPageItems"
import Footer from "../components/footer"
import "../css/cart.css"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, removeAll, removeFromCart, updateQuantity } = useCart()

  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const calculateTax = () => calculateSubtotal() * 0.1

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    const tax = calculateTax()
    const discount = couponApplied ? 80.0 : 0
    return subtotal + tax - discount
  }

  const applyCoupon = () => {
    setIsLoading(true)
    setTimeout(() => {
      if (couponCode.trim().toUpperCase() === "SAVE80") {
        setCouponApplied(true)
      } else {
        setCouponApplied(false)
        alert("Invalid coupon code")
      }
      setIsLoading(false)
    }, 500)
  }

  const handleCheckout = () => {
    setIsLoading(true)
    setTimeout(() => {
      alert("Proceeding to checkout...")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="cart-container">
      <Header />

      <main className="cart-main">
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-breadcrumb">
            <button className="breadcrumb-btn" onClick={() => navigate("/order")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
              Continue Shopping
            </button>
          </div>
          <h1 className="cart-main-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.05 7H5.12" />
            </svg>
            <span className="title-text">Shopping Cart</span>
            <span className="cart-count">({cartItems.length} items)</span>
          </h1>
        </div>

        <div className="cart-content">
          {/* Cart Items Section */}
          <section className="cart-section">
            <div className="cart-items-container">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <svg
                    className="empty-cart-icon"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57L20.05 7H5.12" />
                  </svg>
                  <h3>Your cart is empty</h3>
                  <p>Looks like you haven't added any items to your cart yet.</p>
                  <button className="start-shopping-btn" onClick={() => navigate("/order")}>
                    Start Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Desktop Header - Hidden on mobile */}
                  <div className="cart-items-header desktop-only">
                    <span>Product</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                    <span></span>
                  </div>

                  <div className="cart-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <div className="item-product">
                          <div className="item-image-container">
                            <img
                              src={item.image || "/placeholder.svg?height=80&width=80"}
                              alt={item.name}
                              className="item-image"
                            />
                          </div>
                          <div className="item-details">
                            <h3 className="item-name">{item.name}</h3>
                            <p className="item-seller">Sold by {item.seller}</p>
                            <div className="item-badges">
                              <span className="badge">In Stock</span>
                              <span className="badge free-shipping">Free Shipping</span>
                            </div>
                            {/* Mobile price display */}
                            <div className="mobile-price">
                              <span className="price-label">Price:</span>
                              <span className="price">${item.price.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="item-controls-mobile">
                          <div className="quantity-section">
                            <span className="quantity-label">Quantity:</span>
                            <div className="quantity-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, "decrease")}
                                disabled={item.quantity <= 1}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M5 12h14" />
                                </svg>
                              </button>
                              <input type="number" value={item.quantity} className="quantity-input" readOnly />
                              <button className="quantity-btn" onClick={() => updateQuantity(item.id, "increase")}>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M12 5v14m-7-7h14" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="item-total-mobile">
                            <span className="total-label">Total:</span>
                            <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>

                          <button
                            className="remove-btn-mobile"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove item"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c-1 0 2 1 2 2v2" />
                            </svg>
                            Remove
                          </button>
                        </div>

                        {/* Desktop layout - Hidden on mobile */}
                        <div className="desktop-item-layout">
                          <div className="item-quantity desktop-only">
                            <div className="quantity-controls">
                              <button
                                className="quantity-btn"
                                onClick={() => updateQuantity(item.id, "decrease")}
                                disabled={item.quantity <= 1}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M5 12h14" />
                                </svg>
                              </button>
                              <input type="number" value={item.quantity} className="quantity-input" readOnly />
                              <button className="quantity-btn" onClick={() => updateQuantity(item.id, "increase")}>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M12 5v14m-7-7h14" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div className="item-price desktop-only">
                            <span className="price">${item.price.toFixed(2)}</span>
                          </div>

                          <div className="item-total desktop-only">
                            <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                          </div>

                          <div className="item-actions desktop-only">
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)} title="Remove item">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c-1 0 2 1 2 2v2" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cart-footer-actions">
                    <button
                      className="clear-cart-btn"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to remove all items?")) {
                          removeAll()
                        }
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c-1 0 2 1 2 2v2" />
                      </svg>
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Checkout Summary */}
          {cartItems.length > 0 && (
            <aside className="checkout-summary">
              <div className="summary-header">
                <h2>Order Summary</h2>
              </div>

              <div className="summary-content">
                <div className="summary-row">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free">Free</span>
                </div>

                {couponApplied && (
                  <div className="summary-row discount-row">
                    <span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                      Coupon Discount
                    </span>
                    <span className="discount">-$80.00</span>
                  </div>
                )}

                <div className="summary-row">
                  <span>Tax</span>
                  <span>${calculateTax().toFixed(2)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>

                <div className="checkout-actions">
                  <button className="checkout-btn primary" onClick={handleCheckout} disabled={isLoading}>
                    {isLoading ? (
                      <div className="loading-spinner"></div>
                    ) : (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                          <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                        Proceed to Checkout
                      </>
                    )}
                  </button>
                </div>

                <div className="coupon-section">
                  <div className="coupon-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span>Have a promo code?</span>
                  </div>
                  <div className="coupon-input-container">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="coupon-input"
                    />
                    <button onClick={applyCoupon} className="apply-btn" disabled={isLoading || !couponCode.trim()}>
                      {isLoading ? "..." : "Apply"}
                    </button>
                  </div>
                  {couponApplied && <div className="coupon-success">✓ Coupon "SAVE80" applied successfully!</div>}
                </div>

                <div className="security-badges">
                  <div className="security-item">
                    <span className="security-icon">🔒</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="security-item">
                    <span className="security-icon">📦</span>
                    <span>Free Returns</span>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>

        {/* Recommended Products */}
        <section className="recommended-section">
          <PageData />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Cart
