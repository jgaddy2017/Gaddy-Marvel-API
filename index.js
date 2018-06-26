
//I should probably find a way to hide this
let PRIVATE_KEY = "6e8c81140cf26bea43c9feeccd70e3d759b6edf7";
let PUBLIC_KEY = "1fed845063d20c661e374633d49e3bc0";

let CHARACTER_HEADER = "";
let CHARACTER_INFO = "";
let UNLOCK_ERROR_MES = true;
let CHARACTER_ARRAY = ['deadpool', 'Thor', 'spider-man', 'thanos', 'captain america', 'hulk', 'wolverine', 'quicksilver', 'groot',
                        'cable', 'star-lord', 'storm', 'daredevil', 'deathlok', 'apocalypse'];

function searchMarvelApi(characterName){
    let ts = new Date().getTime();
    let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    var url = 'http://gateway.marvel.com:80/v1/public/characters';

    let query = {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash,
        nameStartsWith: characterName
    }
    return $.getJSON(url, query, function(data){
        if(data.data.results.length === 0){
            noCharacterFound(characterName);
        }
        else{
            
            let cardName = data.data.results[0].name;
            let cardUrl = data.data.results[0].thumbnail.path;
            let cardExt = data.data.results[0].thumbnail.extension;
            let cardImg = `${cardUrl}.${cardExt}`;
            console.log(cardName);
            console.log(cardImg);
            
            displayCharacterHeading(cardName, cardImg);
        }
    }).fail(showErr);
}



//creates an error message if something is wrong with retrieving data from marvel api
function showErr(err){
    const errMsg = `<div class="sorryTitleSection">
                        <p class="sorryTitle">Sorry<p>
                    </div>
                    <p class="sorryDescription">There was an <span class="importantOpeningStatement">error</span> retrieving data!</p>
                    <p class="sorryDescription">Something went <span class="importantOpeningStatement">Wrong</span> 
                    trying to connect to the <span class="importantOpeningStatement">Marvel API</span></p>
                    <p class="sorryDescription">Try checking your <span class="importantOpeningStatement">internet connection</span> 
                    and <span class="importantOpeningStatement">refreshing</span> the page</p>`;
    $('#characterPage').html(errMsg);
}

function noCharacterFound(cardName){
    UNLOCK_ERROR_MES = false;
    CHARACTER_HEADER = `<div class="errorMessageSection">
                            <h3 class="errorName">Name: ${cardName}</h3>
                            <div class="sorryTitleSection">
                                <p class="sorryTitle">Sorry<p>
                            </div>
                            <p class="sorryDescription">There was no character found with that name in the Marvel Api collection</p>
                        </div>`;
    //$('#characterPage').html(nothing);
}



//runs when a hero is clicked in the modal
//the url also contains the proxy server url along with the endpoint for the super hero API (CORS error)
function runSuperHeroApi(cardName){
    //retrieves the exact name 
    //iron man (Something) => iron man
    cardName = cardName.split(' (')[0];
    cardName = cardName.trim();
    
    return $.ajax({
        dataType: 'json',
        type: 'GET',
        crossDomain: true,
        url: `https://sleepy-plateau-97577.herokuapp.com/http://www.superheroapi.com/api.php/2423459621001222/search/${cardName}`,
        success: function(data) {
            
            try {
                console.log(data);
                //when retrieving the data, there would be some extra heros, this gets the exact one you clicked on.
                //Ex search thor and it would return lex luTHOR 
                data.results.forEach(function(result){
                    if(result.name.toLowerCase() == cardName.toLowerCase()){
                        displayCharacterInfo(result);
                        console.log(result.name);
                    }
                });
            }
            catch(err){
                displaySuperHeroApiError(cardName);
                //$('#characterPage').html(characterLoadError);
            }
        }

      });
    }





