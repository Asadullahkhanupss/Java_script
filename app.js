let btn = document.getElementById('togglebtn');
let body = document.getElementById('body');
let para = document.getElementById('para');
let contactName = document.getElementById('userInput');
let contactEmail = document.getElementById('emailInput');
let contactMess = document.getElementById('messInput');
let card = document.getElementById('card-bcg');


btn.addEventListener('click' ,theme);

function theme() {
  if (btn.textContent.includes('Dark')) {
    btn.textContent ="Light Theme";
    btn.style.boxShadow = '3px 3px 4px 4px green'; 
    btn.className = `btn btn-outline-success` ;
    body.style.backgroundColor = "black" ;
    body.style.color = "gold" ;
    contactName.style.backgroundColor = "#0A0A0A" ;
    contactName.style.color = "whitesmoke" ;
    contactEmail.style.backgroundColor = "#0A0A0A" ;
    contactEmail.style.color = "white" ;
    contactMess.style.backgroundColor = "#0A0A0A" ;
    contactMess.style.color = "white" ;
    card.style.backgroundColor = "#0A0A0A" ;
    card.style.color = "gold" ;
  }
  else{
    btn.textContent = "Dark Theme";
    btn.style.boxShadow = '3px 3px 4px 4px red'; 
    btn.className = `btn btn-outline-danger` ;
    body.style.backgroundColor = "white" ;
    body.style.color = "black" ;
    contactName.style.backgroundColor = "white" ;
    contactEmail.style.backgroundColor = "white" ;
    contactMess.style.backgroundColor = "white" ;
    


  }  
}


function takeInput() {
  const userEnterName = document.getElementById('userInput').value;
  const userEnterEmail = document.getElementById('emailInput').value;
  const userEnterMess = document.getElementById('messInput').value;
  // console.log('Client Name:', userEnterName);
  // console.log('Client Email', userEnterEmail);
  // console.log('Client Message', userEnterMess);
  if (userEnterName == value) {
   console.log('Client Name:', userEnterName);
  }
  else{
    console.log("error")
  }
}











