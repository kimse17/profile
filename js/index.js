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
categories.addEventListener('click', (event) => {
    console.log(event);
    const filter = event.target.dataset.category;
    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);
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



document.querySelector(".header_menu li a").addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작인 링크 이동을 막음
    const element = document.querySelector('#work_all');
    const rect = element.getBoundingClientRect();
    console.log('Y축값:', rect.top);
    window.scrollTo({
        top: rect.top,
        behavior: 'smooth' // 스크롤 부드럽게
    });
});