app.get('/', (req, res) => {
  res.sendFile(new URL('templates/index.html', import.meta.url).pathname);

});