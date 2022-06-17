const density = document.getElementById('rhoInput')
const viscocity = document.getElementById('mewInput')
const velocity = document.getElementById('velInput')
const diameter = document.getElementById('diaInput')
const submit = document.getElementById('submit')
const reynoldsValue = document.getElementById('reynoldsOutput')

const relationship = ()=>{
   const viscocityValue = viscocity.value;
   
   const diameterValue = diameter.value;
   
   const densityValue = density.value;
   
   const velocityValue = velocity.value;

   const reynoldsNumber = (diameterValue*densityValue*velocityValue)/(viscocityValue);
   
   reynoldsValue.append(document.createTextNode(reynoldsNumber))
   reynoldsNumber = ''
};


submit.addEventListener('click', relationship)