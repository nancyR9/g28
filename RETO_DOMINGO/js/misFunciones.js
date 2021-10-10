function consultaInfoCliente(){
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            respuestaCliente(respuesta.items);
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            consultaInfoCliente();
            alert("Se ha Eliminado.")
        }
    });
}


function consultaMensaje(){
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaMens){
            console.log(respuestaMens);
            respuestaMensaje(respuestaMens.items);
        }
    });
}

function registrarCliente(){
    let Datos={
        id:$("#id").val(),
        name:$("#Nombre").val(),
        email:$("#Email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(Datos);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:Datos,
        datatype:"JSON",
        success:function(respuestaRegiscliente){
            $("#resultado").empty();
            $("#id").val("");
            $("#Nombre").val("");
            $("#Email").val("");
            $("#age").val("");
            consultaInfoCliente();
            alert("Se ha registro el Cliente")
        }
    });
}

function registrarMensaje(){
    let Datos={
        id:$("#id1").val(),
        messagetext:$("#descMensaje").val(),
    };
    let dataToSend=JSON.stringify(Datos);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:Datos,
        datatype:"JSON",
        success:function(resultadoMensaje){
            $("#resultadoMensaje").empty();
            $("#id1").val("");
            $("#descMensaje").val("");
            alert("Se ha registro el mensaje")
        }
    });
}

function actualizarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#Nombre").val(),
        email:$("#Email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Nombre").val("");
            $("#Email").val("");
            $("#age").val("");
            consultaInfoCliente();
            alert("se ha Actualizado")
        }
    });
}

function editarInformacionMensaje(){
    let myData={
        id:$("#id1").val(),
        messagetext:$("#descMensaje").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(resultadoMensaje){
            $("#resultadoMensaje").empty();
            $("#id1").val("");
            $("#descMensaje").val("");
            consultaMensaje();
            alert("se ha Actualizado")
        }
    });
}

function borrarElementoMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(resultadoMensaje){
            $("#resultadoMensaje").empty();
            consultaMensaje();
            alert("Se ha Eliminado.")
        }
    });
}

function respuestaCliente(items){
    let tablaCliente="<table>";
    for(i=0;i<items.length;i++){
        tablaCliente+="<tr>";
        tablaCliente+="<td>"+items[i].id+"</td>";
        tablaCliente+="<td>"+items[i].name+"</td>";
        tablaCliente+="<td>"+items[i].email+"</td>";
        tablaCliente+="<td>"+items[i].age+"</td>";
        tablaCliente+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        tablaCliente+="</tr>";
    }
    tablaCliente+="</table>";
    $("#resultado").append(tablaCliente);
}

function respuestaRegistrarCliente(items){
    let tablaRegistroCliente="<table>";
    for(i=0;i<items.length;i++){
        tablaRegistroCliente+="<tr>";
        tablaRegistroCliente+="<td>"+items[i].id+"</td>";
        tablaRegistroCliente+="<td>"+items[i].name+"</td>";
        tablaRegistroCliente+="<td>"+items[i].email+"</td>";
        tablaRegistroCliente+="<td>"+items[i].age+"</td>";
        tablaRegistroCliente+="</tr>";
    }
    tablaRegistroCliente+="</table>";
    $("#resultado").append(tablaRegistroCliente);
}

function respuestaMensaje(items){
    let tablaMensaje="<table>";
    for(i=0;i<items.length;i++){
        tablaMensaje+="<tr>";
        tablaMensaje+="<td>"+items[i].id+"</td>";
        tablaMensaje+="<td>"+items[i].messagetext+"</td>";
        tablaMensaje+="<td> <button onclick='borrarElementoMensaje("+items[i].id+")'>Borrar Mensaje</button>";
        tablaMensaje+="</tr>";
    }
    tablaMensaje+="</table>";
    $("#resultadoMensaje").append(tablaMensaje);
}

function mostrarRespuestaHabitaciones(items) {
    let myTable = "<table>"
    for (i = 0; i < items.length; i++) {
        myTable+= "<tr>";
        myTable+= "<td>" + items[i].id +"</td>";
        myTable+= "<td>" + items[i].room +"</td>";
        myTable+= "<td>" + items[i].stars +"</td>";
        myTable+= "<td>" + items[i].category_id+"</td>";
        myTable+= "<td>" + items[i].description+"</td>";
        //myTable+= "<td> <button onclick='borrarHabitacion(" + items[i].id + ")'>Borrar</button>";
        myTable+= "</tr>";
    }
    myTable += "</table>";
    $("#resultadoHabitacion").append(myTable);
}

function consultaInfoHabitacion() {
    $.ajax({
        url: "https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type: "GET",
        datatype: "JSON",
        success: function(resultadoHabitacion) {
            console.log(resultadoHabitacion);
			$("#resultadoHabitacion").empty();
            $("#id2").val(""),
            $("#room").val(""),
            $("#stars").val(""),
            $("#category").val(""),
            $("#description").val(""),
            mostrarRespuestaHabitaciones(resultadoHabitacion.items);
        }
    });
}

function registrarHabitacion(){
    let Datos={
        id:$("#id2").val(),
        room:$("#room").val(),
        stars:$("#stars").val(),
        category_id:$("#category").val(),
        description:$("#description").val()
    };
    let dataToSend=JSON.stringify(Datos);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/room/room",
        type:"POST",
        data:Datos,
        datatype:"JSON",
        success:function(resultadoHabitacion){
            $("#resultadoHabitacion").empty();
            $("#id2").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category").val("");
            $("#description").val("");
            consultaInfoHabitacion();
            alert("Se ha registro la habitacion")
        }
    });
}
