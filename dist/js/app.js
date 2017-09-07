var getHttpRequest = function () {
    var httpRequest = false;

    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
        if (httpRequest.overrideMimeType) {
            httpRequest.overrideMimeType('text/html');
        }
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); //IE stuff
            }
            catch (e) {

            }
        }
    }
    if (!httpRequest) {
        console.log('Impossible de créer une instance XMLHTTP'); //error catch
        return false;
    }

    return httpRequest;
}
var httpRequest = getHttpRequest();

var fromPrevBtn = false;

var ahref = null;

var linkdiv = document.getElementById('ajxa');

if (linkdiv != null) {
    var links = linkdiv.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', linksHandler);
    }
}



httpRequest.onreadystatechange = function () {
    // console.log(httpRequest);
    if(httpRequest.readyState === 1){
        loadingstuff();
    }
    if (httpRequest.readyState === 4) {
        var response = httpRequest.responseText;
        var parser = new DOMParser();
        var el = parser.parseFromString(response, "text/html");
        // console.log(el.getElementById("ajax"));
        document.getElementById('ajax').innerHTML = el.getElementById('ajax').innerHTML;
        var stateObj = { url: ahref }
        if (!fromPrevBtn){
            history.pushState(stateObj, ahref, ahref);
        }
        currenturl = ahref;
        loaded();
    }
}


function linksHandler(e) {
    fromPrevBtn = false;
    e.preventDefault();
    ahref = this.getAttribute("href");
    // var name = ahref.split('/');
    // console.log(name);
    if(ahref != currenturl){
        httpRequest.open('GET', ahref, true);
        httpRequest.onprogress = function(e){
            if (e.lengthComputable){
                console.log(e);
            }
        }
        httpRequest.onloaded = function(e){
            console.log(e);
        }
        httpRequest.send();
    }
}


//URL change stuff

window.onpopstate = function (e) {
    fromPrevBtn = true;
    console.log(e);
    ahref = e.state.url
    if(ahref != currenturl){
        httpRequest.open('GET', ahref, true);
        httpRequest.send();
    }else{

        e.preventDefault();
    }
}

var loader = document.getElementById('loader');

function loadingstuff(){
    loader.classList.add('onload');
}
function loaded(){
    loader.classList.remove('onload');
}

var currenturl = document.baseURI.split('/').pop();

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