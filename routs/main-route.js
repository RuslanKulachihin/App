const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        // layout: 'main', // можно явно указать, если нужно
        title: 'Главная страница', // пример передачи данных
    });
});

router.get('/contacts', (req, res) => {
    res.render('contacts', {
        title: 'Контакты',
        isContacts: true,
    });
});

router.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Наш Блог',
        isBlog: true,
    });
});

router.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Наши Курсы',
        isCourses: true,
    });
});

router.get('/magazines', (req, res) => {
    res.render('magazines', {
        title: '',
        isMagazines: true,
    });
});

router.get('/library-course', (req, res) => {
    res.render('library-course', {
        title: 'Курс',
    });
});

router.get('/library-blog', (req, res) => {
    res.render('library-blog', {
        title: 'Статьи',
    });
});

router.get('/library-magazines', (req, res) => {
    res.render('library-magazines', {
        title: 'Журнал',
    });
});

router.get('/logIn', (req, res) => {
    res.render('logIn', {
        title: 'Вход',
        isLogIn: true,
        isAuthorized: true,
    });
});

module.exports = router;
