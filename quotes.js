const image_address = ["https://th.bing.com/th/id/R.91fb911e4796ba27b2f4960bfce52743?rik=OpSG2sHEe8sxyw&riu=http%3a%2f%2fcfile10.uf.tistory.com%2fimage%2f144B8D385017F9FF061F72&ehk=oV77Zy1IwbAAkcG9RHDm%2bKEZTsggdsHEHPR4lLSv4%2fs%3d&risl=&pid=ImgRaw&r=0",
"https://img.chuing.net/i/QppyJu/Preview.x.jpg",
"https://t1.daumcdn.net/cfile/tistory/184CE23C4ECF61B613"];

const quotes = ["Think like a man of action and act like man of thought.",
"Courage is very important. Like a muscle, it is strengthened by use.",
"Life is the art of drawing sufficient conclusions from insufficient premises.",
"By doubting we come at the truth.",
"A man that hath no virtue in himself, ever envieth virtue in others.",
"When money speaks, the truth keeps silent.",
"Better the last smile than the first laughter.",
"In the morning of life, work; in the midday, give counsel; in the evening, pray.",
"Painless poverty is better than embittered wealth.",
"A poet is the painter of the soul."];

const imag = document.querySelector(".img-fluid");
imag.src = image_address[parseInt(Math.random() * image_address.length)]; //floor를 써도 됨
const quot = document.querySelector(".quotes");
quot.innerText = quotes[parseInt(Math.random() * quotes.length)]; //웬만하면 리터럴 숫자는 쓰지 말 것(어떤 요소가 변하면 이 숫자 값도 변해야함)

//parseInt -> integer 형식으로 형변환
//다른 형식으로도 사용 가능: Math.floor(number) -> 어떤 수에 대해 내림을 해줌
//Math.ceil(number) -> 어떤 수에 대해 올림을 해줌
//Math.round(number) -> 어떤 수에 대해 반올림을 해줌
