import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  res.send({msg:'success',data:[{name:'233'}]})
  res.end();
}).listen(process.env.PORT);
