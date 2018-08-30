(function(){

    var url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

    $.get(url)
    .done(function(response) {
        // console.log(response);
        // updateUISuccess(response)
        let responseObject = JSON.parse(response);
        updateUISuccess(responseObject)
    })
    .fail(function(error){
        console.log(error);
        updateUIError()
    })

    function updateUIError(){

    }
    function updateUISuccess(response){
    var ingredient = response.drinks.strIngredient1;
    console.log(ingredient);
    }
})