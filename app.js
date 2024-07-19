const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const routerProducto = require('./router/productoRouter');
app.use("/", routerProducto);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
