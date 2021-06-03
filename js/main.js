

/* function add() {
    var value = document.getElementById("initial_value").value;
    var updated_value = document.getElementById("updated_value").value;
//    const val = parseInt(document.getElementById("updated_value").value);
    final_value = number(updated_value * 1);
    document.getElementById("updated_value").innerHTML = final_value;
}


function incrementValue()
{
    var value = parseInt(document.getElementById('initial_value').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('updated_value').value = value;
}
*/
var i = 0;
//const i = parseInt(document.querySelector('input.initial_value').value, 10);

   function add1() {
       document.getElementById('initial_value').value = ++i;
       document.getElementById("updated_value").innerHTML = ++i;
   }

   function sub1() {
       document.getElementById('initial_value').value = --i;
       document.getElementById("updated_value").innerHTML = --i;
   }
