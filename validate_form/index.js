console.log('Happy developing ✨')


function checkData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if(name === ''){
        alert('Please enter your name');
        name.focus();
        return false;
    }
    if(email === ''){
        alert('Please enter your email');
        email.focus();
        return false;
    }
}