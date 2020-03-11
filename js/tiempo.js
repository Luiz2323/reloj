(function(){


/*funcion que nos permite ingresar la hora y fecha de forma dinamica*/

	function actualizar_hora(){
		/* llamo a la funcion Date para obtener los datos de fecha y hora de la computadora*/
		var tiempo = new Date(),
		 dia = tiempo.getDay(),
		 mes = tiempo.getMonth(),
		 ano = tiempo.getFullYear(),
		 horas = tiempo.getHours(),
		 minutos = tiempo.getMinutes(),
		 segundos = tiempo.getSeconds();

		 /*llamo la informacion de las cajas de mi html y las reemplazo por mi informacion obtenida en elas variables anteriores*/

		var caja_hora = document.getElementById('horas'),
		caja_minutos = document.getElementById('minutos'),
		caja_segundos = document.getElementById('segundos'),
		caja_dia = document.getElementById('dia'),
		caja_mes = document.getElementById('mes'),
		caja_ano = document.getElementById('ano'),
		semanalist=['Enero','Febrero','Marzo','Abril'];
		caja_dia.textContent = dia;
		caja_mes.textContent = semanalist[mes];
		caja_ano.textContent = ano;
		
		

		

		caja_hora.textContent = horas;
		caja_minutos.textContent = minutos;
		caja_segundos.textContent = segundos;
		

	};

	/*creo un intervalo para estarlo actualizando y que por medio de este de la apariencia de que se mueve como un reloj de verdad*/

	intervalo = setInterval(actualizar_hora, 1000);







}())



