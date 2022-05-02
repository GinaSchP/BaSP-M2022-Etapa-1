window.onload = function () {

    var form = document.getElementById('form-signup');
    var inputs = document.querySelectorAll('#form-signup input');
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var dateFormat = '';

    inputs.forEach((input) => {
        input.value = !!localStorage.getItem(`${input.name}`) ? localStorage.getItem(`${input.name}`) : null;
    });

    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const fields = {
        name: false,
        lastName: false,
        dni: false,
        dob: false,
        phone: false,
        address: false,
        city: false,
        zip: false,
        email: false,
        password: false,
        repeatPassword: false,
    }

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    inputs.forEach((input) => {
        input.addEventListener('blur', validForm);
        input.addEventListener('focus', function () {
            input.classList.remove('input-error');
            input.parentElement.lastElementChild.classList.remove('alert-active');
            document.getElementById(`${input.name}Label`).classList.remove('label-error');
        });
    });


    function validFormWithoutBlur() {
        fields.name = inputs[0].value.length > 3 && onlyLetters(inputs[0].value);
        fields.lastName = inputs[1].value.length > 3 && onlyLetters(inputs[1].value);
        fields.dni = inputs[2].value.length >= 7 && onlyNumbers(inputs[2].value);
        var today = new Date();
        var inputDate = new Date(inputs[3].value);
        var dateArray = inputs[3].value.split('-');
        dateFormat = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
        fields.dob = inputDate < today;
        fields.phone = inputs[4].value.length == 10 && onlyNumbers(inputs[4].value);
        fields.address = inputs[5].value.length >= 5 && lettersAndNumbersAndSpace(inputs[5].value)
        fields.city = inputs[6].value.length > 3 && lettersAndNumbers(inputs[6].value)
        fields.zip = inputs[7].value.length >= 4 && inputs[7].value.length <= 5 && onlyNumbers(inputs[7].value)
        fields.email = expressions.email.test(inputs[8].value)
        fields.password = inputs[9].value.length >= 8 && lettersAndNumbers(inputs[9].value)
        fields.repeatPassword = inputs[10].value == document.getElementById('password').value;

        for (var i = 0; i < inputs.length; i++) {
            if (fields[`${inputs[i].name}`]) {
                classListCorrect(`${inputs[i].name}`)
            } else {
                classListIncorrect(`${inputs[i].name}`)
            }
        }
    }


    function validForm(e) {
        switch (e.target.name) {
            case "name":
                if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
                    classListCorrect('name');
                } else {
                    classListIncorrect('name');
                }
                break;
            case "lastName":
                if (e.target.value.length > 3 && onlyLetters(e.target.value)) {
                    classListCorrect('lastName');
                } else {
                    classListIncorrect('lastName');
                }
                break;
            case "dni":
                if (e.target.value.length >= 7 && onlyNumbers(e.target.value)) {
                    classListCorrect('dni');
                } else {
                    classListIncorrect('dni');
                }
                break;
            case "dob":
                var today = new Date();
                var inputDate = new Date(e.target.value);
                if (inputDate < today) {
                    classListCorrect('dob');
                } else {
                    classListIncorrect('dob');
                }
                var dateArray = e.target.value.split('-');
                dateFormat = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
                break;
            case "phone":
                if (e.target.value.length == 10 && onlyNumbers(e.target.value)) {
                    classListCorrect('phone');
                } else {
                    classListIncorrect('phone');
                }
                break;
            case "address":
                if (e.target.value.length >= 5 && lettersAndNumbersAndSpace(e.target.value)) {
                    classListCorrect('address');
                } else {
                    classListIncorrect('address');
                }
                break;
            case "city":
                if (e.target.value.length > 3 && lettersAndNumbers(e.target.value)) {
                    classListCorrect('city');
                } else {
                    classListIncorrect('city');
                }
                break;
            case "zip":
                if (e.target.value.length >= 4 && e.target.value.length <= 5 && onlyNumbers(e.target.value)) {
                    classListCorrect('zip');
                } else {
                    classListIncorrect('zip');
                }
                break;
            case "email":
                if (expressions.email.test(e.target.value)) {
                    classListCorrect('email');
                } else {
                    classListIncorrect('email');
                }
                break;
            case "password":
                if (e.target.value.length >= 8 && lettersAndNumbers(e.target.value)) {
                    classListCorrect('password');
                } else {
                    classListIncorrect('password');
                }
                break;
            case "repeatPassword":
                if (e.target.value == document.getElementById('password').value) {
                    classListCorrect('repeatPassword')
                } else {
                    classListIncorrect('repeatPassword')
                }
                break;
        }
    }

    function classListCorrect(id) {
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(`${id}Alert`).classList.remove('alert-active');
        document.getElementById(`${id}Label`).classList.remove('label-error');
        fields[id] = true;
    }
    function classListIncorrect(id) {
        document.getElementById(id).classList.add('input-error');
        document.getElementById(`${id}Alert`).classList.add('alert-active');
        document.getElementById(`${id}Label`).classList.add('label-error');
        fields[id] = false;
    }


    function onlyLetters(string) {
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ')) {
                return false;
            }
        }
        return true;
    }
    function onlyNumbers(numbers) {
        for (var i = 0; i < numbers.length; i++) {
            var n = numbers.charAt(i);
            if (isNaN(n)) {
                return false;
            }
        }
        return true;
    }
    function lettersAndNumbers(string) {
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ') && isNaN(c)) {
                return false;
            }
            return true;
        }
    }
    function lettersAndNumbersAndSpace(string) {
        var havespace = false;
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!lettersAndNumbers(string) && isNaN(c)) {
                return false;
            } else {
                if (c == ' ') {
                    havespace = true;
                }
            }
        }
        return havespace;
    }

    function fieldsValidate() {
        return fields.name && fields.lastName && fields.dni && fields.dob && fields.phone && fields.address && fields.city && fields.zip && fields.email && fields.password && fields.repeatPassword
    }


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
        var params = '';
        inputs.forEach((input) => {
            params += `${input.name}=${input.value}&`;
            validFormWithoutBlur();
        });
        paramsWithDateMod = params.replace(`dob=${inputs[3].value}`, `dob=${dateFormat}`);
        var textCorrectData = '';
        var textErrorData = '';

        if (fieldsValidate()) {
            fetch(`${url}${paramsWithDateMod}`)
                .then(response => response.json())
                .then(json => {
                    for (var d in json.data) {
                        textCorrectData += `<p>${d}: ${json.data[d]}<p/>`
                    }
                    openModal(textCorrectData, 'modal-success', `Your data is correct! ${json.msg}`);
                    save();
                    form.reset();
                })
                .catch(error => {
                    console.log(error)
                    openModal(error.msg, 'modal-error', 'an error occurred')
                })
        } else {
            for (var i = 0; i < inputs.length; i++) {
                if (!fields[`${inputs[i].name}`])
                    textErrorData = textErrorData + '\n' + `${inputs[i].name}\n` + ': ' + `${inputs[i].value}`;
            }
            openModal(textErrorData, 'modal-error', 'Your data is incorrect, complete the form properly, the errors are: ');
        }
    })

    function openModal(textData, status, titleTextModal) {
        modal.style.display = "block";
        var titleModal = document.getElementById('title-modal').innerHTML = titleTextModal;
        var modalText = document.getElementById('text-modal').innerHTML = textData;
        document.getElementById('modal-content').classList.add(`${status}`);
        span.onclick = function () {
            modal.style.display = "none";
            document.getElementById('modal-content').classList.remove(`${status}`);
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
            document.getElementById('modal-content').classList.remove(`${status}`);
        }
    }

    var btnReset = document.getElementById('btn-reset');
    btnReset.addEventListener('click', function () {
        form.reset();
        inputs.forEach((input) => {
            input.classList.remove('input-error');
            input.parentElement.lastElementChild.classList.remove('alert-active');
            document.getElementById(`${input.name}Label`).classList.remove('label-error');

        });
    })

    function save() {
        inputs.forEach((input) => {
            localStorage.setItem(`${input.name}`, `${input.value}`);
        })
    }



}
