function insertNumber(number) {
    document.form.textview.value = document.form.textview.value+ number;
}

function operations() {
    let inputCargadoInformation = document.form.textview.value;
    try {
        if (inputCargadoInformation) {
            document.form.textviewresult.value = eval(inputCargadoInformation);
            // alert(eval(inputCargadoInformation));
        }
    } catch(err) {
        alert('Caracter invalido, intenta nuevamente');
        clean();
    }
}

function clean() {
    document.form.textview.value = "";
    document.form.textviewresult.value = "";
}