
var rIndex;

var table = document.getElementById("Table");



for(let rowIndex = 2; rowIndex < 19; rowIndex++){
  for(let cellIndex = 2; cellIndex < 5; cellIndex++){
     console.log(table.rows[rowIndex].cells[cellIndex]);
  }
}

// check the empty input
function checkEmptyInput()
{
 var isEmpty = false,
    ServerRoom = document.getElementById("ServerRoom").value,
    Temperature = document.getElementById("Temperature").value,
    Humidity= document.getElementById("Humidity").value;
   

 if(ServerRoom === ""){
    alert("Server Room cannot be empty");
    isEmpty = true;
 }else if(Temperature=== ""){
    alert("Temperature cannot be empty");
    isEmpty = true;
 }else if(Humidity === ""){
    alert("Humidity cannot be empty");
    isEmpty = true;
 }
 return isEmpty;
 }


   
function aftersubmit(){
 
  document.getElementById("ServerRoom").value ="";
  document.getElementById("Temperature").value = "";
  document.getElementById("Humidity").value = "";
  
 }

function selectedRowToInput()
{
   
   for(var i = 0; i < table.rows.length; i++)
   {
      table.rows[i].onclick = function()
      {
            // get the selected row index
            rIndex = this.rowIndex;
            document.getElementById('ServerRoom').value = this.cells[0].innerHTML;
            document.getElementById('Temperature').value = this.cells[1].innerHTML;
            document.getElementById('Humidity').value = this.cells[2].innerHTML;
          

           /* if(typeof index !== "undefined"){
               table.rows[index].classList.toggle("selected");
            }
            console.log(typeof index);
            // get the selected row index
            index = this.rowIndex;
            // add class selected to the row
            this.classList.toggle("selected");
            //console.log(typeof index);*/
           
      };
   }
   
}

// add Row
function addHtmlTableRow()
{ 
 // create a new row and cells
 // get value from input text
 // set the values into row cell's
 if(!checkEmptyInput()){
  var num_rows = table.rows.length;
  if (num_rows > 17) return;
  var newRow = table.insertRow(table.rows.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
  
    
    ServerRoom = document.getElementById("ServerRoom").value,
    Temperature = document.getElementById("Temperature").value,
    Humidity= document.getElementById("Humidity").value;
  

    cell1.innerHTML = ServerRoom;
    cell2.innerHTML = Temperature;
    cell3.innerHTML = Humidity;
   
    selectedRowToInput();
 
 }  
}

function editHtmlTbleSelectedRow()
{
  var ServerRoom = document.getElementById("ServerRoom").value,
      Temperature = document.getElementById("Temperature").value,
      Humidity= document.getElementById("Humidity").value;
      

  if(!checkEmptyInput()){
      table.rows[rIndex].cells[0].innerHTML = ServerRoom;
      table.rows[rIndex].cells[1].innerHTML = Temperature;
      table.rows[rIndex].cells[2].innerHTML = Humidity;
    
     }
}



