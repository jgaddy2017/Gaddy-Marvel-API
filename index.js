
let PRIVATE_KEY = "6e8c81140cf26bea43c9feeccd70e3d759b6edf7";
let PUBLIC_KEY = "1fed845063d20c661e374633d49e3bc0";



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

    $.getJSON(url, query, callback);


}

function displayResults(data){
    console.log(data);
    //let results = data.data.results.map(result => `<p>${result.name}<p>`);
    //let results = results + `<img src="${data.data.results.thumbnail.path}${data.data.results.thumbnail.extension}"`;
    //let results = data.data.results.map(result => `<img src="${result.thumbnail.path}.${result.thumbnail.extension}">`);
    //let card = `<div class="card"><div class="icon">${results}</div><p>Deadpool</p></div>`;
    let card = data.data.results.map(result => createCards(result));
    $('#results').html(card);
}

function createCards(character){
    /*
    return `<div class="card">
                <div class="icon">
                    <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
                </diV>
                    <p>${character.name}</p>
           </div>`;
    */
   return `<div class="card" value="${character.id}">
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}">
                <p>${character.name}</p>
            </div>`;
}

/*
function handleSearchButton(){
    $('#js-marvel-form').submit(event => {
        event.preventDefault();
        const heroInput = $(event.currentTarget).find('#js-hero');
        const heroName = heroInput.val();
        runMarvelApi(heroName, displayResults);
    });
}
*/

function startMarvelApi(){
    //handleSearchButton();
    runMarvelApi("A", displayResults);
}


$(startMarvelApi);












