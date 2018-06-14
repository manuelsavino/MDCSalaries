$(function(){

    $("#submit").on("click", function () { loadData($("#search").val())})

    

    function loadData(query){
        $("#tbody").empty()
        event.preventDefault()

        
        $.ajax({
        url: "https://opendata.miamidade.gov/resource/uxti-s6ix.json",
        method: "GET",
        data: {
            "$limit": 100,
            "$$app_token": "qkEdULtaZjOJu5obC0ygJ1KMT"
            , "$q": query
            // ,"$where": "deptname=''"
        }   

    }).then(function(responce){
        console.log(responce)

        for(i= 0; i < responce.length; i++)
        {
            $("#tbody").append(
            $("<tr>")
            .append($("<td>").append(responce[i].firstname))
            .append($("<td>").append(responce[i].lastname))
            .append($("<td>").append(responce[i].deptname))
            .append($("<td>").append(responce[i].title))
            .append($("<td>").append("$"+responce[i].annualsalary))
            )

        }
    })
}


})