const { Nave } = require('../models');

class Vehiculo {
    
    async allNaves(){
        return Nave.findAll();
    }

    async newNave(body){
        return Nave.create(body);
    }

    async deleteNave(id){
        return Nave.destroy({where: {id: id}});
    }

    async modifyNave(cuerpoDeDatos){
        return Nave.update(
            //Datos que cambiamos..
            {origen: cuerpoDeDatos.origen, aforo: cuerpoDeDatos.aforo},
            //Donde..
            {where: {id: cuerpoDeDatos.id}}
        )
    }

}

let naveController = new Vehiculo();
module.exports = naveController;