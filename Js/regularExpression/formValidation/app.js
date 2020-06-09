// WE are not Listening for 'Submit' Event b/c bulk of Errors may Pop out.
document.getElementById('name').addEventListener('blur', validataeName);
document.getElementById('zip').addEventListener('blur', validataeZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validataePhone);

function validataeName(){
    const name = document.getElementById('name');
    const re = /^[A-Za-z0-9]{2,10}$/;
// USA ZipCodes are 5 digtis With optional Dash(-) and 4 More digits. re = /^[0-9]{5} (-[0-9]{4})?/i
    
    if(re.test(name.value)){
        name.classList.remove('is-invalid');
    } else{
        name.classList.add('is-invalid');
    }
}

function validataeZip(){
    const zip = document.getElementById('zip');
    const re = /^0?[0-9]{5}$/;
    
    if(re.test(zip.value)){
        zip.classList.remove('is-invalid');
    } else{
        zip.classList.add('is-invalid');
    }   
}

function validateEmail(){
    const email = document.getElementById('email');
    

    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if(re.test(email.value)){
        email.classList.remove('is-invalid');
    } else{
        email.classList.add('is-invalid');
    }   
}
function validataePhone(){
    const phone = document.getElementById('phone');

    // const re = /^\(?\d{3}\)? ?.?-?\d{3} ?.?-?\d{4}$/;

    const re = /^\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;
    
    if(re.test(phone.value)){
        phone.classList.remove('is-invalid');
    } else{
        phone.classList.add('is-invalid');
    }  
}
