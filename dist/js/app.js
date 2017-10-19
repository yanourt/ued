window.addEventListener('load', function(){

    var projectLink = document.getElementById('projects'),
        navigation = document.getElementById('navicon'),
        navList = navigation.getElementsByTagName('li'),

        navBorders = document.getElementById('navborders'),

        backBtn = document.getElementById('backbtn'),
        menuBtn = document.getElementById('menubtn');

    projectLink.addEventListener('click', function(e){
        e.preventDefault();
        navigation.classList.toggle('proj-open');
    });

    menuBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if (navigation.classList.contains('nav-open')) {
            navigation.classList.add('nav-close');
        }else if (navigation.classList.contains('nav-close')) {
            navigation.classList.remove('nav-close');
        }
        navigation.classList.toggle('nav-open');
    });

    backBtn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        navigation.classList.toggle('proj-open');
    });

    for (var i = 0; i < navList.length; i++) {
        navList[i].addEventListener('mouseenter', function(e){
            e.stopPropagation();
            navBorders.classList.add(this.dataset.color);
        })
        navList[i].addEventListener('mouseleave', function(e){
            e.stopPropagation();
            navBorders.classList.remove(this.dataset.color);
        })
    }



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
