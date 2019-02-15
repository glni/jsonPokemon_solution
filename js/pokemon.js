// API: https://pokemontcg.io/
$(document).ready(function(){

    const section = $("section#pokemonWrapper");
    const searchForm = $(".searchForm");

    searchForm.submit(function (e) {
        e.preventDefault();
    });

    $("#search").click(function () {

        let query = $("#query").val();
        let url = "https://api.pokemontcg.io/v1/cards?name=" + query;

        $.ajax({
            type: "get",
            dataType: "json",
            url: url
        }).done(function (data) {
            console.log(data);
            section.html("");

            $.each(data.cards, function (key, value) {
                section.append("<figure><img src="+ value.imageUrl +"></figure>");
            });

            searchForm.animate({
                height : "25vh"
            }, 250);

        }).fail(function (xhr, status, error) {
            console.log(error);
        });
    });
}); /*document ready END*/