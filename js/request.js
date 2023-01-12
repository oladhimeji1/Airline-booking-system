// var item = document.getElementById('pid')
// var destination = document.getElementById('destination')
// var country = document.getElementById('country')
// var fschedule = document.getElementById('fschedule')
// var rschedule = document.getElementById('rschedule')
// var ftime = document.getElementById('ftime')
// var snum = document.getElementById('snum')
// var fdate = document.getElementById('fdate')
// var rdate = document.getElementById('rdate')
// var phone = document.getElementById('phone')

// $('.btn-times').click(()=>{
//     $('#contprev').hide(500)
// })
// $('.item').click(()=>{
//     item.innerHTML;
    
//     $('#contprev').show(500)
// })

const api_url = 'http://localhost:3000/requests';

async function getapi(url){

    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
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

var num;
function show(data){
    let tab = `<tr><th>S/N</th><th>Username</th>
    <th>From</th><th>To</th>
    <th>Seat Number</th><th>Flight Time</th>
    <th>Status</th></tr>`;

    for(let ol of data){
       document.getElementById('tab').innerHTML = 
        tab += `<tr onclick="num = ${ol.Sno};
        document.getElementById('details').style.display = 'block';" class="item"><td>${ol.Sno}</td>
        <td>${ol.Username}</td><td>${ol.xFrom}</td>
        <td>${ol.xTo}</td><td>${ol.Flight_no}</td>
        <td>${ol.FlightTime}</td><td>${ol.Status}</td></tr>`
    }
}

document.getElementById('btnn').addEventListener('click', ()=>{
    const _data = {
        Sno: num,
    }

    fetch('http://localhost:3000/approve', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    // .then(response => response.json())
    .then(response => response.text())
    .then(text => {
        alert(text)
        document.getElementById('details').style.display = 'none';
    })
    .catch(err => console.log(err));
})
document.getElementById('btnx').addEventListener('click', ()=>{
    const _data = {
        Sno: num,
    }

    fetch('http://localhost:3000/decline', {
        method: 'POST',
        body: JSON.stringify(_data),
        headers: {'Content-type': 'application/json; charset=utf-8'}
    })
    // .then(response => response.json())
    .then(response => response.text())
    .then(text => {
        alert(text)
        document.getElementById('details').style.display = 'none';
    })
    .catch(err => console.log(err));
})

