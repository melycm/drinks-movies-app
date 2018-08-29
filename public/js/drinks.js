$(function(){
    $('#searchbutton').on('click', function(e){
        e.preventDefault();

        var link1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
        var movie = $('#searchbar').val();

        $.get(link1 + movie);
        .done(function(movname){
            console.log(movname);
        })
    })
})