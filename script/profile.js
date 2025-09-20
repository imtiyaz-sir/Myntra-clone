const numberBox = document.querySelector('.number_box');
  numberBox.addEventListener('input', () => {
    // allow only digits
    numberBox.value = numberBox.value.replace(/[^0-9]/g, '');
    // limit to 10 digits
    if (numberBox.value.length > 10) {
      numberBox.value = numberBox.value.slice(0, 10);
    }
  });
  const check= document.querySelector('#checkbox');
  check.addEventListener("change",() => {
    const continue_btn =document.querySelector('.cnt-btn');
    if(check.checked){
    continue_btn.style.backgroundColor='rgb(255, 63, 108)';}
    else{
continue_btn.style.backgroundColor='';
    }
    
  });
  