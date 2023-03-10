const inputBill=document.querySelector('#input-bill');
const numberPeople=document.querySelector('#number-people');
const tip=document.querySelector('#tips');
const ttal=document.querySelector('#Total')

//buttom

const porcentageFive= document.querySelector('#porcentage-5');
const porcentageTen= document.querySelector('#porcentage-10');
const porcentageFteen= document.querySelector('#porcentage-15');
const porcentageTwentyFive= document.querySelector('#porcentage-25');
const porcentageFifty= document.querySelector('#porcentage-50');
const btReset=document.querySelector('#reset');





function calculateTip(porcetange) {
  const bill = Number(inputBill.value);
  const people = Number(numberPeople.value);

  if (!bill || !people) {
    alert("Debes rellenar todos los campos");
    return;
  }

  // Si no estan vacios debemos hacer el calculo
  // (bill * 5/100) / people
  const result = (bill * (porcetange/100)) / people;
  // total = bill + (bill * 0.05)
  const rtotal = (bill + bill * (porcetange/100)) / people;

  tip.textContent = `S/ ${result.toFixed(2)}`;
  ttal.textContent = `S/ ${rtotal.toFixed(2)}`;
}

porcentageFive.onclick = function () {
  calculateTip(5);
};

porcentageTen.onclick = function () {
  calculateTip(10);
};

porcentageFteen.onclick = function () {
  calculateTip(15);
};

porcentageTwentyFive.onclick = function () {
  calculateTip(25);
};



btReset.onclick=() => {
inputBill.value="";
numberPeople.value="";
tip.textContent = `S/ 0.00`;
ttal.textContent = `S/ 0.00`;
inputBill.focus();



}