(function(){
    let screen=document.querySelector('.screen');
    let button=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');
    let clear=document.querySelector('.btn-clear');

    button.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;

        });
    });

    equal.addEventListener("click", (e) => {
        if(screen.value==''){
            screen.value="Please Enter"
        }
        else{
            let answer =eval(screen.value)
            screen.value=answer;
        }
        
    })

    clear.addEventListener('click', function(e){
        screen.value="";
    });

})();
