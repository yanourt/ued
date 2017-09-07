window.addEventListener('load', function(){



    var navbtn = document.getElementById('navbtn'),
        navigation = document.getElementById('navigation');




    navbtn.addEventListener('click', function(e){
        console.log('open');
        e.stopPropagation();
        navigation.classList.toggle('nav-open');
        navbtn.classList.toggle('open');
    })
})