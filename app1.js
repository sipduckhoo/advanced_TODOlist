const body = document.querySelector("body");
const form = document.querySelector(".submit");
const data = document.querySelector(".submit > input");
const loginbtn = document.querySelector(".submit > button");
const logoutform = document.querySelector(".logout");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const quote = document.querySelector(".quotes");
const weatherscript = document.createElement("script");
const weatherinfo = document.querySelector(".openweather");

const STOREAGE_KEY = "nameinfo";
const HIDDEN_CLASS = "hidden";

function loginadjustHidden(){ //입력란의 placeholder내용, 버튼 내용, 요소들의 숨김을 조정하는 함수
    form.childNodes[1].placeholder = "What is your work?";
    form.childNodes[3].innerText = "Upload";
    h2.classList.remove(HIDDEN_CLASS);
    quote.classList.remove(HIDDEN_CLASS);
    logoutform.classList.remove(HIDDEN_CLASS);
    weatherinfo.classList.remove(HIDDEN_CLASS);
    data.classList.add("btnmove");
    loginbtn.classList.add("btnmove");
    logoutform.classList.add("element");
}

function beEmpty(){ //입력을 완료하면 입력란을 비우기.
    data.value = "";
    data.focus();
}

function login(event){
    event.preventDefault(); //submit할 때, 새로고침을 막아줌
    loginadjustHidden();
    const username = data.value;
    h1.innerText = `Hello, ${username}`; //username은 유저가 입력한 ID값임
    beEmpty();
    localStorage.setItem(STOREAGE_KEY, username); //Application에 저장될 유저네임
    form.removeEventListener("submit", login);
    form.addEventListener("submit", workUpdate); //입력 데이터를 제출했을때의 이벤트를 로그인 처리 함수에서 할 일을 업데이트 하는 함수로 바꿈
    locate(weatherscript);
}

function workUpdate(event){ //로그인 하고 할 일을 입력했을 때, 실행되는 이벤트 함수. 입력한 값이 리스트 형태로 화면에 출력되게 하는 함수
    event.preventDefault();
    const worklist = document.querySelector(".works");
    const li = document.createElement("li");
    const node = document.createElement("span");
    const btn = document.createElement("button");
    li.appendChild(node);
    li.appendChild(btn);
    node.innerText = data.value + "  ";
    btn.innerHTML = "delete";
    btn.onclick = function(){ //할 일 목록 하나를 삭제할 때의 이벤트
        worklist.removeChild(li);
    };
    worklist.appendChild(li);
    beEmpty();
}

function locate(){ //현재의 위치와 날씨, 온도를 알아보기 위해 다른 js파일이 link되는 script 태그 추가
    body.appendChild(weatherscript);
    weatherscript.src = "locationAndWeather.js";
}

function logoutadjustHidden(){ //로그아웃을 하거나 로그인이 되지 않은 상태에서 요소들의 숨김여부를 조정
    logoutform.classList.add(HIDDEN_CLASS);
    logoutform.classList.remove("element");
    h2.classList.add(HIDDEN_CLASS);
    quote.classList.add(HIDDEN_CLASS);
    weatherinfo.classList.add(HIDDEN_CLASS);
    data.classList.remove("btnmove");
    loginbtn.classList.remove("btnmove");
}

function changeInner(){ //로그아웃을 할때, 입력란의 placeholder나 버튼의 내용 등, 요소들의 안에있는 내용을 되돌림
    h1.innerText = `Welcome to TODOList`;
    form.childNodes[1].placeholder = "Hello, what`s your name?";
    form.childNodes[3].innerText = "Log In";
    form.removeEventListener("submit", workUpdate);
    form.addEventListener("submit", login);
}

function removeAppData(){ //로그 아웃을 할때, Application에 저장되어있었던 회원 이름 삭제 
    body.removeChild(weatherscript);
    localStorage.removeItem("nameinfo");
}

const storage = localStorage.getItem(STOREAGE_KEY); //로그인 상태이면 이 값이 (회원 이름)의 문자열로 나오고, 로그인이 안되어있으면 null값 반환

if(storage != null){
    locate(document.createElement("script"));
    h1.innerText = `Hello, ${storage}`;
    loginadjustHidden();
    form.addEventListener("submit", workUpdate);
}
else{
    logoutadjustHidden();
    form.addEventListener("submit", login);
}

/*event 함수의 첫번재 파라미터: 발생하는 이벤트에 대한 기본적인 정보를 객체의 형태로 넘긴다.
    ->첫 번재 파라미터로 받아온 이벤트 객체에 대해, preventDefault가 디폴트 동작을 막아준다.
*/

//localStorage -> setItem, getItem, removeItem

//하나의 기능을 하나의 파일로 만들기(세분화 관리)

/*DON 객체: createElement(tagname): 만들 태그를 지정해줌

나중에 appendChild나 insertBefore을 이용해서 실질적으로 추가, removeChild를 통해 삭제도 가능*/

//이벤트 류는 node.on... = function(){...} 을 통해 함수를 이름을 통하지 않고 직접 정할 수도 있음