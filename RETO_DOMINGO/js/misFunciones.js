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

function InsertarMensaje(){
    let datosMensaje={
        id:$("#id").val(),
        messagetext:$("#descMensaje").val()
    };
    let dataToSend=JSON.stringify(datosMensaje);
    $.ajax({
        url:"https://g2ea280c58733a1-dbgrupo281111.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:datosMensaje,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#descMensaje").val("");
            consultaMensaje();
            alert("se ha guardado el dato")
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
        tablaMensaje+="</tr>";
    }
    tablaMensaje+="</table>";
    $("#resultadoMensaje").append(tablaMensaje);
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        email:$("#email").val(),
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
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            consultaInfoCliente();
            alert("se ha Actualizado")
        }
    });
}