var count=0;
$(document).ready(function(){

    $("#search").on("click",function(){
        var name= $("#name").val();
        count= $("#count").val();
        $('table').empty();
        $.ajax({
            url: "https://itunes.apple.com/search?term="+name+"&limit="+count,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myFunction(result) },
            error: function() {
                alert('Failed!');
            }
        });
    });
    $("tr").on("mouseover",function(){
        $(this).animate({"height":"30px"},)
    });
});

function myFunction(result){
    var song="";
    var album="";
    var picture="";
    var audio="";
    for (var i=0; i<count; i++){
        album= result.results[i].collectionName;
        song= result.results[i].trackName;
        picture= result.results[i].artworkUrl100;
        audio=result.results[i].previewUrl;
        document.getElementById("table").innerHTML+="<tr>";
        document.getElementById("table").innerHTML+=
            "<td id='rank'>"+(i+1)+"</td>"+
            "<td id='img'><img src="+picture+ "></td>"+
            "<td id='info'>"+song+"<br>"+album+"</td>"+
            "<td id='audio'><audio controls src="+audio+" type= 'audio/m4a'></audio></td>";
    }
}

