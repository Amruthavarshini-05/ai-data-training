var cart=[];

function addToCart(product){

cart.push(product);

alert(product + " added to cart");

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

}

window.onload=function(){

let items=
JSON.parse(
localStorage.getItem("cart")
)||[];

let cartList=
document.getElementById(
"cartItems"
);

if(cartList){

items.forEach(item=>{

let li=
document.createElement("li");

li.innerText=item;

cartList.appendChild(li);

});

}

}