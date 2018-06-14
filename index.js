
let PRIVATE_KEY = "6e8c81140cf26bea43c9feeccd70e3d759b6edf7";
let PUBLIC_KEY = "1fed845063d20c661e374633d49e3bc0";

let buttonActivation = 0;


function fillCharacterObject(){

    Object.keys(characterGroupObject).forEach(function(key){

        runMarvelApi(key);
        
    });
    //console.log(characterGroupObject);


}

function createCharacterObject(data, startLetter){

   let card = data.data.results.map(result => createCards(result));
   let cardList = card.join("");
   //console.log(characterGroupObject);
   characterGroupObject[startLetter] = cardList;
}



function runMarvelApi(startLetter, callback){
    let ts = new Date().getTime();
    let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    var url = 'http://gateway.marvel.com:80/v1/public/characters';

    let query = {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash,
        nameStartsWith: startLetter ,
        limit: 99
    }

    $.getJSON(url, query, function(data){
        buttonActivation++;
        createCharacterObject(data, startLetter);
        if(buttonActivation == 26){
            alert("ready");
        }
    });


}

function displayResults(letterIndex){
    let cards = characterGroupObject[letterIndex];
    $('#results').html(cards);
}

function createCards(character){
   return `<div class="card">\
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}">\
                <p>${character.name}</p>\
            </div>`;
}

function handleKeyDown(){
    $('html').keydown(event => {
        let keyboardPressed = event.key;
        runMarvelApi(keyboardPressed, displayResults);
    });
}

function handleCharacterIndex(){
    $('.characterIndex').click(event => {
        event.stopPropagation();
        let selectedIndex = event.currentTarget;
        let selectedLetter = $(selectedIndex).text();
        displayResults(selectedLetter);
        handleCardClick();
    });
}
function handleCardClick(){
    $('.card').click(event => {
        event.stopPropagation();
        let selectedCard = event.currentTarget;
        let cardName = $(selectedCard).text();
        let cardImg = $(selectedCard).find('img').prop('src');
        //displayCharacterInfo(cardName, cardImg);
        document.getElementById('myModal').style.display = "none";
        runSuperHeroApi(cardName, cardImg);
    });
}
function runSuperHeroApi(cardName, cardImg){
    cardName = cardName.split(' (')[0];
    cardName = cardName.trim();
    
    $.ajax({
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        url: `https://sleepy-plateau-97577.herokuapp.com/http://www.superheroapi.com/api.php/2423459621001222/search/${cardName}`,
        success: function(data) {
            //displayCharacterInfo(data, cardName, cardImg);
            console.log(data);
            data.results.forEach(function(result){
                console.log(result.name);
                console.log(cardName);
                if(result.name.toLowerCase() == cardName.toLowerCase()){
                    displayCharacterInfo(result, cardName, cardImg);
                }
            });
        },
        error: function(jqXHR, textStatus, errorThrown) { 
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('errorThrown:');
            console.log(errorThrown);
        }
      });


}


function displayCharacterInfo(data, characterName, characterImg){
    console.log(data);
    let character = `<h3>${characterName}</h3><img src="${characterImg}">
                    <div class="row">
                    <div class="col-4">
                        <h3>Power Stats</h3>
                        <p>Intelligence: ${data.powerstats.intelligence}</p>
                        <p>Strength: ${data.powerstats.strength}</p>
                        <p>Speed: ${data.powerstats.speed}</p>
                        <p>Durability: ${data.powerstats.durability}</p>
                        <p>Power: ${data.powerstats.power}</p>
                        <p>Combat: ${data.powerstats.combat}</p>
                    </div>
                    <div class="col-4">
                        <h3>Appearance</h3>
                        <p>Gender: ${data.appearance.gender}</p>
                        <p>Race: ${data.appearance.race}</p>
                        <p>Height: ${data.appearance.height[0]}</p>
                        <p>Weight: ${data.appearance.weight[0]}</p>
                    </div>
                    <div class="col-4">
                        <h3>Biography</h3>
                        <p>${data.biography['full-name']}<p>
                        <p>${data.biography.alignment}<p>
                    </di>
                    </div>`;
    $('#characterPage').html(character);
}
function displayCharacterIndex(){
    $('#results').html(characterIndexingList);
    handleCharacterIndex();
}

//controls the modal that pops up
//also this code came from the W3 schools tutorial
function handleModal(){
    // Get the modal
    let modal = document.getElementById('myModal');
    // Get the button that opens the modal
    let btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        displayCharacterIndex();
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}






function startMarvelApi(){
    fillCharacterObject()
    handleKeyDown();
    //handleCharacterIndex();
    displayCharacterIndex();
    handleCardClick();
    handleModal();
}


$(startMarvelApi);












