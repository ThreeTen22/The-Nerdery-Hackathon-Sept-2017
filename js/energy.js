const getEneryData = () => {
    $.ajax({
        url: "https://data.cityofchicago.org/resource/tepd-j7h5.json",
        type: "GET",
        data: {
            "$$app_token": "dAZz61L6NCJnpgbtQ7OXpToRI"
        }
    }).done((data) => {
        console.log(data)
    })
}

getEneryData();


