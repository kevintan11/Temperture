


function exportReportToExcel() {
  
   let table = document.getElementsByTagName("table"); 
    TableToExcel.convert(table[0], { 
        name: `ddmmyyyy-hhmmssAM/PM.xlsx`, 
        sheet: {
        name: 'Sheet 1' 
      }
      
    });
      }
