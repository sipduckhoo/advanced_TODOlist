const time = document.querySelector("h2");

function clocking(){
    const clock = new Date();
    let hour = clock.getHours();
    const minute = clock.getMinutes();
    const second = clock.getSeconds();
    let noon;
    //console.log(12);

    if(hour < 12)
        noon = "AM";
    else{
        noon = "PM";
        
        if(hour != 12)
            hour -= 12;
    }
    time.innerText = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")} ${noon}`;
} //padStsart: 문자열을 객체로 삼아서 지정한 길이만큼 채워주고, 원래 지정한 길이보다 적을 경우, 지정한 인자로 채워줌(앞)
//padEnd: padStart와 똑같지만, 이 함수는 뒷 부분을 채운다.

function timerequire(){
    clocking();
    setInterval(clocking, 1000); //지정한 function을 지정한 시간(ms)이 지날 때 마다 반복호출
}
timerequire();
