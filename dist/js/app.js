window.addEventListener('load', function(){

    var projectLink = document.getElementById('projects'),
        navigation = document.getElementById('navicon'),
        backBtn = document.getElementById('backbtn'),
        menuBtn = document.getElementById('menubtn');

    projectLink.addEventListener('click', function(e){
        e.preventDefault();
        navigation.classList.toggle('proj-open');
    });

    menuBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        navigation.classList.toggle('nav-open');
    });

    backBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        navigation.classList.toggle('proj-open');
    });


    // var logo = document.getElementById('logo'),
    //     background = document.getElementById('background');
    //
    // logo.addEventListener('click', function(){
    //     background.classList.toggle('big');
    //     // logo.classList.toggle('white');
    // });









    // var navbtn = document.getElementById('navbtn'),
    //     navigation = document.getElementById('navigation');
    //
    //
    //
    //
    // navbtn.addEventListener('click', function(e){
    //     console.log('open');
    //     e.stopPropagation();
    //     navigation.classList.toggle('nav-open');
    //     navbtn.classList.toggle('open');
    // })
})
