``// inserts players into selection tab
let count = 0;
function insertIntoSelection(playerName) {
  // checks to see if 5 players are already selected.
  // if 5 selected, then it returns false, and it shows alert
  console.log(document.getElementById('player-list').childElementCount);
  if (document.getElementById('player-list').childElementCount > 4) {
    alert('Limit Exceeded.');
    return false;
  }

  count++;

  const element = document.createElement('li');
  element.innerHTML = count + '. ' + playerName;

  document.getElementById('player-list').appendChild(element);
}

// disable button and change button color
function disableButton(btnId) {
  document.getElementById(btnId).disabled = true;
  document.getElementById(btnId).style.backgroundColor = 'gray';
}

// retrieving players
document
  .getElementById('player-one-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-one-btn');
  });
document
  .getElementById('player-two-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-two-btn');
  });
document
  .getElementById('player-three-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-three-btn');
  });
document
  .getElementById('player-four-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-four-btn');
  });
document
  .getElementById('player-five-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-five-btn');
  });
document
  .getElementById('player-six-btn')
  .addEventListener('click', function (event) {
    const flag = insertIntoSelection(event.target.value);

    if (flag === false) {
      return;
    }
    disableButton('player-six-btn');
  });

// inserts data into text field
function insertIntoTextField(inputId, data) {
  document.getElementById(inputId).innerText = data;
}

// retrieves data from input field
function getDataFromInputField(inputId) {
  return parseInt(document.getElementById(inputId).value);
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  // retrieves data for each player
  const costPerPlayer = getDataFromInputField('player-cost');

  // enables dollar symbol
  document.getElementById('player-ex').style.display = 'inline';

  // inserts the total cost for players
  insertIntoTextField('player-expense', costPerPlayer * count);
});

document
  .getElementById('calculate-total-btn')
  .addEventListener('click', function () {
    const costPerPlayer = parseInt(
      document.getElementById('player-expense').innerText
    );
    const managerCost = getDataFromInputField('manager-cost');
    const coachCost = getDataFromInputField('coach-cost');

    const totalCost = costPerPlayer + managerCost + coachCost;

    document.getElementById('total-ex').style.display = 'inline';

    insertIntoTextField('total-expense', totalCost);
  });