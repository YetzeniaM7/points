var solicitantes = [
    {
        id:1,
        cedula:30302062,
        nombre_apellido: 'Adolfo Ochoa',
        Fecha_Nac: '03/07/2003',
        direccion: 'Urb. Conticinio Plata IV',
        usuario: 'ochoaAdolf',
        clave: 'ochoaado302062',
        telefono: 4120495241
    },
    {
        id:2,
        cedula:30302065,
        nombre_apellido: 'Alfonso Castellano',
        Fecha_Nac: '23/01/2004',
        direccion: 'Urb. Conticinio Plata IV',
        usuario: 'aljofranco',
        clave: 'aljofranco302065',
        telefono: 4120495241
    }
]

class solicitanteController{
    Obtener(){
        console.log('Listando..')
        return solicitantes;
    }
    ObtenerID(dni){
        var id = +dni
        var solicitante = solicitantes.find(s => s.id === id);
        var result = `el solicitante con id:${id} es: ${solicitante.nombre_apellido}`
        return result;
    }
    Agregar(newSoli){
        solicitantes.push(newSoli);
        console.log('Nuevo solicitante agregado');
        return (solicitantes);
    }
    ActualizarID(dni, newSoli){
        var id = +dni
        var solicitante = solicitantes.findIndex(i =>i.id === id);
            if(solicitante == "-1"){
                console.log(`No existe solicitante con el ${id} solicitado`);
            }else if(solicitantes[solicitante].id == id){
                console.log(solicitantes[solicitante]);
                solicitantes[solicitante] = newSoli;
                console.log('El solicitante se ha actualizado correctamente');
                console.log(solicitantes[solicitante]);
            }
    }
    EliminarID(dni){
        var id = +dni;
        var solicitante = solicitantes.findIndex(i => i.id === id);
            if(solicitante == "-1"){
                console.log(`Solicitante con id: ${id} solicitado no existe.`)
            }else if(solicitantes[solicitante].id == id){
                console.log('Solicitante Eliminado')
                solicitantes.splice(solicitante,1);
            }
    }
}

module.exports = new solicitanteController;