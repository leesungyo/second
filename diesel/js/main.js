//아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector('#circle');
//console.log(circle);
//태그명이 article인 요소를 찾아서 저장
const articles = document.querySelectorAll('article');
//console.log(articles);

//article의 전체 개수만큼 반복하면서 mouseenter, mouseleave 이벤트 연결
for(let el of articles){
    //artile에 마우스 포인터를 올리면 부모인 #cilcle의 
    el.addEventListener('mouseenter',e=>{
        circle.style.animationPlayState = 'paused';
    });
    el.addEventListener('mouseleave',e=>{
        circle.style.animationPlayState = 'running';
    });
}