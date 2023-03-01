var espacios = [
    {
        id:1,
        nombre: 'Alfonso Castellano',
        descripcion:'espacio ---',
        direccion: '-',
        estado: 'Mantenimiento'
    },
    {
        id:2,
        nombre: 'Yetzenia Mendoza',
        descripcion:'espacio ---',
        direccion: '-',
        estado: 'En funcionamiento'
    }
]

class EspacioController {
    Obtener(){
        console.log('listar')
        return espacios;
    }
    ObtenerID(dni){
        var id = +dni;
        var result = espacios.find(i => i.id === id);
        if(!result){
            console.error(`espacio con id:${id} no existe, intente ingresando un id valido`)
        }
        return (result)
    }
    Agregar(newSp){
        espacios.push(newSp);
        console.log('Nuevo espacio agregado');
        return (espacios);
    }
    ActualizadID(dni, newC){ //NO MODIFICAR
        var id = +dni
        var space = espacios.findIndex(s => s.id ===id)

        if(space == '-1'){
            console.log('espacio no disponible')
        }else if(espacios[space].id == id){
            console.log(espacios[space]);
            espacios[space] = newC
            console.log("Espacio Actualizado");

            console.log(espacios[space])
        }
    }
    EliminarID(dni){
        var id = +dni;
        var person = espacios.findIndex(i => i.id === id);
            if(person == "-1"){
                console.log(`Espacio con id: ${id} solicitado no existe.`)
            }else if(espacios[person].id == id){
                console.log('Espacio Eliminado')
                espacios.splice(person,1);
            }
    }
}

module.exports = new EspacioController();