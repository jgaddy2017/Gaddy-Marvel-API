    //console.log(data);
    /*
    data.data.results.forEach(function(result){
        let character = {
            thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
            name: result.name,
            discription: result.description
        }
    characterGroupObject[startLetter].push(character);
    });
    */







        //let card = data.data.results.map(result => createCards(result));
    //console.log(letterIndex);
    //console.log(characterGroupObject[letterIndex]);
    //let characterList = characterGroupObject.A;
    //console.log(characterGroupObject.A);
    //let card = Object.keys(characterGroupObject[letterIndex]).map(character => createCards(character));
    
    //console.log(characterGroupObject);
    //let card = [];
    //let indexing = characterGroupObject[letterIndex].length;
    /*
    let indexing = 50;
    console.log(characterGroupObject[letterIndex][0]);
    for(let i = 0; i < indexing; i++){
        card.push(createCards(characterGroupObject[letterIndex][0]));
    }*/
    //let cards = characterGroupObject[letterIndex];



        /*
    return `<div class="card">
                <div class="icon">
                    <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
                </diV>
                    <p>${character.name}</p>
           </div>`;
    */

                
    //console.log(character.name);
    //console.log(character.thumbnail);
    //return `<div class="card">
    //            <img src="${character.thumbnail}">
    //            <p>${character.name}</p>
    //        </div>`;






    const API_BASE_URL = 'http://www.recipepuppy.com/api/';

// ?i=onions,garlic&q=omelet&p=3

// a function to perform the AJAX request
/*
function getAPIData(callback) {
  console.log('getAPIData ran');
  $.getJSON('http://www.recipepuppy.com/api/?', {i:'onions,garlic', q: 'omelet', p: 3
  })
  .done(function(data) {
    console.log('getJSON ran');
    console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) { 
    console.log('getJSON request failed! ' + textStatus);
    console.log('error ' + errorThrown); 
  });
}
*/

// a function to display the results 
function renderResults(data) {
    console.log(data);
  }
  
  function getAPIData2(callback) {
    
    $.ajax({
      dataType: 'json',
      type: 'GET',
      crossDomain: true,
      url: 'https://cors-anywhere.herokuapp.com/http://www.superheroapi.com/api.php/2423459621001222/search/thor',
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) { 
          console.log('jqXHR:');
          console.log(jqXHR);
          console.log('textStatus:');
          console.log(textStatus);
          console.log('errorThrown:');
          console.log(errorThrown);
      }
    })
  }
  
  
  // call the function to get the input (binding event handler)
  $(getAPIData2(renderResults));
  





/*
function runSuperHeroApi(cardName, cardImg){
    let query = `http://superheroapi.com/api/2423459621001222/search/${cardName}.json`
    fetch('query')
        .then(function(response) {
        //return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}
*/
/*
function runSuperHeroApi(cardName, cardImg){
    console.log("run Super hero api");
    cardName = cardName.trim();
    let query = `http://superheroapi.com/api/2423459621001222/search/${cardName}`;
    //console.log(query);
    //console.log(cardName);
    //console.log(cardImg);
    $.getJSON(query, function(data){
        displayCharacterInfo(data, cardName, cardImg);
    });
}
*/
/*
function runSuperHeroApi(cardName, cardImg){
    let xhr = new XMLHttpRequest();
    let url = `http://superheroapi.com/api/2423459621001222/search/${cardName}`;
    var data = xhr.open('GET', url, true);
    if (!xhr) {
        alert('CORS not supported');
        //return;
    }

    displayCharacterInfo(data, cardName, cardImg);
}
*/