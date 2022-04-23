window.onload = function() {

    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var emailCorrect = false;
    var passCorrect = false;
   // var passwordValidation = false;
    email.onblur = function(){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            emailCorrect = true;
        } else {
            var inputLogin = document.getElementsByClassName("input-login");
            inputLogin[0].style = "border-bottom: solid 2px red";
            messageError = 'Invalid email'
            var divError = document.getElementById("alertemail");
            var pError = document.createElement("p");
            pError.innerHTML = messageError;
            pError.style = "color: red; font-size: 12px"
            divError.appendChild(pError);
            emailValidation = false;
        };
    };

    email.onfocus = function(){
        email.style = "border-color:none";
        var divError = document.getElementById("alertemail");
        divError.removeChild(divError.firstElementChild);
        var inputLogin = document.getElementsByClassName("input-login");
        inputLogin[0].style =  "border-bottom: solid #49A37B 0.5px";
    }

    pass.onblur = function(){
        var nums = /[0-9]/;
        var letters= /[a-zA-Z]/;
        var resultNums = nums.test(pass.value);
        var resultLetters = letters.test(pass.value);
        if(resultNums == true && resultLetters == true){
            passCorrect = true;
        } else {
            var inputLogin = document.getElementsByClassName("input-login");
            inputLogin[1].style = "border-bottom: solid 2px red";
            messageError = 'Invalid password'
            var divError = document.getElementById("alertpass");
            var pError = document.createElement("p");
            pError.innerHTML = messageError;
            pError.style = "color: red; font-size: 12px"
            divError.appendChild(pError);
            passCorrect = false;
        }
    }

    pass.onfocus = function(){
        pass.style = "border-color:none";
        var divError = document.getElementById("alertpass");
        divError.removeChild(divError.firstElementChild);
        var inputLogin = document.getElementsByClassName("input-login");
        inputLogin[1].style = "border-bottom: solid #49A37B 0.5px";
    }

    var form = document.getElementById('form');
    form.addEventListener('submit', function(e){
        if(emailCorrect==true && passCorrect==true){
            functionModal(email,pass);
        } else {
            alert("Put correct email and password")
        }
    })

    function functionModal(email,pass){
        alert("User Email: " + email.value + "Password: " + pass.value)
    }
}

 
