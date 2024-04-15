// import '../styles/Cart.css';
// import { useState } from 'react'
//
// function Cart({ cart, updateCart }){
//
//     //const [cart, updateCart] = useState(0)
//     const [isOpen, setIsOpen] = useState(false)
//
//     const tabPlante = [
//         {nom:"monstera", price:8},
//         {nom:"lierre", price:10},
//         {nom:"bouquet", price:15}
//     ]
//
//     let total = 0
//     for(let i = 0; i < tabPlante.length; ++i){
//         total += tabPlante[i].price
//     }
//
//     return isOpen ? (
//         <div className='lmj-cart'>
//             <button
//                 className='lmj-cart-toggle-button'
//                 onClick={() => setIsOpen(false)}
//             >Fermer </button>
//                 <p>Panier</p>
//
//                 <ul>
//                     <li>{tabPlante[0].nom + " " + tabPlante[0].price}</li>
//                     {/*<button onClick={() => updateCart(cart + 1)}>*/}
//                     {/*    Ajouter*/}
//                     {/*</button>*/}
//                     <li>{tabPlante[1].nom + " " + tabPlante[1].price}</li>
//                     <li>{tabPlante[2].nom + " " + tabPlante[2].price}</li>
//                 </ul>
//
//                 <p>Total :{total}</p>
//                 <p>Total Monstera : {tabPlante[0].price * cart} €</p>
//
//                 <button onClick={() => updateCart(0)}>Vider le panier</button>
//
//         </div>
// ) : (
//         <div className='lmj-cart-closed'>
//             <button
//                 className='lmj-cart-toggle-button'
//                 onClick={() => setIsOpen(true)}
//             >
//                 Ouvrir le Panier
//             </button>
//         </div>
// )
// }
//
// export default Cart;


import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    )
    // useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // }) //SE DECLANCHE APRES CHAQUE EVENEMENT

    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total]) //SE declenche que si mon total change
    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart