AOS.init();

function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('menu-open');
}
const navMenu = document.querySelector('.header_nav');
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
})


document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".category_button");
    btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            // 모든 버튼에서 'active' 클래스 제거
            btns.forEach(function (btn) {
                btn.classList.remove('active');
            });
            // 클릭된 버튼에 'active' 클래스 추가
            btn.classList.add('active');





            // 모든 버튼의 자식 span 요소에 필터 효과 적용
            btns.forEach(function (btn) {
                const span = btn.querySelector('span');
                span.style.filter = 'blur(1.5px)';
            });
            // 클릭된 버튼의 자식 span 요소의 필터 효과 제거
            const clickedSpan = btn.querySelector('span');
            clickedSpan.style.filter = 'blur(0px)';
        })
    });
});

// 테이터 호출 버튼
const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');
var test = document.getElementsByClassName("category_button");
categories.addEventListener('click', (event) => {
    console.log(event);
    const filter = event.target.dataset.category;
    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);
        console.log(test.children);
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
        if (filter == null) {
            return;
        }
    })
})