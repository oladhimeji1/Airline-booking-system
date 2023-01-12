
var traveltype, economic, premium, business, first;

$('#economic').click(()=>{
    economic = 'Economic'
})
$('#premium').click(()=>{
    premium = 'Premium economic'
})
$('#business').click(()=>{
    business = 'Business class'
})
$('#first').click(()=>{
    first = 'First class'
})
$('#roundtrip').click(()=>{
    traveltype = 'Roundtrip';
    $('#roundtrip').css({"color": "white"})
    $('#roundtrip').addClass("xxx")
    $('multicity').removeClass('xxx')
    $('#oneway').removeClass('xxx')
    $('#multicity').css({"color": "#017DBA"})
    $('#oneway').css({"color": "#017DBA"})
})
$('#oneway').click(()=>{
    traveltype = 'Oneway';
    $('#oneway').addClass('xxx')
    $('#oneway').css({"color": "white"})
    $('#roundtrip').css({"color": "#017DBA"})
    $('#roundtrip').removeClass("xxx")
    $('#multicity').removeClass('xxx')
    $('#multicity').css({"color": "#017DBA"})
})
$('#multicity').click(()=>{
    traveltype = 'Multicity';
    $('#multicity').addClass('xxx')
    $('#multicity').css({"color": "white"})
    $('#oneway').css({"color": "#017DBA"})
    $('#oneway').removeClass('xxx')
    $('#roundtrip').css({"color": "#017DBA"})
    $('#roundtrip').removeClass("xxx")
})
$('#passenger').click(()=>{
    $('.hidden').toggle(300)
})
$('.search').click(()=>{
    
    var from = $('#from').val()
    var to = $('#to').val()
    var departure = $('#departure').val()
    var arrival = $('#arrival').val()
    var adult = parseInt($('#adult').val())
    var children = parseInt($('#children').val())

    var classtype;
    console.log(first, business, premium, economic)
    if(!economic && !premium && !business){
        classtype = first;
    }else if(!economic && !premium && !first){
        classtype = business;
    }else if(!economic && !business && !first){
        classtype = premium;
    }else if(!premium && !business && !first){
        classtype = economic;
    }

    $('#travellers').html(children + adult + ' Travellers, ' + classtype)
    sessionStorage.setItem('travellers', children + adult + ' Travellers, ' + classtype)
    sessionStorage.setItem('from',from)
    sessionStorage.setItem('to',to)
    sessionStorage.setItem('departure',departure)
    sessionStorage.setItem('arrival',arrival)
    sessionStorage.setItem('adult',adult)
    sessionStorage.setItem('children',children)
    sessionStorage.setItem('traveltype',traveltype)

    $('.framecon').slideDown(500, ()=>{
        document.getElementById('frame').src = './pages/search.html';
    })
    
    // window.location.reload(true)
    // $('.framecon').slideDown(500)
})
$('.header-right').click(()=>{
    if(confirm('Want to log in to dashboard?')){
        window.location.assign('./pages/login.html')
    }
})