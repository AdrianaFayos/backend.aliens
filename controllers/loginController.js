const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pasajeroController = require('./pasajeroController');
const secret = "Wayco tiene futbolin";


class LoginController {

    async validate(nombreCheck,passwordCheck){
        let pasajero  = await pasajeroController.passengerName(nombreCheck);
        let password = pasajero.password;

        let verificar = await bcrypt.compare(passwordCheck,password);

        if (!verificar){
            throw new Error ("El password y el nombre no coinciden")
        }

        let payload = {
            pasajeroId : pasajero.id,
            createdAt : new Date,
            isAdmin : pasajero.isAdmin
        };

        return jwt.sign(payload,secret)
    }
}

let loginController = new LoginController;
module.exports = loginController;