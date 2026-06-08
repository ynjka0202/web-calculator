const display = document.getElementById('display');
function appendValue(value ){
    if(value=='.'){
        if(display.value.includes('.')){
            return;
        }
    }
    if(display.value === '0'&&value!== '.'){
        display.value = value;
    }
    else{

        display.value += value;
    }
}