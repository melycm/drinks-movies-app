(function() {
    var randomNum = Math.floor((Math.random() * 1000));
    var url = 'https://api.themoviedb.org/3/movie/' + randomNum + '?api_key=3868e49837f9f140ac33ea1d02e23897';
    $.get(url)
    .done(function(response) {
        let responseObject = JSON.parse(response);
        updateUISuccess(responseObject)
    })

    .fail(function(error){
        console.log(error);
        updateUIError()
    });

    function updateUISuccess(response){
    }
    function updateUIError(){
    }
    function updateUISuccess(response){
        console.log(url);
        var cardphoto = document.getElementById("cardphoto");
        var pic = "http://image.tmdb.org/t/p/w185/" + response["poster_path"];
        cardphoto.setAttribute("src", pic)
    }
});
})();