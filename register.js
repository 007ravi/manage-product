var users=getStoredUser();
var userId=0;
var validate=0;
var user=[];
if(users.length==0)
{
    userId=0;
   validate=1;
}

else{
    userId=users[users.length-1].Id+1;
    validate=1;
}


function loaduser()
{

}
function registerUser()
{
    if(validate==1){
    var objUser=new Object();
    objUser.Id=userId;
    objUser.Name=document.getElementById("Name").value;
    objUser.Email=document.getElementById("Email").value;
    objUser.Pass=document.getElementById("Pass").value;
    objUser.Phone=document.getElementById("Phone").value;
    users.push(objUser);
    user.push(objUser);
   // userId++;
    storeUser(users,user);
   // user=""
   window.location.href="view products.html";
}
else
alert("Please fill valid value");
//storeUser(users);
    console.log(users);
}

function getStoredUser()
{
    if(!localStorage.users){
        localStorage.users=JSON.stringify([]);
      }
      return JSON.parse(localStorage.users);
}


function storeUser(users,user)
{   localStorage.user=JSON.stringify(user);
    localStorage.users=JSON.stringify(users);
}

function validateEmail()
{   
    var email=document.getElementById("Email").value;
    var e=document.getElementById("Email");
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(email=="" || pattern.test(email)==false )
    {validate=0;
        e.setAttribute("style","color:red;");
    }
    else{
    e.setAttribute("style","color:green;");
    validate=1;
    
    }

}
function validatePass()
{
    var pass=document.getElementById("Pass").value;
    var cpass=document.getElementById("Cpass").value;
    var c=document.getElementById("Cpass");
    console.log(pass,cpass)
    if(cpass!=pass)
    {
        validate=0;
        c.setAttribute("style","color:red;");
    }
    else
    {
        validate=1;
        c.setAttribute("style","color:green;"); 
    }
}
