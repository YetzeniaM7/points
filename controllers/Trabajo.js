var Trabajo = [
    {
        Nombre: 'Reparacion de Pc',
        id_trabajo: '1',
        fecha_inicio: '15/01/2021',
        fecha_final: '18/01/2023',
        personal: '2',
        reserva: '3',
        equipo: '2'
    },
    {
        Nombre: 'Arreglos navideños',
        id_trabajo: '2',
        fecha_inicio: '12/12/2019',
        fecha_final: '10/01/2020',
        personal: '1',
        reserva: '2',
        equipo: '3'
    },
    {
        Nombre:'Hombre soltero cocinando',
        id_trabajo: '3',
        fecha_inicio: '31/07/2000',
        fecha_final: '23/04/2010',
        personal: '2',
        reserva: '3',
        equipo: '2'
    },
]

class TrabajoController 
{

    Listar(){
      console.log('Mostrar los registros guardados en Trabajo')
      return Trabajo;
    }


  crear(Trabajos){
    equipos.push(Trabajos);
    console.log("Se ha creado un nuevo Trabajo");
    return (Trabajo);
  }


  Actualizar(id_trabajo , NewU){
    var Trabajos = Trabajo.findIndex(u => u.id_trabajo === id_trabajo)
    if (Trabajos == "-1" ){
      console.log("El id del Trabajo " + id_trabajo + " no existe");
      console.log("Si el error persiste, llame a Sistemas");
    }else if(Trabajo[Trabajos].id_trabajo == id_trabajo){
      console.log(Trabajo[Trabajos]);
      Trabajo[Trabajos]= NewU;
      console.log("El Trabajo ha sido actualizado!!!" );
      console.log(Trabajo[Trabajos]);
    }
  }


 Buscar(id_trabajo){
  
   var trabajos = Trabajo.find(u => u.id_trabajo === id_trabajo);
   var res = "El id : " + id_trabajo + " es: " + trabajos.Nombre ;
   console.log(trabajos)
   return(res)
  }


  Eliminar(id_trabajo){
    var Trabajos = Trabajo.findIndex(u => u.id_trabajo === id_trabajo)
    if (Trabajos == "-1" ){
      console.log("Sorry, el Trabajo " + id_trabajo + " no existe");
    }else if(Trabajo[Trabajos].id_trabajo == id_trabajo){
      console.log("Oh, El id "+ id_trabajo + " del trabajo ha sido eliminado ");
      Trabajo.splice(Trabajos,1);
    }
  }

}
 

module.exports = new TrabajoController()