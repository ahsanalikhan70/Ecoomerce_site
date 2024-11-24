
const hamberger = document.getElementById('hamberger');
const menu = document.getElementById('menu');
const close = document.getElementById('close');


if(hamberger){
    hamberger.addEventListener('click' , (e)=>{
        e.preventDefault();
        menu.classList.add('newclass');
    })
}

if(close){
    close.addEventListener('click' , (e)=>{
        e.preventDefault();
        menu.classList.remove('newclass');
    })
}



// CART JS



function addRow() {
    // Reference to the table body
    var tableBody = document.getElementById("table-body");

    // Create a new row
    var newRow = document.createElement("tr");

    // Create cells for the row
    var productCell = document.createElement("td");
    var priceCell = document.createElement("td");
    var quantityCell = document.createElement("td");
    var subtotalCell = document.createElement("td");

    // Set the content for each cell
    productCell.textContent = "New Product";
    priceCell.textContent = "$15";
    quantityCell.innerHTML = '<input type="number" value="1" min="1">';
    subtotalCell.textContent = "$15";

    // Append cells to the row
    newRow.appendChild(productCell);
    newRow.appendChild(priceCell);
    newRow.appendChild(quantityCell);
    newRow.appendChild(subtotalCell);

    // Append the row to the table body
    tableBody.appendChild(newRow);
}