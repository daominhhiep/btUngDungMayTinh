let A;
let B;
let soA;
let soB

function getValue() {
    A = document.getElementById("numberA").value;
    B = document.getElementById("numberB").value;
    soA = parseInt(A);
    soB = parseInt(B);
}
function addPlus() {
    getValue()
    let plus = soA + soB;
    document.getElementById("display").innerHTML = plus;
}
function addMinus() {
    getValue()
    let minus = soA - soB;
    document.getElementById("display").innerHTML = minus;
}
function addTimes() {
    getValue()
    let times = soA * soB;
    document.getElementById("display").innerHTML = times;
}
function addDiv() {
    getValue()
    let div = soA / soB;
    document.getElementById("display").innerHTML = div;
}
