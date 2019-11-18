var press = document.querySelector("footer");

let count = 0;
press.addEventListener('click',function(){
  console.log(`click numero ${count}`);
  count += 1;
  });



var btn = document.getElementsByClassName('navbar-toggler')[0];

btn.addEventListener('click',function(){
  document.getElementById('navbarHeader').classList.toggle('collapse');
  });



var card = document.getElementsByClassName('card')[0];
var btn_edit = document.getElementsByClassName('btn-outline-secondary')[0];

btn_edit.addEventListener('click',function(){
  card.style.color = 'red';
  });


var cardi = document.getElementsByClassName('card')[1];
var btn_edit = document.getElementsByClassName('btn-outline-secondary')[1];


btn_edit.addEventListener('click',function(){
   if(cardi.style.color === 'green')
   {
      cardi.style.color = '';
   }
   else
   {
     cardi.style.color = 'green';
   }

  });


document.getElementsByTagName('header')[0].addEventListener('dblclick', function(){
  if(document.styleSheets[0].disabled === true)
  {
    document.styleSheets[0].disabled = false;
  }
  else
  {
    document.styleSheets[0].disabled = true;
  }

  });



var cardio = document.getElementsByClassName('card')[1];
var btn_edito = document.getElementsByClassName('btn-success')[1];
var toto = document.getElementsByClassName("card-text")[1].innerHTML
var canvas = document.getElementsByClassName("card-img-top")[1];

btn_edito.addEventListener('mouseover', function(){
   if (document.getElementsByClassName("card-text")[1].innerHTML !== "")
   {
    canvas.style.width = '20%';
    canvas.style.height = '20%';
    document.getElementsByClassName("card-text")[1].innerHTML = "";
   }
   else
    document.getElementsByClassName("card-text")[1].innerHTML = toto;
  });
 
