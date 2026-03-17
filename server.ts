import express from 'express';

async function start() {
  const app = express();
  
  app.get('*', (req, res) => {
    res.send('Server is up! Port 3000 is working.');
  });

  app.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on 3000');
  });
}

start().catch(console.error);
