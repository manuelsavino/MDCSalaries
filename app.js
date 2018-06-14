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

        for(i= 0; i < response.length; i++)
        {
            $("#tbody").append(
            $("<tr>")
            .append($("<td>").append(response[i].firstname))
            .append($("<td>").append(response[i].lastname))
            .append($("<td>").append(response[i].deptname))
            .append($("<td>").append(response[i].title))
            .append($("<td>").append("$"+response[i].annualsalary))
            )

        }
    })
}


})