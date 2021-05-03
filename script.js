var wrap = document.body.querySelector(".wrap");
var username= "cool";
var password= "password";
function hide() {
  var x = document.getElementById(".wrap2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function pass(){
  var grades =document.body.querySelector(".wrap2")
  var pages = [
    {
      name: "Grade View",
      content: "Grades"
    },
    {
      name:"Add Grade",
      content: "Add Grade"
    }
  ]
}
if(password=== "password"){
  pass();
}else{
  wrap.innerHTML="The username or password you entered were incorrect."
}