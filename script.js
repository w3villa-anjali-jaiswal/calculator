let result = document.getElementById('result'); 
buttons = document.querySelectorAll('button');
let screenValue = ''; 
 
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText)
        if(buttonText == 'C'){
            screenValue = "";
            result.value = screenValue;  
        }
        else if(buttonText == '='){
            result.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            result.value = screenValue;
        }
    })

}
