var GoogleSpreadsheet = require("google-spreadsheet");
var creds = require("./client_secret.json");
// Cree un objeto de documento utilizando el ID de la hoja de cálculo, obtenido de su URL.
var doc = new GoogleSpreadsheet("1qZ6TFxyi_cl0jWc-lzMMSBIpeftEfNqgdCDCl2XMWnw");
// Autentíquese con la API de Google Spreadsheets.
doc.useServiceAccountAuth(creds, function(err) {
  // Obtener todas las filas de la hoja de cálculo.
 
  doc.getRows(1, function(err, rows) {
    console.log(rows);
    console.log(rows.length);
  });
  doc.addRow(1, { last_name: "Elias", first_name: "Alveal" }, function(err) {
    if (err) {
      console.log(err);
    }
  }); 

 
});
