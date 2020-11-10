 let count = 0;

 const value = document.getElementById('value');
 const btns = document.querySelectorAll('.btn');

 btns.forEach(function (btn){
     btn.addEventListener('click', function (event) {
         console.log(event.currentTarget);
     })
 });


