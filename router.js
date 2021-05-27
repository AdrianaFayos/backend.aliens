const router = require('express').Router();

const pasajeroRouter = require('./routers/pasajeroRouter')
const naveRouter = require('./routers/naveRouter')
const loginRouter = require('./routers/loginRouter')

router.use('/pasajeros', pasajeroRouter);
router.use('/naves', naveRouter);
router.use('/login', loginRouter);

module.exports = router;