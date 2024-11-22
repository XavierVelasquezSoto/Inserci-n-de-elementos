/* Ejercicios Inserción Simple */

const buttonElement = document.getElementById("button");

const divHeaderElement = document.getElementById("div");
const labelElement = document.getElementById("label");
const rangeElement = document.getElementById("range");
const buttonHeaderElement = document.getElementById("button-header");

let number = 0;
let inputNumber = 0;

const addLink = () => {
  const pNewElement = document.createElement("li");
  pNewElement.textContent = "Item" + number++;
  document.body.append(pNewElement);
};

//

const generateLabel = (event) => {
  labelElement.textContent = event.target.value;
};

const generateHeader = () => {
  const headerNewElement = document.createElement("h" + rangeElement.value);
  headerNewElement.textContent = "soy un h" + rangeElement.value;
  document.body.append(headerNewElement);
};

buttonElement.addEventListener("click", addLink);
rangeElement.addEventListener("input", generateLabel);
buttonHeaderElement.addEventListener("click", generateHeader);

/*  Ejercicios Inserción Multiple */

const inputFragmentElement = document.getElementById("input-fragment");
const buttonFragmentElement = document.getElementById("button-fragment");
const listFragmentElement = document.getElementById("list-fragment");

const buttonDisabled = () => {
  if (inputFragmentElement.value > 0) {
    buttonFragmentElement.disabled = false;
  } else {
    buttonFragmentElement.disabled = true;
  }
};

const generateTable = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i <= 10; i++) {
    const liNewElement = document.createElement("li");
    liNewElement.textContent = `${inputFragmentElement.value} x ${i} = ${
      inputFragmentElement.value * i
    }`;
    fragment.append(liNewElement);
  }

  listFragmentElement.append(fragment);
};

buttonFragmentElement.addEventListener("click", generateTable);
inputFragmentElement.addEventListener("input", buttonDisabled);
