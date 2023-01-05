var startdate, enddate, city, country, destination, ftype;
var fullname, haddress, pid, phone, reason;

var ful = document.getElementById('ful');
var idp = document.getElementById('idp');
var start = document.getElementById('start');
var end = document.getElementById('end');
var cityx = document.getElementById('cityx');
var countryx = document.getElementById('countryx');
var daddress = document.getElementById('daddress');
var addressx = document.getElementById('addressx');
var phonex = document.getElementById('phonex');
var ftypex = document.getElementById('ftypex');
var msg = document.getElementById('msg');

$('#btn-next').click(()=>{
    startdate = $('#startdate').val();
    enddate = $('#enddate').val();
    city = $('#city').val();
    country = $('#country').val();
    destination = $('#destination').val();
    ftype = $('#ftype').val();
    
    $('#flight').hide(500, ()=>{
        $('#personal').show(500)
    })
});

$('#btn-prev').click(()=>{
    $('#personal').hide(500, ()=>{
        $('#flight').show(500)
    })
})

$('#btn-submit').click(()=>{
    fullname = $('#fullname').val();
    haddress = $('#haddress').val();
    pid = $('#pid').val();
    phone = $('#phone').val();
    reason = $('#reason').val();

    $('#personal').hide(500, ()=>{
        $('#contprev').show(500)
    })

    ful.innerHTML = fullname;
    idp.innerHTML = pid;
    start.innerHTML = startdate;
    end.innerHTML = enddate;
    cityx.innerHTML = city;
    countryx.innerHTML = country;
    daddress.innerHTML = destination;
    addressx.innerHTML = haddress;
    phonex.innerHTML = phone;
    ftypex.innerHTML = ftype;
    msg.innerHTML = reason;

});

$('.btn-times').click(()=>{
    $('#contprev').hide(500);
    $('#personal').show(500);
});

$('#submitx').click(()=>{
    $('.loadery'). show(500)

    const _data = {
        fullname: fullname,
        pid: pid,
        startdate: startdate,
        enddate: enddate,
        city: city,
        country: country,
        destination: destination,
        haddress: haddress,
        phone: phone,
        ftype: ftype,
        reason: reason
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
        $('.loadery'). show(500)
    }, 1000);

    $('#contprev').hide(500);
})
