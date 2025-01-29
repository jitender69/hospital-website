import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'My Portfolio' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'My Portfolio' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'My Portfolio' });
});

app.get('/doctor', (req, res) => {
    res.render('doctor', { title: 'My Portfolio' });
});

app.get('/testimonial', (req, res) => {
    res.render('testimonial', { title: 'My Portfolio' });
});

app.get('/treatment', (req, res) => {
    res.render('treatment', { title: 'My Portfolio' });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

