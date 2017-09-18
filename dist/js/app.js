window.addEventListener('load', function(){

    var projectLink = document.getElementById('projects'),
        navigation = document.getElementById('navigation');

    projectLink.addEventListener('click', function(e){
        e.preventDefault();
        navigation.classList.toggle('proj-open');
    })


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
