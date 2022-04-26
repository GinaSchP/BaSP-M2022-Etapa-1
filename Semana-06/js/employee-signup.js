window.onload = function () {
    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const fields = {
        name: false,
        lastName: false,
        dni: false,
        phone: false,
        address: false,
        city: false,
        postalCode: false,
        email: false,
        password: false,
        repeatPassword: false,
    }


    var form = document.getElementById('form-signup');
    var inputs = document.querySelectorAll('#form-signup input');

    inputs.forEach((input) => {
        input.addEventListener('blur', validForm);
        input.addEventListener('focus', function () {
            input.classList.remove('input-error');
            input.parentElement.lastElementChild.classList.remove('alert-active');
        });
    });

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
            case "postalCode":
                if (e.target.value.length >= 4 && e.target.value.length <= 5 && onlyNumbers(e.target.value)) {
                    classListCorrect('postalCode');
                } else {
                    classListIncorrect('postalCode');
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
                console.log(e.target.value);
                if (e.target.value == document.getElementById('password').value) {
                    document.getElementById('repeatPassword').classList.remove('input-error');
                    document.getElementById('repeatPasswordAlert').classList.remove('alert-active');
                    fields["repeatPassword"] = true;
                } else {
                    document.getElementById('repeatPassword').classList.add('input-error');
                    document.getElementById('repeatPasswordAlert').classList.add('alert-active');
                    fields["repeatPassword"] = false;
                }
                break;
        }
    }

    function classListCorrect(id) {
        document.getElementById(id).classList.remove('input-error');
        document.getElementById(`${id}Alert`).classList.remove('alert-active');
        fields[id] = true;
    }
    function classListIncorrect(id) {
        document.getElementById(id).classList.add('input-error');
        document.getElementById(`${id}Alert`).classList.add('alert-active');
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
    function lettersAndNumbersAndSpace(string) {
        var havespace = false;
        for (var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c == ' ') && isNaN(c)) {
                return false;
            } else {
                if (c == ' ') {
                    havespace = true;
                }
            }
        }
        return havespace;
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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (fields.name && fields.lastName && fields.dni && fields.phone && fields.address && fields.city && fields.postalCode && fields.email & fields.password & fields.repeatPassword) {
            var textCorrectData = 'Your data is correct ' + '\n';
            for (var i = 0; i < inputs.length; i++) {
                textCorrectData = textCorrectData + '\n' + `${inputs[i].name}` + ': ' + `${inputs[i].value}`;
            }
            var messageBox = document.createElement('div');
            messageBox.classList.add('confirm-data-active');
            messageBox.innerHTML = textCorrectData;
            var position = document.getElementById('signup-box');
            position.appendChild(messageBox);

            var btnReset = document.getElementById('btn-reset');
            btnReset.addEventListener('click', function () {
                document.getElementById('signup-box').lastElementChild.remove();
            })

            form.reset();
            inputs.forEach((input) => {
                input.classList.remove('input-error');
                input.parentElement.lastElementChild.classList.remove('alert-active');
            });

        } else {
            document.getElementById('not-confirm').classList.add('not-confirm-active');

            var textErrorData = 'The errors are: \n';
            for (var i = 0; i < inputs.length; i++) {
                if (!fields[`${inputs[i].name}`])
                    textErrorData = textErrorData + '\n' + `${inputs[i].name}\n`;
            }
            var messageBoxError = document.createElement('div');
            messageBoxError.classList.add('not-confirm-active');
            messageBoxError.innerHTML = textErrorData;
            var position = document.getElementById('not-confirm');
            position.appendChild(messageBoxError);


            var btnReset = document.getElementById('btn-reset');
            btnReset.addEventListener('click', function () {
                document.getElementById('not-confirm').classList.remove('not-confirm-active');
                form.reset();
                inputs.forEach((input) => {
                    input.classList.remove('input-error');
                    input.parentElement.lastElementChild.classList.remove('alert-active');

                });
            })
        }
    })



}