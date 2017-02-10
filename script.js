window.onload = function() {

    var req = new XMLHttpRequest();
    req.open("GET", "pokemons.json", true);
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status === 200) {
            myPokemon = JSON.parse(req.responseText);
        }
    };
    req.send();
    document.forms['my-form'].onsubmit = function(){
        var valueName = document.getElementById("mytxt").value;
        var pokemonName = document.getElementById("pokeName");
        var pokemonType = document.getElementById("pokeType");
        var pokemonImage = document.getElementById("pokeImg");
        var error = document.getElementById("error");
        pokemonName.innerHTML = "";
        pokemonType.innerHTML = "";
        pokemonImage.innerHTML = "";
        error.innerHTML = "";
        var valide = false;


        for (value in myPokemon){
            if (myPokemon[value].name == valueName || value == valueName){
                pokemonName.innerHTML = "Name : " + myPokemon[value].name;
                pokemonType.innerHTML = "Type : " + myPokemon[value].type;
                var pokemonShow = myPokemon[value].name.toLowerCase();
                pokemonImage.innerHTML = '<img src="http://img.pokemondb.net/artwork/' + pokemonShow + '.jpg"/>';
                valide = true;
            }
        }
        if (valide === false) {
            error.innerHTML = "Ce Pokémon n'existe pas";
            if (isNaN(valueName)){
                error.innerHTML = valueName + " not found";
            } else {
                error.innerHTML = "Pokémon number " + valueName + " not found";
            }
        }
        return false;
    };
};