var showProducts=document.getElementById("showProducts");
var products=[];
var cart=[];
var cartId=0;
var user=getLoginUser();
var s= document.getElementById("s");
function getLoginUser()
{
    if(!localStorage.user){
        localStorage.user=JSON.stringify([]);
      }
      return JSON.parse(localStorage.user);
}

function displayProducts()
{checkLoginStatus();
    products=getStoredProducts();
    cart=getStoredCart();
    console.log(products);
    console.log(cart);
   for(var i=0;i<products.length;i++)
    {
    //    productId=products[i].Id;
        addProductToDOM(products[i]);
    }
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

function logout()
{
    localStorage.user=JSON.stringify([]);
    window.location.href="view products.html";
}

function getStoredProducts()
{
    if(!localStorage.products){
      localStorage.products=JSON.stringify([]);
    }
    return JSON.parse(localStorage.products);
}

function addProductToDOM(objProduct)
{
    var divProduct=document.createElement("div");
    divProduct.setAttribute("id",objProduct.Id);
    
    var txtNodeName=document.createTextNode("Name: "+objProduct.Name);
    divProduct.appendChild(txtNodeName);
    insertBlankLine(divProduct);

    var txtNodeDesc=document.createTextNode("Descryption: "+objProduct.Desc);
    divProduct.appendChild(txtNodeDesc);
    insertBlankLine(divProduct);

    var txtNodePrice=document.createTextNode("Price: "+objProduct.Price);
    divProduct.appendChild(txtNodePrice);
    insertBlankLine(divProduct);
//creating an input element for quantity
    var inputQuantity=document.createElement("input");
    inputQuantity.setAttribute("type","number");
    inputQuantity.setAttribute("id","inputQuantity"+objProduct.Id);
    inputQuantity.setAttribute("placeholder","Enter the quantity to buy");
    inputQuantity.setAttribute("width","10px");
    divProduct.appendChild(inputQuantity);

    var btnAddToproducts=document.createElement("input");
    btnAddToproducts.setAttribute("type","button");
    btnAddToproducts.setAttribute("value","Add to products");
    divProduct.appendChild(btnAddToproducts);
    insertBlankLine(divProduct);
    insertBlankLine(divProduct);

    btnAddToproducts.addEventListener("click",function()
    {
     checkStock(objProduct,objProduct.Quantity,inputQuantity);
    });

    showProducts.appendChild(divProduct);
    


}

function checkStock(objProduct,originalQuantity,inputQuantity)
{if(user.length>0){
    var quantity=document.getElementById('inputQuantity'+objProduct.Id).value;
      // quantity+="";
    if(quantity>parseInt(originalQuantity))
    {
        inputQuantity.setAttribute("placeholder","stock mai "+originalQuantity+"hai");
        inputQuantity.setAttribute("style","color:red;");
    }

    else if(inputQuantity<0)
    alert("Invalid Value");
   
    else
    {
         inputQuantity.setAttribute("style","color:green;");
         var index=0;
         var f=0;
        for(var i=0;i<cart.length;i++)
        {
            if(objProduct.Name==cart[i].Name && objProduct.Desc==cart[i].Desc && cart[i].userId==user[0].Id)
            {
                f=1;
                index=i;
                break;
            }
        }

        if(f==1)
        {
         cart[index].Quantity=quantity;
        }

       else
       {
         var objCart=new Object();
        objCart.userId=user[0].Id;
        objCart.pId=objProduct.Id;
         objCart.cartId=cartId;
         objCart.Name=objProduct.Name;
         objCart.Desc=objProduct.Desc;
         objCart.Price=objProduct.Price;
         objCart.Quantity=quantity;
         cart.push(objCart);
         cartId++;
        // console.log(cart);
            } 
            console.log(products);
            console.log(cart,user[0].Id);
            storeCart(cart);
    }

    
}
else
alert("Please login");
}


function storeCart(cart)
{
    localStorage.cart=JSON.stringify(cart);
}

function getStoredCart()
{
    if(!localStorage.cart)
    {
        localStorage.cart=JSON.stringify([]);
    }
    return JSON.parse(localStorage.cart);
}
function insertBlankLine(element)
{
var br=document.createElement("br");
element.appendChild(br);

}


function gotocheckout()
{
    window.location.href="checkout.html";
}


