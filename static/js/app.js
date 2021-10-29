// import the data from data.js
const tableData = data;

// point our data to our HTML page, use d3 to 
//tell JavaScript to look for the <tbody> tags in the HTML
//var tbody = d3.select("tbody");
//console.log("My script is stored outside of the HTML");

// Clear existing data before adding data from data.js
function buildTable(data) {
    tbody.html ("" );
}

// loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

