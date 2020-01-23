var products=[];
var productId=0;
var divAddProduct=document.getElementById("divAddProduct");
var divListProduct=document.getElementById("divListProduct");
var aAddProduct=document.getElementById("aAddProduct");
var f=0;
 
aAddProduct.addEventListener("click",function()
{delProductPanel();
createProductPanel(0,0);

});

if(products.length==0)
productId=0;

function updateAll()
{
    products = getStoredProducts();
    console.log(products);
    for(var i = 0; i < products.length; i++)
    {
        productId = products[i].Id;
        addProductToDOM(products[i]);
    }
    productId += 1;
 
}

function storeProduct(products)
{
    localStorage.products = JSON.stringify(products);
}

function getStoredProducts() {
    if (!localStorage.products) {
        localStorage.products = JSON.stringify([]);
    }
    return JSON.parse(localStorage.products);
}

function addProducttoArray()
{
    var objProduct=new Object();
    objProduct.Id=productId;
    objProduct.Name=document.getElementById("txtProductName").value;
     objProduct.Desc=document.getElementById("txtProductDesc").value;
     objProduct.Price=document.getElementById("txtProductPrice").value;
     objProduct.Quantity=document.getElementById("txtProductQuantity").value;
      products.push(objProduct);
      addProductToDOM(objProduct);
      delProductPanel();
      productId++;
}
  function insertLine(element)
  {
		var br=document.createElement("br");
		element.appendChild(br);	
  }

function addProductToDOM(objProduct)
{ console.log(products);
    var divProduct=document.createElement("div");
    divProduct.setAttribute("id",productId);

    var txtNodeName=document.createTextNode(objProduct.Name);
    divProduct.appendChild(txtNodeName);
    insertLine(divProduct);
     
    var txtNodeDesc=document.createTextNode(objProduct.Desc);
    divProduct.appendChild(txtNodeDesc);
    insertLine(divProduct);

    var txtNodePrice=document.createTextNode(objProduct.Price);
    divProduct.appendChild(txtNodePrice);
    insertLine(divProduct);

    var txtNodeQuantity=document.createTextNode(objProduct.Quantity);
    divProduct.appendChild(txtNodeQuantity);
    insertLine(divProduct);

    var delProductBtn=document.createElement("input");
    delProductBtn.setAttribute("type","button");
    delProductBtn.setAttribute("value","Delete");
    divProduct.appendChild(delProductBtn);
    delProductBtn.addEventListener("click",function()
    {
        var selectedProductIndex = getProductIndex(parseInt(divProduct.id));
         removeFromProductsArray(selectedProductIndex);
         divProduct.parentNode.removeChild(divProduct);
         storeProduct(products);
    });

    var editProductBtn=document.createElement("input");
    editProductBtn.setAttribute("type","button");
    editProductBtn.setAttribute("value","Edit");
    divProduct.appendChild(editProductBtn);
    editProductBtn.addEventListener("click",function()
    {
    var selectedProductIndex=getProductIndex(divProduct.id);
          editInProductArray(selectedProductIndex);
          storeProduct(products);

    });
    divListProducts.appendChild(divProduct);
}

function removeFromProductsArray(index)
{
    products.splice(index,1);
    console.log(products);
}

function editInProductArray(index)
{delProductPanel();
createProductPanel(index,1);
}

function getProductIndex(id)
{
for(var i=0;i<products.length;i++)
{
    if(products[i].Id==id)
    return i;
}
}


function delProductPanel()
{
   var childNodes = divAddProduct.childNodes;
   for (var i = 0;childNodes.length > 0;) 
   {
     divAddProduct.removeChild(childNodes[i]);
   }

   unHideAddProductLink();
}

function unHideAddProductLink()
{
	aAddProduct.setAttribute("style","visibility:visible");
}

function insertTwoBlankLine(element)
{
    for(var i=0;i<2;i++)
    {
        var br=document.createElement("br");
        element.appendChild(br);
    }
}

function hideAddNewProductLink()
{
aAddProduct.setAttribute("style","visibility:hidden");
}

