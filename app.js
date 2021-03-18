const pret=document.getElementById("pret");
const moneda=document.getElementById("moneda");
const factura=document.getElementById("valFactura");
const transport=document.getElementById("valTransport");





function calculator1(e)
{ 
    if(e.key=='Enter'){
    
      if(pret.value=="" || factura.value=="" || transport.value==""){
        alert("Trebuie completate toate casutele!")
        return
      }
    
      // var pretTotal=pret.value*moneda.value*1.19+(pret.value*(parseInt(factura.value)+parseInt(transport.value))/factura.value);

    
      var pretTotal=pret.value*(parseFloat(factura.value)+(parseFloat(transport.value)/moneda.value))/(parseFloat(factura.value))*1.19*moneda.value;

      // console.log(pretTotal.toFixed(2));
      document.getElementById("pretAcasa").value=pretTotal.toFixed(2);
      document.getElementById("pret100").value=(pretTotal*2).toFixed(2);
      document.getElementById("pret150").value=(pretTotal*2.5).toFixed(2);
      document.getElementById("pret200").value=(pretTotal*3).toFixed(2);
    }   

}
function calculator(e)
{ 
    
      if(pret.value=="" || factura.value=="" || transport.value==""){
        alert("Trebuie completate toate casutele!")
        return
      }
    
      // var pretTotal=pret.value*moneda.value*1.19+(pret.value*(parseInt(factura.value)+parseInt(transport.value))/factura.value);

    
      var pretTotal=pret.value*(parseFloat(factura.value)+(parseFloat(transport.value)/moneda.value))/(parseFloat(factura.value))*1.19*moneda.value;

      // console.log(pretTotal.toFixed(2));
      document.getElementById("pretAcasa").value=pretTotal.toFixed(2);
      document.getElementById("pret100").value=(pretTotal*2).toFixed(2);
      document.getElementById("pret150").value=(pretTotal*2.5).toFixed(2);
      document.getElementById("pret200").value=(pretTotal*3).toFixed(2);
    

}



var buton=document.getElementById("btn");
buton.addEventListener('click',calculator);

document.getElementById("valTransport").addEventListener("keypress",calculator1);
document.getElementById("pret").addEventListener("keypress",calculator1);
document.getElementById("valFactura").addEventListener("keypress",calculator1);

