const API_KEY = "b6e482ae2c84ba7010f2e19df2098e09";

function success(position){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const location = data.name;
            const weath = data.weather[0].main;
            const temp = data.main.temp;
            document.querySelector(".openweather > span:nth-child(1)").innerHTML = location;
            document.querySelector(".openweather > span:nth-child(2)").innerHTML = temp + "℃ " + weath;
        });
}

function failed(){
    console.log("You must permit to know your location.");
}

navigator.geolocation.watchPosition(success, failed);

//geolocation: navigator.geolocation을 통해 사용 가능
// -> geolocation: getCurrentPosition, watchPosition 함수 사용(둘 다 파라미터로 성공 콜백 함수, 실패 콜백 함수 사용)
//fetch, Promise 개념(중요)