import {createContext, useState, useEffect} from 'react'


const CartContext = createContext();
export default CartContext





export const CartProvider= ({children})=> {
    let [cart,setCart] = useState(()=> localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[
    
    ])
    
    useEffect(()=>{
        cart&&localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])

    let addToCart =(i,q)=>{
        // console.log(cart)
        
        // console.log(cart)
        if(cart.some(c => c.title === i.title)){
          let index = cart.findIndex(c => c.title === i.title);
          let cartItem=cart[index];
          // console.log(index)
          cartItem.qty=cart[index].qty+q
          setCart([...cart.slice(0,index),cartItem,...cart.slice(index+1,cart.length)]);
        }
        else{
        let product=i
       
        product.qty=q
        cart!==null?setCart(cart=>[...cart,product]):setCart(product)
        }

    }

    let upQty=(i)=>{
        let index = cart.indexOf(i);
        let cartItem=cart[index];
        cartItem.qty=cart[index].qty+1
        setCart([...cart.slice(0,index),cartItem,...cart.slice(index+1,cart.length)]);
    }
    let downQty=(i)=>{
        let index = cart.indexOf(i);
        let cartItem=cart[index];
        if(cartItem.qty>1){
            cartItem.qty=cart[index].qty-1
            setCart([...cart.slice(0,index),cartItem,...cart.slice(index+1,cart.length)]);
        }
        else{
            removeItem(i)
        }
    }
    let removeItem=(i)=>{
        let index = cart.indexOf(i);
        setCart([...cart.slice(0,index),...cart.slice(index+1,cart.length)]);
    }
    let cartTotal=()=>{
        let total =0
        cart&&cart.map((item,i)=>{
            total+=(item.referance_price*item.qty)
        })
        return total
    }

    let cartCount=()=>{
        let count =0
        cart&&cart.map((item,i)=>{
            count+=item.qty
        })
        return count
    }


    let contextData={
        
        cart:cart,
        setCart: setCart,
        addToCart:addToCart,
        upQty:upQty,
        downQty:downQty,
        removeItem:removeItem,
        cartTotal:cartTotal,
        cartCount:cartCount
    };



    return(
    <CartContext.Provider value={contextData}>
        {children}
    </CartContext.Provider>
    )

}