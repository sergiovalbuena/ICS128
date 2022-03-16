//create validation function
function validateForm() {

//VALUE vars
    let name = document.forms['lab05form']['name'].value;
    let age = document.forms['lab05form']['age'].value;
    let email = document.forms['lab05form']['email'].value;
    let phone = document.forms['lab05form']['phone'].value;
    let postalCode = document.forms['lab05form']['postalCode'].value;

//NAME
    if(!name){
        alert("👋🏼 Please, write your name");
        //method to take you to missing input
        document.getElementById('name').focus();
        return false;
    }

//AGE
    if(!age){
        alert("not age? are you alive? ");
        return false;
    }
        else if(age > 120){
        alert("If you are a human, check you age, may something wrong 👽");
        return false;
        }
    
//EMAIL 
    //email regex
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    //condition to validate 
    if(!emailRegex.exec(email)){
        alert("is your email, right?")
        return false;
    }

 //PHONE   
    //phone regex
    let phoneRegex1 = /^([0-9]{3})+(-)+([0-9]{3})+(-)+([0-9]{4})$/;
    let phoneRegex2 = /^([0-9]{10})$/; 
    let phoneRegex3 = /^([0-9]{3})+( )+([0-9]{3})+( )+([0-9]{4})$/; 
    //condition to validate 
    if(!phoneRegex1.exec(phone)){
        if(!phoneRegex2.exec(phone)){
            if(!phoneRegex3.exec(phone)){
                alert("no valid phone");
                return false;
            }
        }
    }
    
//POSTAL CODE
    //postal code regex
    // let postalCodeRegex1 = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
    // let postalCodeRegex2 = /^[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d$/;
    //postal code regex (seems better and got both options);
    let postalCodeRegex = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i 
    //condition to validate
    if(!postalCodeRegex.exec(postalCode)){
        alert("invalid postal code")
        return false;
    }


}