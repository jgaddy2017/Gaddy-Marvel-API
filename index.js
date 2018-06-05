
let PRIVATE_KEY = "6e8c81140cf26bea43c9feeccd70e3d759b6edf7";
let PUBLIC_KEY = "1fed845063d20c661e374633d49e3bc0";



function runMarvelApi(callback){
    let ts = new Date().getTime();
    let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

    var url = 'http://gateway.marvel.com:80/v1/public/characters';

    let query = {
        ts: ts,
        apikey: PUBLIC_KEY,
        hash: hash,
        limit: 1000 
    }

    $.getJSON(url, query, callback);


}

function displayResults(data){
    let results = data.data.results.map(result => `<p>${result.name}<p>`);
    $('#results').html(results);
}


function handleSearchButton(){
    $('#js-marvel-form').submit(event => {
        event.preventDefault();
        runMarvelApi(displayResults);
    });
}


function startMarvelApi(){
    handleSearchButton();
}


$(startMarvelApi);












