import { useState } from "react";
// add my photo
import AboutImg from "./assets/img.jpeg";
// casual dress
import Casual1 from "./assets/Casual/Casual1.jpg";
import Casual2 from "./assets/Casual/Casual2.jpg";
import Casual3 from "./assets/Casual/Casual3.jpg";
import Casual4 from "./assets/Casual/Casual4.jpg";
import Formal1 from "./assets/Formal/Formal1.jpg"; //fORMAL DRESS
import Formal2 from "./assets/Formal/Formal2.jpg";
import Formal3 from "./assets/Formal/Formal3.jpg";
import Formal4 from "./assets/Formal/Formal4.jpg";
import Sportwear1 from "./assets/Sportwear/Sportwear1.jpg"; //Sportswear
import Sportwear2 from "./assets/Sportwear/Sportwear3.jpg";
import Sportwear3 from "./assets/Sportwear/Sportwear2.jpg";
import Sportwear4 from "./assets/Sportwear/Sportwear4.jpg";
import polos1 from "./assets/polos/polos1.jpg"; //fORMAL DRESS
import polos2 from "./assets/polos/polos2.jpg";
import polos3 from "./assets/polos/polos3.jpg";
import polos4 from "./assets/polos/polos4.jpg"; //Ethnic dress
import Ethnic1 from "./assets/Ethnic/Ethnic1.jpg";
import Ethnic2 from "./assets/Ethnic/Ethnic2.jpg";
import Ethnic3 from "./assets/Ethnic/Ethnic3.jpg";
import Ethnic4 from "./assets/Ethnic/Ethnic4.jpg";


function App() {
  const [products] = useState([
    {
      id: 1, name: "Casual & Everyday Wear", price: 499, category: "Casual & Everyday Wear", image: Casual1,
    }, 
    {
      id: 2, name: "Casual & Everyday Wear", price: 499, category: "Casual & Everyday Wear", image: Casual2,
    },
    {
      id: 3, name: "Casual & Everyday Wear", price: 499, category: "Casual & Everyday Wear", image: Casual3,
    },
    {
      id: 4, name: "Casual & Everyday Wear", price: 499, category: "Casual & Everyday Wear", image: Casual4,
    },
    {
      id: 5,name: "Formal & Business Wear",price: 499,category: "Formal & Business Wear", image: Formal1
    },
    {
      id: 6,name: "Formal & Business Wear",price: 499,category: "Formal & Business Wear", image: Formal2
    },
    {
      id: 7,name: "Formal & Business Wear",price: 499,category: "Formal & Business Wear", image: Formal3
    },
    {
      id: 8,name: "Formal & Business Wear",price: 499,category: "Formal & Business Wear", image: Formal4
    }, 
    {
      id: 9,name: "Athleisure & Sportswear",price: 499,category: "Athleisure & Sportswear", image: Sportwear1
    },
    {
      id: 10,name: "Athleisure & Sportswear",price: 499,category: "Athleisure & Sportswear", image: Sportwear2
    },
    {
      id: 11,name: "Athleisure & Sportswear",price: 499,category: "Athleisure & Sportswear", image: Sportwear3
    },
    {
      id: 12,name: "Athleisure & Sportswear",price: 499,category: "Athleisure & Sportswear", image: Sportwear4
    },
    {
      id: 13,name: "T-Shirts & polos",price: 499,category: "T-Shirts & polos", image: polos1
    },
    {
      id: 14,name: "T-Shirts & polos",price: 499,category: "T-Shirts & polos", image: polos2
    },
    {
      id: 15,name: "T-Shirts & polos",price: 499,category: "T-Shirts & polos", image: polos3
    },
    {
      id: 16,name: "T-Shirts & polos",price: 499,category: "T-Shirts & polos", image: polos4
    },
    {
      id: 17,name: "Ethnic & Festive Wear",price: 499,category: "Ethnic & Festive Wear", image: Ethnic1
    },
    {
      id: 18,name: "Ethnic & Festive Wear",price: 499,category: "Ethnic & Festive Wear", image: Ethnic2
    },
    {
      id: 19,name: "Ethnic & Festive Wear",price: 499,category: "Ethnic & Festive Wear", image: Ethnic3
    },
    {
      id: 20,name: "Ethnic & Festive Wear",price: 499,category: "Ethnic & Festive Wear", image: Ethnic4
    },

  ]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

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
    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    return searchMatch && categoryMatch;
  });

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const showMessage = () => {
    setMessage("Thank you! Contact us through Gmail or social media.");
  };

  return (
    <div>
      <nav className="navbar">
        <h1>ShopEasy</h1>
        <a href="#cart-section" className="cart-btn">
          Cart: {cart.length}
        </a>
      </nav>

      <section className="hero">
        <h2>Men's Wear</h2>
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
          <option value="Casual & Everyday Wear">
            Casual & Everyday Wear
          </option>
          <option value="Formal & Business Wear">
            Formal & Business Wear
          </option>
          <option value="Athleisure & Sportswear">
            Athleisure & Sportswear
          </option>
          <option value="Ethnic & Festive Wear">
            Ethnic & Festive Wear
          </option>
          <option value="T-Shirts & polos">T-Shirts & polos</option>
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
              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>
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

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}

          <h3>Total: ₹{totalAmount}</h3>
        </aside>
      </main>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img className="mens-about-img" src={AboutImg} alt="Men's Wear" />
          </div>

          <div className="about-content">
            <h4>About Us</h4>
            <h1>Modern Men's Wear Collection</h1>

            <p>
              Welcome to our Men's Wear store. We provide stylish, comfortable,
              and high-quality clothing for men. Our collection includes shirts,
              t-shirts, jeans, trousers, jackets, and formal wear.
            </p>

            <p>
              Our goal is to give every man a smart and confident look with
              affordable fashion.
            </p>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/mr_mathan2003/"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mathan-m-b03308298/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="https://github.com/mathan003"
                target="_blank"
                rel="noreferrer"
                className="github"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="mailto:mathan003m@gmail.com" className="gmail">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <a href="https://my-portfolio-tau-eosin-23.vercel.app/">
            <button >Contact Us</button>  
            </a>

            <p id="message">{message}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="https://my-portfolio-tau-eosin-23.vercel.app/">
          <p>© 2026 ShopEasy | Created by Mathan</p>
        </a>
      </footer>
    </div>
  );
}

export default App;