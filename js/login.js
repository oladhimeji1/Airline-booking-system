var username, password, firstname, lastname, email, psw, rpsw, phone;
var msgx = document.getElementById('msgx');

$('#btny').click(()=>{
    username = $('#username').val();
    password = $('#password').val();

    const _data = {
        username: username,
        password: password
    }

    fetch('url', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    .then(datax => console.log(datax))
    .catch(err => console.log(err));

    setTimeout(()=>{
        $('.loadery').show(500)
        $('.content').hide(500)
    }, 1000);
});

$('#btnx').click(()=>{
    firstname = $('#firstname').val();
    lastname = $('#lastname').val();
    phone = $('#phone').val();
    email = $('#email').val();
    psw = $('#password').val();
    rpsw = $('#passwordx').val();

    if(psw !== rpsw){
        $('.msgbox').slideDown(500);
        msgx.innerHTML = 'Please make sure the passwords match';
        $('.msgbox').delay(3000);
        $('.msgbox').slideUp(500);
    } else{
        alert(1)
        const _data = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        psw: psw,
        rpsw: rpsw
        }

        fetch('url', {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {'Content-type': 'application/json; charset=utf-8'}
        })
        .then(response => response.json())
        .then(datax => 
            console.log(datax)
        )
        .catch(err => console.log(err));

        // setTimeout(()=>{
        //     $('.loadery').show(500)
        //     $('.content').hide(500)
        // }, 1000);
    }
    
});

$('#passwordx').keyup(()=>{
    psw = $('#password').val();
    rpsw = $('#passwordx').val();

    if(psw !== rpsw){
        $('.msgbox').slideDown(500);
    } else{
        $('.msgbox').slideUp(500);
    }
})