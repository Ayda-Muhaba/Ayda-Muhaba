import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 7026;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index'); 
});


app.get('/about', (req, res) => {
  res.render('about'); 
});


app.get('/contact', (req, res) => {
  res.render('contact'); 
});


app.listen(PORT, () => {
    console.log(`Server started`);
});

