var array =[ 'a','b','c'] ;
array.forEach(function(element){
    console.log(element);
});
  
  $(document).ready(function () { 
    const inputs= document.querySelectorAll('input.control');
    console.log(inputs);
    inputs.forEach(inputs => inputs.addEventListener('change',handleUpdate));
    inputs.forEach(inputs => inputs.addEventListener('mousemove' , handleUpdate));
   });
    
  function handleUpdate (){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix);
  };
  
     
         
      