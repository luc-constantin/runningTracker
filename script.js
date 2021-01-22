const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector("#entries");
document.querySelector("#target").innerText = goal;

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
  const listItem = document.createElement('li');
  const listValue = document.createTextNode(newEntry.toFixed(1));
  listItem.appendChild(listValue);

  entriesWrapper.appendChild(listItem);
}

function minimizer(total, currentValue) {
    return total + currentValue
}

function calculateTotal() { 
   const totalValue = entries.reduce(minimizer).toFixed(1);
   document.getElementById('total').innerText = totalValue
   document.getElementById('progressTotal').innerText = totalValue
}

function calculateAverage() {
    const average = (entries.reduce(minimizer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function weeklyTop() {
    const top = Math.max(...entries);
    document.getElementById('top').innerText = top;
}

function calculateGoal() {
    const totalValue = entries.reduce(minimizer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector("#progressCircle")
    if(completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#51fdfd ${completedPercent}%, #2d3740 
        ${completedPercent}% 100%)`;
}

function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value)
    if (!entry) return;
    document.querySelector("form").reset()
    entries.push(entry);
    addNewEntry(entry);
    calculateTotal();
    calculateAverage();
    weeklyTop();
    calculateGoal();
}
const form = document
.querySelector("form")
.addEventListener("submit", handleSubmit);