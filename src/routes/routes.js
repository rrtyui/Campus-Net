// contiene rutas a la que nuestro servidor puede responder
const { Router } = require('express'); // same as router = express.Router() (simplified)
const { bienvenido } = require('../controllers/controllers')

const router = Router();

router.get('/', bienvenido);

module.exports = router;