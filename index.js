// TIPOS DE SELECTORES
// $("")
// POR ID => $("#nombreId") => Agarro el elemento que tenga éste ID
// POR CLASE => $(".nombreClase") => Agarro todos los elementos con esa clase
// POR TAG => $("p") => Agarro todos los <p> // $("body") => Agarro el body

// Defino un array global
var misItems = [];

// Esta funcion se llama cada vez que clickeo el boton Agregar de mi HTML
function agregar() {
  console.log($("#todo").val());
  const inputValue = $("#todo").val();
  const listItem = $('<li class="item"></li>');

  // Punto 8.1)
  const objetoItem = {
    tarea: inputValue
  };
  // Guardo el objetoItem en el array
  misItems.push(objetoItem);
  // Punto 8.2)
  listItem.text(inputValue);
  // Asignandole el texto al LI desde el objeto
  // listItem.text(objetoItem.tarea);

  // Punto borrar item
  const botonBorrar = $("<button>Borrar</button>");
  botonBorrar.on("click", function() {
    // Borrando el list item cuando hago click en el boton borrar
    listItem.remove();
    // Borrando el objeto del array
    var index = misItems.findIndex(i => i === item);
    misItems.splice(index, 1);
  });
  // Agregando el boton al list item
  listItem.append(botonBorrar);

  // Punto checkbox
  const checkBox = $('<input type="checkbox"></input>');
  checkBox.on("click", function() {
    console.log("clickeaste el checkbox");
    // Tachando el list item cuando clickeo el checkbox
    // Tambien puedo definir una clase en un archivo css y usar listItem.addClass("nombreClase")
    listItem.css("text-decoration", "line-through");
  });
  // Agregando el checkbox al list item
  listItem.prepend(checkBox);

  // Agregar el list item a la lista
  const listaDeItems = $("#miLista");
  listaDeItems.append(listItem);
}

// Esta funcion se llama cuando clickeo el boton limpiar lista de mi HTML
function limpiarLista() {
  // Borro todos los nodos del html
  $(".item").remove();
  // Seteo mi array en vacío porque borro todos los items
  misItems = [];
  console.log("misItems", misItems);
}
