

document.addEventListener("DOMContentLoaded", function(event){
    let neverBeenArray = document.querySelector('#neverBeen').children;
    console.log(neverBeenArray);
    
    for(let i = 0; i<neverBeenArray.length; i++){
        neverBeenArray[i].addEventListener('click', function(event){
            console.log(neverBeenArray[i].innerText);
            const popUp = document.querySelector('#popUpInfo');
            popUp.style.display = "block";
            let info = neverBeenArray[i].children;

            //document.querySelector("#placeName").innerText = info[0].innerText;
            //document.querySelector('#address').innerText = info[1].innerText;
            //document.querySelector('#description').innerText = info[2].innerText;

            if(neverBeenArray[i].classList.contains("alert-secondary")){
                neverBeenArray[i].classList.remove('alert-secondary');
            }else{
                neverBeenArray[i].classList.add('alert-secondary');
                //class="alert alert-secondary"
            }
        });
    }
});

