
// for(let i=0;true;i++)
// {
//   console.log('hi')
// }


var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function validateform(e){ 
 
let name = document.forms["myForm"]["fname"].value;
console.log(name)

  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}  
  
else if (name.length > 20){  
    alert("Name is too long");  
    return false;  
  }
else if(/\d/.test(name)){
    alert("Name should not contain number");  
    return false; 
}
}  
