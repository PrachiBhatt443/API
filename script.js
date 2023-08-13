const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b9958e010msh92323c9ef35e0c6p1d0c9cjsn64fbc2986135',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function fetchData(city) {
    try {
        const response = await fetch(url+city, options);
        const result = await response.json();
        console.log(result);
        document.querySelector(".city").innerHTML=city
        document.querySelector(".temp").innerHTML=result.temp + "°C"
        document.querySelector(".humidity").innerHTML=result.humidity +"%"
        document.querySelector(".wind").innerHTML=result.wind_speed +" km per hr"
        document.querySelector(".wind_degrees").innerHTML=result.wind_degrees
        document.querySelector(".sunrise").innerHTML=result.sunrise
        document.querySelector(".sunset").innerHTML=result.sunset

        if(result.humidity>80){
            weatherIcon.src="images/rain.png"
        }else if(result.humidity<20){
            weatherIcon.src="images/clear.png"
        }else{
            weatherIcon.src="images/cloud.png"
        }


    } catch (error) {
        console.error(error);
    }
}
searchBtn.addEventListener("click",()=>{
    fetchData(searchBox.value)
})

// fetchData(city);
