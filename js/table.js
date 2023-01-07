
var username;
var ola

$(document).ready(()=>{
    username = sessionStorage.getItem('username');
    // loadRecord()   
})

const api_url = 'http://localhost:3000/loadrec';

async function getapi(url){
    username = sessionStorage.getItem('username');

    const _data = { username: username }
    console.log(_data)
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    });
    var data = await response.json();
    console.log(data);
    if(response){
        $('#tab').fadeOut();
        $('.loadery').fadeIn(100)
        $('.loadery').delay(2000)
        $('.loadery').fadeOut(200)
        $('#tab').fadeIn(300);
    }
    show(data);
}
getapi(api_url);

function show(data){
    let tab = `<tr><th>Passport ID</th>
    <th>Destination</th><th>Country</th>
    <th>Flight Schedule</th><th>Return Schedule</th>
    <th>Flight Time</th><th>Seat Number</th><th>Flight Date</th>
    <th>Return Date</th><th>Phone</th></tr>`;

    for(let ol of data){
        document.getElementById('tab').innerHTML = tab += `<tr><td>${ol.PassportId}</td><td>${ol.Destination}</td><td>${ol.Country}</td><td>${ol.Depdate}</td><td>${ol.Retdate}</td><td>${ol.Username}</td><td>${ol.Fullname}</td><td>${ol.FlightType}</td><td>${ol.Phone}</td><td>${ol.Phone}</td></tr>`
    }
}