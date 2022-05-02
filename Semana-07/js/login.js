window.onload = function () {

    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const fields = {
        password: false,
        repeatPassword: false,
        email:false,
    }

    var form = document.getElementById('form-login');
    var inputs = document.querySelectorAll('#form-login input');
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
        document.getElementById(`${id}Label`).classList.remove('label-error');
        fields[id] = true;
    }
    function classListIncorrect(id) {
        document.getElementById(id).classList.add('input-error');
        document.getElementById(`${id}Alert`).classList.add('alert-active');
        document.getElementById(`${id}Label`).classList.add('label-error');
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
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?';
        var params = '';
        inputs.forEach((input) => {
            params+=`${input.name}=${input.value}&`;
        });
        var textCorrectData = '';
        var textErrorData = '';
        console.log(params)
        if (fields.email & fields.password) {
            fetch(`${url}${params}`)
            .then(response => response.json())
            .then(json  =>  {
                console.log(json)
                console.log(json.success)
                if(json.success){
                    openModal(textCorrectData, 'modal-success', 'Your data is correct');
                } 
                else {
                    openModal(json.msg, 'modal-error' , 'Something was wrong')
                }
                form.reset();
            })
            .catch(error => {
                openModal(error, 'modal-error' , 'The email or the password are not correct')
                form.reset();
            })
        } else {
            for (var i = 0; i < inputs.length; i++) {
                if (!fields[`${inputs[i].name}`])
                    textErrorData = textErrorData + '\n' + `<p>${inputs[i].name}\n` + ': ' + `${inputs[i].value}</p>`;
            }
            openModal(textErrorData, 'modal-error', 'Complete the form properly, The fields incorrects are: ');
            form.reset();
            inputs.forEach((input) => {
                input.classList.remove('input-error');
                input.parentElement.lastElementChild.classList.remove('alert-active');
                document.getElementById(`${input.name}Label`).classList.remove('label-error');
            });
        }
    })

    function openModal(textData, status, textTitleModal) {
        modal.style.display = "block";
        var modalTitle = document.getElementById('modal-title').innerHTML= textTitleModal;
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

}

