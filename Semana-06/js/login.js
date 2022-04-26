window.onload = function() {

    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const fields = {
        password: false,
        repeatPassword: false,
    }

    var form = document.getElementById('form-login');
    var inputs = document.querySelectorAll('#form-login input');

    inputs.forEach((input) => {
        input.addEventListener('blur', validForm);
        input.addEventListener('focus', function () {
            input.classList.remove('input-error');
            input.parentElement.lastElementChild.classList.remove('alert-active');
        });
    });

    function validForm(e) {
        switch (e.target.name) {
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
        if (fields.email & fields.password) {
            var textCorrectData = 'Your data is correct ' + '\n';
            for (var i = 0; i < inputs.length; i++) {
                textCorrectData = textCorrectData + '\n' + `${inputs[i].name}` + ': ' + `${inputs[i].value}`;
            }
            var messageBox = document.createElement('div');
            messageBox.classList.add('confirm-data-active');
            messageBox.innerHTML = textCorrectData;
            var position = document.getElementById('login-box');
            position.appendChild(messageBox);

            var clickboxexito = document.getElementById('login-box').lastElementChild;
            clickboxexito.addEventListener('click' , function(){
                document.getElementById('login-box').lastElementChild.remove();
            })

            form.reset();
            inputs.forEach((input) => {
                input.classList.remove('input-error');
                input.parentElement.lastElementChild.classList.remove('alert-active');
            });

        } else {
            console.log(document.getElementById('not-confirm').classList)
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

            var clickBoxError = document.getElementById('login-box').lastElementChild;
            clickBoxError.addEventListener('click' , function(){
                document.getElementById('login-box').lastElementChild.remove();
                form.reset();
            })

            inputs.forEach((input) => {
                input.classList.remove('input-error');
                input.parentElement.lastElementChild.classList.remove('alert-active');
            });
        }
    })

}

 
