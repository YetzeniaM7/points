var personals =[
    {
        id:1,
        cedula:30302062,
        nombre_apellido:'Adolfo Ochoa',
        cargo:'Gerente',
        usuario:'OchoaAdo',
        clave:'ochoaado302062',
        especialidad: '-'
    },
    {
        id:2,
        cedula:30302065,
        nombre_apellido:'Adlfonso Castellano',
        cargo:'Gerente',
        usuario:'aljofranco',
        clave:'aljofranco302062',
        especialidad:'-'
    }
]

class personalController{
    Obtener(){
        console.log('Listando..')
        return personals;
    }
    ObtenerID(dni){
        var id = +dni;
        var result = personals.find(i => i.id === id);
        return result
    }
    Agregar(newPerson){
        personals.push(newPerson);
        console.log('Se ha creado un nuevo personal');
        return (personals);
    }
    ActualizarID(dni, newP){
        var id = +dni
        var person = personals.findIndex(i =>i.id === id);
            if(person == "-1"){
                console.log(`No existe persona con el ${id} solicitado`);
            }else if(personals[person].id == id){
                console.log(personals[person]);
                personals[person] = newP;
                console.log('El personal se ha actualizado correctamente');
                console.log(personals[person]);
            }
    }
    EliminarID(dni){
        var id = +dni;
        var person = personals.findIndex(i => i.id === id);
            if(person == "-1"){
                console.log(`Personal con id: ${id} solicitado no existe.`)
            }else if(personals[person].id == id){
                console.log('Personal Eliminado')
                personals.splice(person,1);
            }
    }
}

module.exports = new personalController();