function createProductPanel(i,f)
{
	
if(f==0)
{
	hideAddNewProductLink();
	var lblAddProduct = document.createElement("label");
	lblAddProduct.innerHTML = "Add New Product";
	lblAddProduct.setAttribute("style","font-weight:bold");
    divAddProduct.appendChild(lblAddProduct);

	insertTwoBlankLine(divAddProduct);
	
	
	
	var txtProductName = document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","txtProductName");
    txtProductName.setAttribute("placeholder", "Enter the product name");	
	txtProductName.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductName);	
	
	
	insertTwoBlankLine(divAddProduct);
	

	var txtProductDesc = document.createElement("textarea");
	txtProductDesc.setAttribute("id","txtProductDesc");
    txtProductDesc.setAttribute("placeholder", "Enter the product description");	
	txtProductDesc.setAttribute("style","width:250px ; height:50px");
	divAddProduct.appendChild(txtProductDesc);	
	
	insertTwoBlankLine(divAddProduct);
	

	
	var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","txtProductPrice");
    txtProductPrice.setAttribute("placeholder", "Enter the product price");	
	txtProductPrice.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductPrice);	
	
	insertTwoBlankLine(divAddProduct);
	
	
	/* TextBox - Product Quantity */ 
	var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
    txtProductQuantity.setAttribute("placeholder", "Enter the product quantity");	
	txtProductQuantity.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductQuantity);	
	
	insertTwoBlankLine(divAddProduct);

	
	/* Button - Add Product */ 
	var btnAddButton = document.createElement("button");
	btnAddButton.setAttribute("id","btnAddButton");
	btnAddButton.innerHTML = "Add Product";
	divAddProduct.appendChild(btnAddButton);		
		
    btnAddButton.addEventListener("click", function()
											{
                                                addProducttoArray();
                                               storeProduct(products);
                                               //updateAll();
											}
                                 );	
                                        
    }
    else 
    {
     var index=i;
     delProductPanel();
     unHideAddProductLink();
	var lblAddProduct = document.createElement("label");
	lblAddProduct.innerHTML = "Edit Product";
	lblAddProduct.setAttribute("style","font-weight:bold");
    divAddProduct.appendChild(lblAddProduct);
	insertTwoBlankLine(divAddProduct);

	var txtProductName = document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","txtProductName");
    txtProductName.setAttribute("value", products[index].Name);	
	txtProductName.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductName);	
	insertTwoBlankLine(divAddProduct);
	
    var txtProductDesc = document.createElement("input");
    txtProductDesc.setAttribute("type","text");
	txtProductDesc.setAttribute("id","txtProductDesc");
    txtProductDesc.setAttribute("value", products[index].Desc);	
	txtProductDesc.setAttribute("style","width:250px ; height:50px");
	divAddProduct.appendChild(txtProductDesc);	
	insertTwoBlankLine(divAddProduct);
	
	var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","txtProductPrice");
    txtProductPrice.setAttribute("value", products[index].Price);	
	txtProductPrice.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductPrice);	
	insertTwoBlankLine(divAddProduct);
	
	var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
    txtProductQuantity.setAttribute("value", products[index].Quantity);	
	txtProductQuantity.setAttribute("style","width:250px");
	divAddProduct.appendChild(txtProductQuantity);	
     insertTwoBlankLine(divAddProduct);

	
	/* Button - Add Product */ 
	var btnUpdateButton = document.createElement("button");
	btnUpdateButton.setAttribute("id","btnUpdateButton");
	btnUpdateButton.innerHTML = "update";
	divAddProduct.appendChild(btnUpdateButton);		
		
    btnUpdateButton.addEventListener("click", function()
	{ 
     addUpdateProductToArray(index);
    storeProduct(products);
	}
     );	

    }

    var btnCancelButton = document.createElement("button");
    btnCancelButton.setAttribute("id","btnCancelButton");
    btnCancelButton.innerHTML = "Cancel";
    divAddProduct.appendChild(btnCancelButton);    
    btnCancelButton.addEventListener("click", function()
   { 
delProductPanel();
   }
    );

}
function addUpdateProductToArray(index)
{ //  console.log(products);
    products[index].Name=document.getElementById("txtProductName").value;
    products[index].Desc=document.getElementById("txtProductDesc").value;
    products[index].Price=document.getElementById("txtProductPrice").value;
    products[index].Quantity=document.getElementById("txtProductQuantity").value;
    console.log(products);
    //
    addUpdateProductToDOM(products[index].Id,index);
}



function addUpdateProductToDOM(targetId,index)
{
    var childNode=document.getElementById(targetId).childNodes;
 
    childNode[0].nodeValue=products[index].Name;
    childNode[2].nodeValue=products[index].Desc;
    childNode[4].nodeValue=products[index].Price;
    childNode[6].nodeValue=products[index].Quantity;

}