let weather = {
    "apiKey": "af985026cea34b5db6f203651230507" , 
    fetchWeather: function (city) {
        fetch(
            "http://api.weatherapi.com/v1/current.json?key="
            + this.apiKey + 
            "&q="+ city + 
            "&aqi=no"
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data.location;
        const { temp_f } = data.current;
        const { icon, text } = data.current.condition;
        const { wind_mph, humidity } = data.current;
        console.log(name, temp_f,icon,text,wind_mph,humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https:" + icon;
        document.querySelector(".description").innerText = text;
        document.querySelector(".temp").innerText = temp_f + " ºF";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = wind_mph + " mph";
    },
};
