

   const sub = document.querySelector("[data-action='increment']");
   const add = document.querySelector("[data-action='decrement']");
 
  
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  sub.addEventListener('click', increment);
  add.addEventListener('click', decrement);