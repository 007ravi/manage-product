var aAddProduct=document.getElementById("aAddProduct");
var divAddProduct=document.getElementById("divAddProduct");
var divListProducts=document.getElementById("divListProducts");
var c=1;
var id=0;
 aAddProduct.addEventListener("click",function(event){
 		createNewProductPanel(id);
 	});

function hideAddProductLink()
{aAddProduct.setAttribute("style","visibility:hidden");
}
function unHideAddProductLink()
{
	aAddProduct.setAttribute("style","visibility:visible");
}
function insertBlankLine(element)
{var i;
	for(i=0;i<2;i++)
	{
		var br=document.createElement("br");
		element.appendChild(br);
	}
}

function insertSpace(element)
{
	var space=document.createTextNode("    ");
	 //element=" ";
	 element.appendChild(space);
}
function insertOneBlankLine(element)
{
	var br=document.createElement("br");
	element.appendChild(br);
}
function addProduct()
{ 
	var txtProductInfo=document.getElementById("txtProductInfo").value;
	var txtProductName=document.getElementById("txtProductName").value;
	var txtProductPrice=document.getElementById("txtProductPrice").value;
	var txtProductQuantity=document.getElementById("txtProductQuantity").value;

	var ListProducts=document.createElement("div");
	ListProducts.setAttribute("id",c);

	var name=document.createTextNode(txtProductName);
	ListProducts.appendChild(name);
	insertOneBlankLine(ListProducts);

	var info=document.createTextNode(txtProductInfo);
	ListProducts.appendChild(info);
	insertOneBlankLine(ListProducts);

	var price=document.createTextNode(txtProductPrice);
	ListProducts.appendChild(price);
	insertOneBlankLine(ListProducts);

	var quantity=document.createTextNode(txtProductQuantity);
	ListProducts.appendChild(quantity);
	insertOneBlankLine(ListProducts);


	str = '<button onclick="'+'delListProduct('+c+')" > Delete</button>';
	str += '<button onclick="'+'editList('+c+')" > Edit</button><br>';
	var p = document.createElement('p');

	p.innerHTML = str;
	ListProducts.appendChild(p);
	 divListProducts.appendChild(ListProducts);
	 c=c+1;

	// console.log("------"+c);
}
function delListProduct(c)
{
var productId=document.getElementById(c);
divListProducts.removeChild(productId);
//	console.log(c);
}
function editList(c)
{
	//createNewProductPanel(c);
var node=document.getElementById(c).childNodes;
var a=[];
i=0;
// while(productId.firstChild)
// {if(productId.firstChild.nodeValue !=null)
// 	{
// 	a[i]=productId.firstChild.nodeValue;
// i++;
// 	}
//productId.removeChild(productId.firstChild);
//}
//}
	for(i=0;i<node.length;i++)
	{
	console.log(node[i].nodeValue);
	}

//console.log(a);
//console.log(productId.firstChild.nodeValue);
  createNewProductPanel(c);
}
function createNewProductPanel(id)
{
	hideAddProductLink();
	var lblAddproduct=document.createElement("label");
	lblAddproduct.innerHTML="Add new Product";
	//lblAddproduct.setAttribute("style","")
	divAddProduct.appendChild(lblAddproduct);
	insertBlankLine(divAddProduct);
	 
	var txtProductName=document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","txtProductName");
	txtProductName.setAttribute("placeholder","Enter the name of the product");
	if(id!=0)
	{var node=document.getElementById(id).childNodes;
txtProductName.setAttribute("value",node[0].nodeValue);
	}
	divAddProduct.appendChild(txtProductName);
	insertBlankLine(divAddProduct);

	var txtProductInfo=document.createElement("textarea");
	txtProductInfo.setAttribute("id","txtProductInfo");
	txtProductInfo.setAttribute("placeholder","Enter the product information");
	txtProductInfo.setAttribute("type","text");
	txtProductInfo.setAttribute("style","width:300px;"); 
	if(id!=0)
	{
		var node=document.getElementById(id).nodeValue;
		txtProductInfo.setAttribute("value",node[2].nodeValue);
	}
	divAddProduct.appendChild(txtProductInfo);
	insertBlankLine(divAddProduct);

	var txtProductPrice=document.createElement("input");
	txtProductPrice.setAttribute("type","number");
	txtProductPrice.setAttribute("placeholder","Enter the product price");
	txtProductPrice.setAttribute("id","txtProductPrice");
	if(id!=0)
	{
		var node=document.getElementById(id).nodeValue;
		txtProductPrice.setAttribute("value",node[4].nodeValue);
	}
	divAddProduct.appendChild(txtProductPrice);
	insertBlankLine(divAddProduct);
	
	var txtProductQuantity=document.createElement("input");
	txtProductQuantity.setAttribute("id","txtProductQuantity");
	txtProductQuantity.setAttribute("type","number");
	txtProductQuantity.setAttribute("placeholder","Enter the product quantity");
	if(id!=0)
	{
		var node=document.getElementById(id).nodeValue;
		txtProductQuantity.setAttribute("value",node[6].nodeValue);
	}
	divAddProduct.appendChild(txtProductQuantity);
	insertBlankLine(divAddProduct);
     
	var btnSubmit=document.createElement("input");
	btnSubmit.setAttribute("id","btnSubmit");
	btnSubmit.setAttribute("type","button");
	btnSubmit.setAttribute("value","SUBMIT");
	divAddProduct.appendChild(btnSubmit);
	insertSpace(divAddProduct);

	 btnSubmit.addEventListener("click",function(){
	  addProduct();
	  /*while(divAddProduct.firstChild)
	  {
		  divAddProduct.removeChild(divAddProduct.firstChild);
	  }*/

	  unHideAddProductLink();
	 });
	var btnCancel=document.createElement("input");
	btnCancel.setAttribute("id","btnCancel");
	btnCancel.setAttribute("type","button");
	btnCancel.setAttribute("value","Cancel");
	divAddProduct.appendChild(btnCancel);
	btnCancel.addEventListener("click",function(event)
	 {
   while(divAddProduct.firstChild)
   {
	   divAddProduct.removeChild(divAddProduct.firstChild);
   }
   unHideAddProductLink();
	 });
}