//displays error message if something when wrong when a hero card was clicked
function displaySuperHeroApiError(cardName){
     CHARACTER_INFO = `<div class="errorMessageSection">
                    <h3 class="errorName">${cardName}</h3>
                    <div class="sorryTitleSection">
                        <p class="sorryTitle">Sorry<p>
                    </div>
                    <p class="sorryDescription">There was an <span class="importantOpeningStatement">error</span> retrieving data!</p>
                    <p class="sorryDescription">There is a possibility the Super Hero API does not have information on this hero. Hopefully they will update their API
                    <span class="importantOpeningStatement"> SOON!!!</span></p>
                    </div>`;
    //return errorMes;
}

function displayCharacterHeading(characterName, characterImg){
    UNLOCK_ERROR_MES = true;
    let character = `<h3 class = "displayCharacterName">${characterName}</h3>
                    <img class = "displayCharacterImage" src="${characterImg}">`;
    CHARACTER_HEADER = character;
    //$('#characterPage').html(character);
}

//displays the character information after you click on a hero card in the modal
function displayCharacterInfo(data){
    console.log(data);
    let character = `<div class="row">
                    <div class="col-4 characterSection">
                        <h3 class="characterSectionTitle">Power Stats</h3>
                        <p class="characterSectionItems"><span class="sectionDescription">Intelligence: </span>${data.powerstats.intelligence}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Strength: </span>${data.powerstats.strength}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Speed: </span>${data.powerstats.speed}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Durability: </span>${data.powerstats.durability}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Power: </span>${data.powerstats.power}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Combat: </span>${data.powerstats.combat}</p>
                    </div>
                    <div class="col-4 characterSection">
                        <h3 class="characterSectionTitle">Appearance</h3>
                        <p class="characterSectionItems"><span class="sectionDescription">Gender: </span>${data.appearance.gender}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Race: </span>${data.appearance.race}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Height: </span>${data.appearance.height[0]}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Weight: </span>${data.appearance.weight[0]}</p>
                    </div>
                    <div class="col-4 characterSection">
                        <h3 class="characterSectionTitle">Biography</h3>
                        <p class="characterSectionItems"><span class="sectionDescription">Full Name: </span>${data.biography['full-name']}<p>
                        <p class="characterSectionItems"><span class="sectionDescription">Alignment: </span>${data.biography.alignment}<p>
                        <p class="characterSectionItems"><span class="sectionDescription">Place of Birth: </span>${data.biography['place-of-birth']}</p>
                        <p class="characterSectionItems"><span class="sectionDescription">Alter Egos: </span>${data.biography['alter-egos']}</p>
                    </di>
                    </div>`;
    //console.log(character);
    CHARACTER_INFO = character;
    //$('#characterInfoPage').html(character);
}


//displays the opening remarks
//openRemarks is a variable that is found in characterObject.js
function randomCharacter(){

let character = CHARACTER_ARRAY[Math.floor(Math.random() * CHARACTER_ARRAY.length)];
let openingRemarks = retrieveCharacterInfo(character);
$('#characterPage').html(openingRemarks);

}

function retrieveCharacterInfo(characterName){
    searchMarvelApi(characterName);
    runSuperHeroApi(characterName);
    $.when(searchMarvelApi(characterName), runSuperHeroApi(characterName)).done(function(){
        let characterPage = "";
        if(UNLOCK_ERROR_MES === true){
            characterPage = CHARACTER_HEADER + CHARACTER_INFO;
        }else{
            characterPage = CHARACTER_HEADER;
        }
        $('#characterPage').html(characterPage);
    });
}

function handleSearchCharacter(){
    $('#characterForm').submit(function(event){
        event.preventDefault();
        let characterName = $('#inputCharacter').val();
        retrieveCharacterInfo(characterName);
    });
}

function handleRandomButtton(){
    $('#randomizeButton').on('click', function(event){
        randomCharacter();
    });
}


//starts the Application
function startMarvelApi(){
    randomCharacter();
    handleSearchCharacter();
    handleRandomButtton();
}


$(startMarvelApi);












