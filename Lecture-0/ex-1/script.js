var validator=(function (){
    var textPattern =  /^[a-zA-Z]+$/g
    var numberPattern = /^[0-9]+$/g

    var isValidFirstName = false;
    var isValidLastName = false;
    var isValidAge = false;
    var isValidMood = false;
    var isValidPhoneNumber = false;

    var isFirstNameValid = function(elem){
        isValidFirstName = isNameValid(elem);
    }
    var isLastNameValid = function(elem){
        isValidLastName = isNameValid(elem);
    }

    var isNameValid = function(elem) {
        var re = new RegExp(textPattern);
        var isText = re.test(elem.value);
        if (isText) {
            elem.title="";
            elem.style.borderColor = "#000";
            return true;
        } else {    
            elem.title="Only letters are allowed for name fields";
            elem.style.borderColor = "red";
            return false;
        }
    }

    var isDateValid = function(elem) {
        isValidAge = false;
        var date = elem.valueAsDate;
        var now = new Date();

        var difference =new Date(now - date);
        var age = Math.abs(difference.getUTCFullYear() - 1970)


        if (age < 18) {
            elem.title="You are too young!";
            elem.style.borderColor = "red";
        } else if (age > 100) {
            elem.title="You are too old!";
            elem.style.borderColor = "red";
        } else {
            elem.title="";
            elem.style.borderColor = "#000";
            isValidAge = true;
        }
    }

    var isNumberValid = function(elem) {
        var re = new RegExp(numberPattern);
        var isText = re.test(elem.value);
        if (isText) {
            elem.title="";
            elem.style.borderColor = "#000";
            isValidPhoneNumber = true;;
        } else {    
            elem.title="Only numbers are allowed for number field";
            elem.style.borderColor = "red";
            isValidPhoneNumber = false;
        }
    }

    var isMoodAllowed = function(elem){
        if(elem.value < 50){
            elem.title="Only happy people are allowed";
            elem.style.borderColor = "red";
            isValidMood = false;
        } else {
           elem.title="";
            elem.style.borderColor = "";
            isValidMood = true;
        }
    }

    var validateForm  = function(elem){
        if( isValidAge && isValidFirstName && isValidLastName && isValidMood && isValidPhoneNumber){
            alert("Form filled successfully, submitting...");
            return true;
        } else { 
            alert("Form not filled correctly.  Verify that all fields are successfully populated");
        }
    }

    return {
        isFirstNameValid:isFirstNameValid,
        isLastNameValid:isLastNameValid,
        isDateValid:isDateValid,
        isNumberValid:isNumberValid,
        isMoodAllowed:isMoodAllowed,
        validateForm:validateForm,
    };
})();