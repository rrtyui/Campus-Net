// handle business logic to incoming requests, which are routed in routes/routes.js file

const bienvenido = (req, res)=>{
  res.send('ayuda');
};

module.exports = {bienvenido};