$(function(){

    $("#submit").on("click", function () { loadData($("#search").val())})

//    var data: {
//         "$limit": 100,
//             "$$app_token": "qkEdULtaZjOJu5obC0ygJ1KMT"
//                 , "$q": query
//                     , "$where": "deptname=''"
//     }   


    function loadData(query){
        $("#tbody").empty()
        event.preventDefault()

        
        $.ajax({
        url: "https://opendata.miamidade.gov/resource/uxti-s6ix.json",
        method: "GET",
       
    }).then(function(response){
        console.log(response)

        for (var i = 0; i < arr.length; i++) {
            authors.push(arr[i].byline.original)
            snippet.push(arr[i].snippet)
            url.push(arr[i].web_url)
            newDiv = $("<div/>", { "class": "card" })
            newLink = $("<a>")
            snippetPar = $("<p></p>")
            newDiv.append(authors[i] + "<br>")
            snippetPar.text(snippet[i])
            newDiv.append(snippet[i] + "<br>")
            newLink.attr("href", url[i])
            newLink.text("Link")
            newDiv.append(newLink)
            $("#results-div").append(newDiv)
        }
    })
}


})