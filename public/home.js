

document.addEventListener("DOMContentLoaded", function(event){
    let neverBeenArray = document.querySelector('#neverBeen').children;
    console.log(neverBeenArray);
    
    for(let i = 0; i<neverBeenArray.length; i++){
        /*neverBeenArray[i].addEventListener('click', function(event){
            console.log(neverBeenArray[i].innerText);
            const userName = document.querySelector('#usernametext');
            let url = '/' + userName + '/' + neverBeenArray[i].innerText;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.send();
        });*/
    }
});

