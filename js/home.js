var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username
    // loadRecord();
})

$('#reg').click(()=>{
    document.getElementById('viewrec').style.backgroundColor = '#017DBA';
    document.getElementById('viewrec').style.color = 'white';
    if(confirm('Do you want to book a flight?')){
        window.location.assign('../index.html')
    }
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = '../pages/table.html'
    document.getElementById('viewrec').style.backgroundColor = 'white';
    document.getElementById('viewrec').style.color = '#017DBA';
    document.getElementById('reg').style.backgroundColor = '#017DBA';
    document.getElementById('reg').style.color = 'white';
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.html')
    }
});
