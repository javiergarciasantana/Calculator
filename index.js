function displayError() {
  var display_info = document.getElementById("display-content");
  display_info.textContent = "ERROR";
  return;
}

function Sum(x, y) {
  return parseInt(x) + parseInt(y);
}

function Substract(x, y) {
  return (x - y);
}

function Multiply(x,y) {
  return (x * y);
}

function Divide(x, y) {
  if (y === '0') {
    displayError();
    return;
  } else {
    return (x / y);
  }
}

function modifyContent(str) {
  var displayDiv = document.getElementById("display-content");
  displayDiv.innerHTML += str;
}

function eraseContent() {
  var displayDiv = document.getElementById("display-content");
  var op1 = document.getElementById("op1");
  displayDiv.innerHTML = "";
  op1.innerHTML = "";
}

function store(operator) {
  var displayContent = document.getElementById("display-content");
  var op1 = document.getElementById("op1");
  op1.textContent += displayContent.textContent;
  displayContent.innerHTML = "";
  op1.textContent += operator;
  console.log(op1.textContent);
}

function symbolOnLastCharacter(operation) {
  if (operation[operation.length - 1] == '+' || operation[operation.length - 1] == '-' || 
      operation[operation.length - 1] == '*' || operation[operation.length - 1] == '/') {
    return true;
  }
  return false;
}

function operate() {
  var operator_1 = document.getElementById("op1");
  var display_info = document.getElementById("display-content");
  operator_1.textContent += display_info.textContent;
  var operation = operator_1.textContent;
  console.log(operation);

  if (symbolOnLastCharacter(operation)) {  
    displayError();
    return;
  }

  var aux = "";
  var aux_2 = "";
  let it;

  for (let i = 0; i < operation.length; ++i) {
    if (operation[i] == '+' || operation[i] == '-' || operation[i] == '*' || operation[i] == '/') {
      it = i;
      break;
    } else {
      aux += operation[i]
    }
  }

  for (let i = it; i < operation.length; ++i) {
    if (operation[i] == '+' || operation[i] == '-' || operation[i] == '*' || operation[i] == '/') {
      for (let j = i + 1; j < operation.length; ++j) {
        if (operation[j] != '+' && operation[j] != '-' && operation[j] != '*' && operation[j] != '/') {
          aux_2 += operation[j];
        } else {
          break;
        }
      }
      switch (operation[i])  {
        case '+':
          aux = Sum(aux, aux_2);
          break;
        case '-':
          aux = Substract(aux, aux_2);
          break;
        case '*':
          aux = Multiply(aux, aux_2);
          break; 
        case '/':
          aux = Divide(aux, aux_2);
          break;
        default:
          break;
      }
    }
    aux_2 = "";
  }
  display_info.textContent = aux;
}




