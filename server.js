import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import mergepdf from './merge.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

app.use('/static/', express.static('public'));


app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'templates', 'index.html');
  res.sendFile(filePath);
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
  try {
    await mergepdf(path.join(__dirname, req.files[0].path), req.files[1].path);
    res.redirect(`http://localhost:3000/static/merged.pdf`);
  } catch (error) {
    console.error('Error merging PDFs:', error);
    res.status(500).send('Error merging PDFs');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
