
// INIT
emailjs.init("W4kuGxcS5NjujkGx");

function sendMessage(){

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

if(!name || !email || !message){
alert("Please fill all fields");
return;
}

// EMAILJS PARAMS MUST MATCH TEMPLATE EXACTLY
let params = {
name: name,
email: email,
title: "Contact Form Message",
message: message
};

emailjs.send("service_us1gfeu","template_qlfqwyj",params)
.then(function(response){

alert("Message submitted successfully!");

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";

})
.catch(function(error){
console.log("EMAILJS ERROR:", error);
alert("Message not submitted. Check console.");
});

}

// gallery animation (UNCHANGED)
const cards = document.querySelectorAll(".card");

function reveal(){
let trigger = window.innerHeight * 0.85;

cards.forEach(c=>{
if(c.getBoundingClientRect().top < trigger){
c.style.opacity = 1;
c.style.transform = "translateY(0)";
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);