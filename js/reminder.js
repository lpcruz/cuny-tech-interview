const button = document.querySelector('button');
const confirmationMessage = document.querySelector('#confirmation');

const data = {
  wantsToBeReminded: false,
  dateClicked: new Date()
}


function remindMe() {
  const session = Object.create(data);
  
  session.wantsToReminded = true
  session.dateClicked = new Date();
  
  this.showConfirmationMessage();
  
  return this;
}

function showConfirmationMessage() {
  confirmationMessage.innerHTML = 'OK! You have some time to do these things. You will be reminded after 3 days!';
  button.style = 'display:none;';

  return this;
}