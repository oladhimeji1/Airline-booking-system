
var from, to, departure, traveltype, travellers, arrival, time;

$(document).ready(()=>{
    $('.loadery').fadeIn(500);
    $('.loadery').delay(1000);
    $('.loadery').fadeOut(500, ()=>loaddetails());
    // loaddetails();
})
function loaddetails(){
    // alert()
    from = sessionStorage.getItem('from')
    to = sessionStorage.getItem('to')
    departure = sessionStorage.getItem('departure')
    arrival = sessionStorage.getItem('arrival')
    traveltype = sessionStorage.getItem('traveltype')
    travellers = sessionStorage.getItem('travellers')
    // window.location.reload()

    $('.day').html(departure)
    $('.type').html(traveltype)
    $('.count').html(travellers)
    $('.place').html(from + '-' + to)
}
$('#evening').click(()=>{
    time = '9:00 pm';
    $('.details').show(300)
})
$('#afternoon').click(()=>{
    time = '2:00 pm';
    $('.details').show(300)
})
$('#morning').click(()=>{
    time = '9:00 am';
    $('.details').show(300)
})
$('.btnn').click(()=>{
    var username = $('#username').val()
    if(!username){
        alert('Please fill in your username')
    }else{
        const _data = {
            from : from, to : to, 
            departure : departure, 
            traveltype : traveltype, 
            travellers : travellers, 
            arrival : arrival, 
            time : time,
            username : username
        }
        fetch('http://localhost:3000/add-user', {
            method: 'POST',
            body: JSON.stringify(_data),
            headers: {'Content-type': 'application/json; charset=utf-8'}
        })
        // .then(response => response.json())
        .then(response => response.text())
        .then(text => {
            alert(text)
            // console.log(text)
            $('.details').hide(300)
        })
        .catch(err => console.log(err));
    }
})