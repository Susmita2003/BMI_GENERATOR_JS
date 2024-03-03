const form = document.querySelector('form')

//here it gives empty values so we use this into the form
// const height = parseInt[document.querySelector('#height').value]  
// const weight = parseInt[document.querySelector('#weight').value]

//use preventDefault() methods for preventing default action->(means after submission height and weight value goes to server)but we don't want to give the value to server.
form.addEventListener('submit', function(e){
     e.preventDefault()
      
     const height = parseInt(document.querySelector('#height').value)  //parseInt use-->to get the string values to int values
     const weight = parseInt(document.querySelector('#weight').value)
     const results = document.querySelector('#results');

     if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML= `plz give a valid height ${height}`;
     }
      else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML= `plz give a valid weight ${weight}`;
     }
     else{
        const bmi=(weight / ((height * height)/10000)).toFixed(2);

        //display the result
        results.innerHTML=`<span>${bmi}</span>`;

        //based on results  the bmi value is underweight / overweight / normal weight -->
        //homework
     }
});
