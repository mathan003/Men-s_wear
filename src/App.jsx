import { useState } from "react";
import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import product4 from "./assets/product4.jpg";

function App() {
  // Products are added directly in code. No Add Product form/card is shown.
  const [products] = useState([
    {
      id: 1,
      name: "T-Shirts & Polos",
      price: 499,
      category: "Casual & Everyday Wear",
      image: product1
    },
    {
      id: 2,
      name: "Casual Shirts",
      price: 999,
      category: "Casual & Everyday Wear",
      image: product2
    },
    {
      id: 3,
      name: "Bottoms",
      price: 1499,
      category: "Casual & Everyday Wear",
      image: product3
    },
    {
      id: 4,
      name: "Sports Shoes",
      price: 1299,
      category: "Ethnic & Festive Wear",
      image: product4
    }
  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "All" || product.category === category;
    return searchMatch && categoryMatch;
  });

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar">
        <h1>ShopEasy</h1>
        <a href="#cart-section" className="cart-btn">
          Cart: {cart.length}
        </a>
      </nav>

      <section className="hero">
        <h2>Men's wear</h2>
        <p>Trendy and comfortable men’s wear for every occasion.</p>
      </section>

      <section className="filters">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Casual & Everyday Wear">Casual & Everyday Wear</option>
          <option value="Formal & Business Wear">Formal & Business Wear</option>
          <option value="Athleisure & Sportswear">Athleisure & Sportswear</option>
          <option value="Ethnic & Festive Wear">Ethnic & Festive Wear</option>
        </select>
      </section>

      <main className="main-container">
        <section className="products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <h4>₹{product.price}</h4>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </section>

        <aside className="cart" id="cart-section">
          <h2>Cart Items</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-box">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}

          <h3>Total: ₹{totalAmount}</h3>
        </aside>
        
      </main>
      <footer className="footer">
  <p>© 2026 ShopEasy | Created by Mathan</p>
</footer>
      
    </div>
  );
}

export default App;
