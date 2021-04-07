
button =  document.getElementById('mybutton');
button.addEventListener('click', function(event){
   //  alert(event);
    event.preventDefault();
   
   

  let x = document.getElementById('weight').value;
   let y = document.getElementById('height').value;

   let z = Number(x/2.2046) / Number(y*2.54*y)
   
    document.getElementById("demo").value = z;
    if (z <= 18.5) {
        alert(z + " You are underweight")
    }else if (z > 18.5 && z <= 25){
        alert(z + " You have a normal weight")
    }else if(z > 25 && z <= 30){
        alert(z + ' You are overweight')
    }else if( z > 30){
        alert(z + ' You are obese')
    }
    else{
       alert('No BMI') 
    }
});
// 1000kg 2,204.6pods
// cm20,000 ich 7874.015748031496 