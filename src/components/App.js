import Banner from "./Banner"
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import '../styles/Layout.css'
import { useState, useEffect } from 'react'


function App() {

    const savedCart = localStorage.getItem('cart')

    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

  return (
      <div>
          <Banner/>
          {/*<Banner>*/}
          {/*    <img src={logo} alt='La maison jungle' />*/}
          {/*    <h1 className='lmj-title'>La maison jungle</h1>*/}
          {/*</Banner>*/}
          <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />

              <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
          <QuestionForm/>
          <Footer/>
      </div>
  );
}

export default App;
