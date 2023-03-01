var Reservas = [
    {
      id: '1',
      solicitante: '1',
       fecha_inicio: '11/11/2018',
      fecha_final: '12/12/2019',
      motivo: 'Reunion',
      personal: '3',
      equipo: '1',
      espacio : 'Auditorio'
    },
    {
      id: '2',
      solicitante: '3',
       fecha_inicio: '01/03/2010',
      fecha_final: '11/10/2018',
      motivo: 'Analisis de eventos',
      personal: '1',
      equipo: '1',
      espacio : 'Laboratorio'
    },
    {
      id: '3',
      solicitante: '2',
       fecha_inicio: '10/06/2015',
      fecha_final: '12/12/2016',
      motivo: 'Ensayo',
      personal: '2',
      equipo: '1',
      espacio : 'Cuarto acustico'
    },
]

class ReservasController 
{

    Listar(){
      console.log('Mostrar los registros guardados en Reservas')
      return Reservas;
    }


  crear(Reserva){
    equipos.push(Reserva);
    console.log("Se ha creado una nueva Reserva");
    return (Reservas);
  }


  Actualizar(id , NewU){
    var Reserva = Reservas.findIndex(u => u.id === id)
    if (Reserva == "-1" ){
      console.log("El id de la Reserva " + id + " no existe");
      console.log("Si el error persiste, llame a Sistemas");
    }else if(Reservas[Reserva].id == id){
      console.log(Reservas[Reserva]);
      Reservas[Reserva]= NewU;
      console.log("La reserva ha sido actualizada!!!" );
      console.log(Reservas[Reserva]);
    }
  }


 Buscar(id){
  
   var Reserva = Reservas.find(u => u.id === id);
   var res = "El id : " + id + " se debe a: " + Reserva.motivo ;
   console.log(Reserva)
   return(res)
  }


  Eliminar(id){
    var Reserva = Reservas.findIndex(u => u.id === id)
    if (Reserva == "-1" ){
      console.log("Sorry, la Reserva " + id + " no existe");
    }else if(Reservas[Rerserva].id == id){
      console.log("Oh, El id "+ id + " de la Reserva ha sido eliminado ");
      Reservas.splice(Reserva,1);
    }
  }

}
 

module.exports = new ReservasController()