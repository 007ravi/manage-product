var cart=[];
var products=[];
var user=getLoginUser();
cartId=0;
var total=document.getElementById("total");
var showProducts=document.getElementById("showProducts");
var s= document.getElementById("s");
 var total=document.getElementById("total");
function TotalAmount()
{
   /* if(cart.length==0)
    {
    total=0;
    }
    else{

    }*/
}
if(cart.length==0)
cartId=0;
 
function displayCart()
{ TotalAmount();
    checkLoginStatus();
    cart=getStoredCart();
    products=getStoredProducts();
    for(var i=0;i<cart.length;i++)
    {   //cartId=cart[i].cartId;
        if(cart[i].userId==user[0].Id)
        addCartToDOM(cart[i]);
    }
    
   // console.log(cart);
}

function TotalAmount()
{
    var t=0;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].userId==user[0].Id)
        {
            t=(parseInt(t)+parseInt(cart[i].Price)).toString();
        }
    }
total.innerHTML=t;
}
function getStoredProducts()
{
    if(!localStorage.products){
      localStorage.products=JSON.stringify([]);
    }
    return JSON.parse(localStorage.products);
}

function getStoredCart()
{
    if(!localStorage.cart)
    {
        localStorage.cart=JSON.stringify([]);
    }
    return JSON.parse(localStorage.cart);
}

function addCartToDOM(objCart)
{
    var divCart=document.createElement("div");
    divCart.setAttribute("id",objCart.cartId);

    var txtNodeName=document.createTextNode("Name: "+objCart.Name);
    divCart.appendChild(txtNodeName);
    insertBlankLine(divCart);

    var txtNodeDesc=document.createTextNode("Descryption: "+objCart.Desc);
    divCart.appendChild(txtNodeDesc);
    insertBlankLine(divCart);

    var txtNodePrice=document.createTextNode("Price: "+objCart.Price);
    divCart.appendChild(txtNodePrice);
    insertBlankLine(divCart);

    var btnremoveFromCart=document.createElement("input");
    btnremoveFromCart.setAttribute("type","button");
    btnremoveFromCart.setAttribute("value","Remove item");
    btnremoveFromCart.setAttribute('onclick','removeItemFromCart('+divCart.id+')')
    divCart.appendChild(btnremoveFromCart);
    insertBlankLine(divCart);
    insertBlankLine(divCart);

    showProducts.appendChild(divCart);
}

function storeCart(cart)
{
    localStorage.cart=JSON.stringify(cart);
}
function removeItemFromCart(index)
{
    //console.log(index)
    var i;
    for(i=0;i<cart.length;i++)
    {
        if(cart[i].cartId==index && cart[i].userId==user[0].Id)
            break;
    }
   showProducts.removeChild(document.getElementById(index));
   removeFromCartArray(i);
}
function removeFromCartArray(index)
{
    
cart.splice(index,1);
storeCart(cart);
TotalAmount();

}
function updateProductArray()
{deleteCartDOM(); 
    var j;
    TotalAmount();
    for(var i=0;i<cart.length;i++)
    {if(cart[i].userId==user[0].Id)
        {
            for(j=0;j<products.length;j++)
            {    if(cart[i].pId==products[j].Id && products[j].Quantity>0)
                {
                products[j].Quantity=(parseInt(products[j].Quantity)-parseInt(cart[i].Quantity)).toString(); 
                
                cart.splice(i,1);
                storeCart(cart);
                i=i-1;
                break;
                }
            }
        }

    }


    storeProduct(products);
   // console.log(products);

}

function storeProduct(products)
{
    localStorage.products=JSON.stringify(products);
}

function deleteCartDOM()
{
while(showProducts.firstChild!=null)
{
    showProducts.removeChild(showProducts.firstChild);
}
}
function insertBlankLine(element)
{
var br=document.createElement("br");
element.appendChild(br);

}


function checkLoginStatus()
{
if(user.length>0)
{var name=user[0].Name;
    var str="";
    s.removeChild(document.getElementById("s1"));
    var s2=document.getElementById("s2");
    str=str+'Hi<br>'+name+'<br><button onclick=logout()>LOGOUT</button> ';
    s2.innerHTML=str;   
}
}


function getLoginUser()
{
    if(!localStorage.user){
        localStorage.user=JSON.stringify([]);
      }
      return JSON.parse(localStorage.user);
}



function logout()
{
    localStorage.user=JSON.stringify([]);
    window.location.href="view products.html";
}