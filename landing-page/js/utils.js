function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}

//usage:
readTextFile("../data/carrers.json", function (text) {
  var data = JSON.parse(text);

  const carrera = document.getElementById('carrera')

  for (let index = 0; index < data.programas.length; index++) {
    const element = data.programas[index];
    op = document.createElement('option');
    op.textContent = element.nombre;
    carrera.appendChild(op);


  }
  const ca = document.getElementById('carrera2')
  for (let index = 0; index < data.programas.length; index++) {
    const element = data.programas[index];
    op = document.createElement('option');
    op.textContent = element.nombre;
    ca.appendChild(op);


  }

});

readTextFile("../data/uni.json", function (text) {
  var data = JSON.parse(text);
  const univ = document.getElementById('universidad')

  for (let index = 0; index < data.universidades.length; index++) {
    const element = data.universidades[index];
    op = document.createElement('option');
    op.textContent = element.nombre;
    univ.appendChild(op);

  }
  document.querySelector(`#guritoForm`).style.cssText = 'backface-visibility: hidden; -webkit-backface-visibility:hidden;';
  document.querySelector(`#guruhForm`).style.cssText = 'backface-visibility: hidden; -webkit-backface-visibility:hidden;';
});