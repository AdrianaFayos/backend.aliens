const { Pasajero } = require('../models');
const bcrypt = require('bcrypt');

class Viajero {

    async allPassengers(){
        return Pasajero.findAll();
    }

    async passengerId(id){

        return Pasajero.findByPk(id);
    }

    async passengerName(nombre){

        return Pasajero.findOne({
            where: {nombre}
        });
    }

    async newPassenger(body){
        
        let password = body.password;
        let passwordHashed = bcrypt.hashSync(password, 10);
        body.password = passwordHashed;
        return Pasajero.create(body);
    }

    async deletePassenger(id){
        return Pasajero.destroy({where: {id: id}});
    }

    async modifyPassenger(cuerpoDeDatos){
        return Pasajero.update(
            //Datos que cambiamos..
            {edad: cuerpoDeDatos.edad, especialidad: cuerpoDeDatos.especialidad},
            //Donde..
            {where: {id: cuerpoDeDatos.id}}
        )
    }
}

let pasajeroController = new Viajero();
module.exports = pasajeroController;