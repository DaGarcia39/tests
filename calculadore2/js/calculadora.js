let numberNine;
let numberEight;
let numberSeven;
let numberSix;
let numberFive;
let numberFour;
let numberThree;
let numberTwo;
let numberOne;
let numberZero;

let multiplication;
let divition;
let rest;
let sum;

//igual
document.querySelector('#equal').addEventListener('click', () => {
    let boxOne = document.querySelector('#box1').value;
    // let boxTwo = document.querySelector('#box2').value;
    console.log(eval(boxOne));
    try {
        if (boxOne) {
            document.form.textviewresult.value = eval(boxOne);
            // alert(eval(inputCargadoInformation));
        } else {
            alert('error');
        }
    } catch(error) {
        alert('Caracter invalido, intenta nuevamente');
        clean();
    }
});

//Recolectar numeros
document.querySelector('#nine').addEventListener('click', () => {
    numberNine = document.querySelector('#nine').value;
    console.log(numberNine);
    document.form.textview.value = document.form.textview.value+ numberNine;
});
document.querySelector('#eight').addEventListener('click', () => {
    numberEight = document.querySelector('#eight').value;
    console.log(numberEight);
    document.form.textview.value = document.form.textview.value+ numberEight;
});
document.querySelector('#seven').addEventListener('click', () => {
    numberSeven = document.querySelector('#seven').value;
    console.log(numberSeven);
    document.form.textview.value = document.form.textview.value+ numberSeven;
});
document.querySelector('#six').addEventListener('click', () => {
    numberSix = document.querySelector('#six').value;
    console.log(numberSix);
    document.form.textview.value = document.form.textview.value+ numberSix;
});
document.querySelector('#five').addEventListener('click', () => {
    numberFive = document.querySelector('#five').value;
    console.log(numberFive);
    document.form.textview.value = document.form.textview.value+ numberFive;
});
document.querySelector('#four').addEventListener('click', () => {
    numberFour = document.querySelector('#four').value;
    console.log(numberFour);
    document.form.textview.value = document.form.textview.value+ numberFour;
});
document.querySelector('#three').addEventListener('click', () => {
    numberThree = document.querySelector('#three').value;
    console.log(numberThree);
    document.form.textview.value = document.form.textview.value+ numberThree;
});
document.querySelector('#two').addEventListener('click', () => {
    numberTwo = document.querySelector('#two').value;
    console.log(numberTwo);
    document.form.textview.value = document.form.textview.value+ numberTwo;
});
document.querySelector('#one').addEventListener('click', () => {
    numberOne = document.querySelector('#one').value;
    console.log(numberOne);
    document.form.textview.value = document.form.textview.value+ numberOne;
});
document.querySelector('#zero').addEventListener('click', () => {
    numberZero = document.querySelector('#zero').value;
    console.log(numberZero);
    document.form.textview.value = document.form.textview.value+ numberZero;
});


//operations
document.querySelector('#multiplication').addEventListener('click', () => {
    multiplication = document.querySelector('#multiplication').value;
    console.log(multiplication);
    document.form.textview.value = document.form.textview.value+ multiplication;
});
document.querySelector('#divition').addEventListener('click', () => {
    divition = document.querySelector('#divition').value;
    console.log(divition);
    document.form.textview.value = document.form.textview.value+ divition;
});
document.querySelector('#rest').addEventListener('click', () => {
    rest = document.querySelector('#rest').value;
    console.log(rest);
    document.form.textview.value = document.form.textview.value+ rest;
});
document.querySelector('#sum').addEventListener('click', () => {
    sum = document.querySelector('#sum').value;
    console.log(sum);
    document.form.textview.value = document.form.textview.value+ sum;
});

// function saveNumberOrOperation(value) {
//     let option = document.querySelector(`#${value}`).value;
//     console.log(option);
// }

function clean() {
    document.form.textview.value = "";
    document.form.textviewresult.value = "";
}