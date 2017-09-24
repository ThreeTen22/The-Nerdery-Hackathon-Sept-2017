$(document).ready(function(){
    //addInfo(landmark)
    function addInfo(infoArray){
        console.log("infoarray", infoArray)
        var info = $("#info")
        infoArray.map(function(item){
            var panel = $("<div>")
            panel.addClass("panel panel-primary")
            var pheader = $("<div>")
            pheader.addClass("panel-heading")
            var pbody = $("<div>")
            pbody.addClass("panel-body")
            var p = $("<p>")
            pheader.text(item.landmark_name)
            pbody.append("<p>Architect           :" + item.architect + "\n</p>")
            .append("<p>Address             :" + item.address + "\n</p>")
            .append("<p>Built On            :" + item.date_built + "\n</p>")
            .append("Landmark Designated On:" + item.landmark_designation_date + "\n</p>")
            panel.append(pheader).append(pbody)
            info.append(panel)
        })
    }
})

