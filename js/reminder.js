const button = document.querySelector('button');
const confirmationMessage = document.querySelector('#confirmation');
const threeDayReminderNotification = document.querySelector('#reminder-notification');

// Mock 3 days after 
const testData = new Date('Wed Feb 23 2019 08:55:19 GMT-0500 (Eastern Standard Time)');

const data = {
  wantsToBeReminded: false,
  dateClicked: new Date()
}

function showConfirmationMessage() {
  confirmationMessage.innerHTML = 'OK! You have some time to do these things. You will be reminded after 3 days!';
  button.style = 'display:none;';

  return this;
}

function displayReminderNotification(data) {

  // Get the current time
  let currentTime = Math.round(Date.now() / 1000);

  // Wait for 3 days until it displays a notification message
  // 259200 is 3 days in seconds
  const maxAmountOfTimeBeforeNotified = 259200;

  // Convert the dateClicked time into seconds
  let timeWhenReminderButtonWasClicked = Math.round(data.dateClicked.getTime() / 1000);
  
  // Define the time difference between now and when the button was clicked
  let timeDifference = currentTime - timeWhenReminderButtonWasClicked;

  if (timeDifference > maxAmountOfTimeBeforeNotified) {
    confirmationMessage.style = 'display: none;'
    button.style = 'display: none;'
    threeDayReminderNotification.innerHTML = 'Time to do those things!'
  } else {
    console.log('It has not been 3 days yet. Calm down.');
  }

  return this;

}

function remindMe() {
  const session = Object.create(data);
  
  session.wantsToReminded = true
  session.dateClicked = new Date();
  
  // display confirmation 
  this.showConfirmationMessage();
  
  //init reminder check
  this.displayReminderNotification(session);

}
