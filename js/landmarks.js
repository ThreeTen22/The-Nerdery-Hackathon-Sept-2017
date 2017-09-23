var landmark = []
const getEneryData = () => {
    $.ajax({
        //url: "https://data.cityofchicago.org/resource/tepd-j7h5.json",
        url: "https://data.cityofchicago.org/resource/fpx9-pjqk.json",
        type: "GET",
        data: {
            "$$app_token": "dAZz61L6NCJnpgbtQ7OXpToRI",
            //"$limit": 10
        }
    }).done((data) => {
        
        landmark = data
//        console.log(landmark)
    })
}

getEneryData();


