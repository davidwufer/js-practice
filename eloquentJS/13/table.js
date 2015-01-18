<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<style>
/* Defines a cleaner look for tables */
table  { border-collapse: collapse; }
td, th { border: 1px solid black; padding: 3px 8px; }
th     { text-align: left; }
</style>

<script>
function buildTable(data) {
  var table = document.createElement("table");
  var headers = Object.keys(data[0]);

  function createHeaderNode() {
    var tableRow = document.createElement("tr");
    for (var index = 0; index < headers.length; index += 1) {
      var header = document.createElement("th");
      header.textContent = headers[index];
      tableRow.appendChild(header);
    }
    return tableRow;
  }

  function attachRowNodes() {
    for (var index = 0; index < data.length; index += 1) {
      var tableRow = document.createElement("tr");
      for (var key in headers) {
        var tableCol = document.createElement("td");
        console.log(data[index]);
        console.log(key);
        // Gross! clean this up
        tableCol.textContent = data[index][headers[key]];
        tableRow.appendChild(tableCol);
      }
      table.appendChild(tableRow);
    }
  }


  table.appendChild(createHeaderNode());
  attachRowNodes();

  return table;
}

document.body.appendChild(buildTable(MOUNTAINS));
</script>
