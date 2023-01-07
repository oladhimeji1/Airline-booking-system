var username;

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username
    // loadRecord();
})

$('#reg').click(()=>{
    document.getElementById('frame').src = '../pages/flight.html';
});
$('#viewrec').click(()=>{
    document.getElementById('frame').src = '../pages/table.html'
    // loadRecord();
})
$('#logout').click(()=>{
    if(confirm('Are you sure you want to logout?')){
        window.location.assign('../index.html')
    }
});
