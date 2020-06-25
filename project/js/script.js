var heroBox = document.querySelectorAll(".hero");
var main = document.querySelector(".main");
var forwardButton = document.querySelector(".forward");
var previousButton = document.querySelector(".previous");
var heroInfoCase =  document.querySelector(".heroInfo");
var infoStyle =  document.querySelector(".info");
var closeButton = document.querySelector(".close");
var homeworld, homeworldName;
var xmlhttpPlanet;


var link = "http://swapi.dev/api/people/?page=1";



var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', link, true)
xmlhttp.send();
var boxRes, box, homeworldPage, homeworldPageRes;
getData ();

function getData () {
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        box = JSON.parse(xmlhttp.response);
        boxRes = box.results;
        for (let i=0; i < boxRes.length; i++) {
            main.children[i].innerHTML = boxRes[i].name;
           
            main.children[i].addEventListener("click", moreInfo)
            function moreInfo () {
                var person = boxRes[i];
                homeworld = person.homeworld;
                
                console.log(homeworld);
                showInfo(person);
                console.log(heroInfoCase);
            }

        }        

        forwardButton.addEventListener("click", nextPage);
        function nextPage(){
            link = box.next;
            new XMLHttpRequest();
            xmlhttp.open('GET', link, true)
            xmlhttp.send();
        }
        previousButton.addEventListener("click", previousPage);
        function previousPage(){
            link = box.previous;
            new XMLHttpRequest();
            xmlhttp.open('GET', link, true)
            xmlhttp.send();
            
        }
    }
}
}
getPlanet(homeworld)
function getPlanet(homeworld) {
    xmlhttpPlanet = new XMLHttpRequest();
    xmlhttpPlanet.open('GET', homeworld, true)
    xmlhttpPlanet.send();
    xmlhttpPlanet.onreadystatechange = function() {
        if (xmlhttpPlanet.readyState === 4 && xmlhttpPlanet.status === 200) {
            homeworldPage = JSON.parse(xmlhttpPlanet.response);
            console.log(homeworldPage)
            homeworldPageRes = homeworldPage.results;
            console.log(homeworldPageRes)
            
            for (let i=0; i < homeworldPage.length; i++) {
                homeworldName[i].innerHTML = homeworldPage[i].name;
                
                console.log(homeworldName);

            }
        }
    }

}


function showInfo (person) {
    infoStyle.classList.remove("info");
    infoList(person);
    
}
function infoList(person) {
    heroInfoCase.innerHTML = person.name + "<br>" + person.birth_year + "<br>" + person.gender + "<br>" + person.films + "<br>" + homeworldName + "<br>" + person.species;
    console.log(heroInfoCase);
}
closeButton.addEventListener("click", closeInfo);
function closeInfo(){
    infoStyle.classList.add("info");
}

