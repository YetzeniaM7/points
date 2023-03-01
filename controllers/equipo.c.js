var equipos= 
[
  {
    id: "1",
    nombre  : "Mouse Wireless 2.4GHz",
    serial : "Backend2023",
    descripcion  : "Mouse con led, retrocede ventanas",
    fecha  : "28/02/2023",
    estado : "Disponible"
  },
  {
    id: "2",
    nombre  : "Cpu Hp",
    serial : "Back3nd",
    descripcion  : "Reparado",
    fecha  : "28/02/2023",
    estado : "Ocupado"
  },
  {
    id: "3",
    nombre  : "Moden Cantv",
    serial : "Backend2023",
    descripcion  : "Moden Dañado",
    fecha  : "18/05/1998",
    estado : "Mantenimiento"
  }
]

class equipoController 
{
  //Funcion para mostrar registros almacenados
  Listar(){
    console.log('Mostrar los registros guardados en Equipos')
    return equipos;
  }

  //Funcion para crear registros
  crear(equipo){
    equipos.push(equipo);
    console.log("Se ha creado un nuevo Equipo");
    return (equipos);
  }

  //Funcion para actualizar
  Actualizar(id , NewU){
    var equipo = equipos.findIndex(u => u.id === id)
    if (equipo == "-1" ){
      console.log("El id del equipo " + id + " no existe");
      console.log("Si el error persiste, llame a Sistemas");
    }else if(equipos[equipo].id == id){
      console.log(equipos[equipo]);
      equipos[equipo]= NewU;
      console.log("El equipo ha sido actualizado!!!" );
      console.log(equipos[equipo]);
    }
  }

  /* Funcion para consultar por id*/
  Buscar(id){
    var equipo = equipos.find(u => u.id === id);
    var res = "El id : " + id + " es: " + equipo.nombre;
    return(res);
  }

  /*Funcion para eliminar por id*/
  Eliminar(id){
    var equipo = equipos.findIndex(u => u.id === id)
    if (equipo == "-1" ){
      console.log("Sorry, el equipo " + id + " no existe");
    }else if(equipos[equipo].id == id){
      console.log("Oh, El id "+ id + " de equipo ha sido eliminado ");
      equipos.splice(equipo,1);
    }
  }

}
 

module.exports = new equipoController()