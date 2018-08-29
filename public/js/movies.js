let express = require('express');
let app = express();
let axios = require('axios');

$(function(){
    $('#searchbutton').on('click', function(e){
        e.preventDefault();

        var link1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        var movie = $('#searchbar').val();

        axios.get(link1 + movie)
        .then (function(response){
            console.log(response.data);
        })
        . catch (function(error){
            console.log(error);
        })
    })
})