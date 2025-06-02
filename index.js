const express = require('express');
const ephebe = require('express-handlebars');
const mainRouts = require('./routs/main-route');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('pages'));

const hbs = ephebe.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'pages');

app.use(mainRouts);

async function start() {
    try {
        app.listen(PORT, () => {
            console.log('server start  ....');
        });
    } catch (error) {
        console.log(error);
    }
}

start();
