const express = require('express');
const next = require('next');
const path = require('path');

const mailer = require('./server.mailer');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.post('/translate-mail', async (req, res) => {
    try {
      const resulst = await mailer.translateMail(req.body);
      res.send(resulst);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  server.get('/shop.php', (req, res) => {
    const { query } = req;

    if (query.shopId === '10001') {
      app.render(req, res, 'shop', {
        id: '1',
      });
      res.redirect('/shop?id=1');
    } else if (query.shopId === '10002') {
      app.render(req, res, 'shop', {
        id: '2',
      });
      res.redirect('/shop?id=2');
    } else {
      app.render(req, res, 'shop');
      res.redirect('/shop');
    }
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(prod ? process.env.PORT : 3000, () => {
    console.log(`next+express running on port ${prod ? process.env.PORT : 3000}`);
  });
});
