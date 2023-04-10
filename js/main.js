function scrollEvents() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav_link');
    const menu = document.querySelector('.nav_list');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    const linhHref = link.getAttribute('href').replace('#', '');

                    if (linhHref === entry.target.id) {
                        link.classList.add('active');
                    }
                    else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.8,
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav_link')) {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').replace('#', '');

            window.scrollTo({
                top: document.getElementById(sectionId).offsetTop,
                behavior: "smooth",
            });
        }
    });
};

function animatedProgressBar() {
    const progress = document.querySelector('.progress_bar');

    //значение скролла от верхней границы
    const scrollValue = document.documentElement.scrollTop;
    //высота всего документа
    const documentHeight = document.documentElement.scrollHeight;
    //высота экрана
    const viewportHeight = document.documentElement.clientHeight;
    //разница между высотой сайта и высотой экрана
    const height = documentHeight - viewportHeight;
    //процент прокрутки
    const scrollPercent = (scrollValue / height) * 100;

    progress.style.width = scrollPercent + '%';
}

scrollEvents();
window.addEventListener('scroll', animatedProgressBar);