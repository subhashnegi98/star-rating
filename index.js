const star = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for(x=0;x<star.length;x++)
{
    star[x].starValue = (x+1);
    
    ["click", "mouseover", "mouseout"].forEach(function(e){
        star[x].addEventListener(e, showRating);
    });

    function showRating(e){
        let type = e.type;
        let starValue = this.starValue;

        if(type === 'click'){
            if(starValue>0){
                output.innerHTML = "you rated this picture " +starValue+ " stars.";
            }
        }
        star.forEach(function(element, index){
            if(type === 'click'){
                if(index<starValue){
                    element.classList.add('orange');
                }else{
                    element.classList.remove('orange');
                }
            }
    
            if(type === 'mouseover'){
                if(index<starValue){
                    element.classList.add('yellow');
                }else{
                    element.classList.remove('yellow');
                }
            }
    
            if(type === 'mouseout'){
                  element.classList.remove('yellow');
            }
        })
    }
    function nextPage(){
        window.location.reload();
    }
}
