var user=getloginUser();
var users=[];

 if(user.length>0)
 {
 window.location.href="view products.html";
}
function validateUser()
{users=getStoredUser();
  var Email=document.getElementById("Email").value;
  var Pass=document.getElementById("Pass").value;
  var f = checkDetails(Email, Pass);

  if(f != null)
  {
    storeLoginUser(f);
    window.location.href="view products.html";
  }
  else alert("wrong details");
  
}
function getloginUser()
{
  if(!localStorage.user){
    localStorage.user=JSON.stringify([]);
  }
  return JSON.parse(localStorage.user);
}

function checkDetails(email, pass)
{
    for(i=0;i<users.length;i++)
    {
      if(users[i].Email==email && users[i].Pass==pass)
        return i;
    }
    return null;
}
function storeLoginUser(i)
{var objUser=new Object();
    objUser.Id=users[i].Id;
    objUser.Name=users[i].Name;
    objUser.Email=users[i].Email;
    objUser.Pass=users[i].Pass;
    objUser.Phone=users[i].Phone;
    user.push(objUser);

    localStorage.user=JSON.stringify(user);
}

function getStoredUser()
{
    if(!localStorage.users){
        localStorage.users=JSON.stringify([]);
      }
      return JSON.parse(localStorage.users);
}





















