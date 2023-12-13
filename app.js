(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    let openedParentheses = 0;

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
           
            if(value === 'C'){
                screen.value = '';
            }else if(value === '+/-'){
                screen.value = parseFloat(screen.value) * -1;
            }else if( value === '%' ) {
                screen.value = parseFloat(screen.value) / 100;
            }else if(value ==='()'){
                if(openedParentheses % 2 === 0 ){
                    screen.value += '(';
                }else{
                    screen.value += ')';
                }
                openedParentheses++;
            }else{
                screen.value +=value;
            }
        });
    });
            equal.addEventListener('click',function(e){
                if(screen.value === ''){
                    screen.value = 'Please enter';
                }else{
                    let aswer = eval(screen.value);
                    screen.value = aswer;
                }
            });
            clear.addEventListener('click',function(e){
                screen.value = '';
                openedParentheses = 0;
            });
            })();