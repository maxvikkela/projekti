
    function listaus(){
       
        var vari = document.forms[0]["task"]
        if(document.getElementById("task").value == ""){
            vari.style.borderColor = "Red"
            alert("You have to write something!")
        } else {
            var tehtava = document.getElementById("task").value;
            var lista = document.getElementById("myList");
            vari.style = "none"
            lista.innerHTML += "<li>"+tehtava+ '\t'+ "<button id='poisto' onclick='poistaTehtava()' >X</button></li>";

        }

    }
    //Funktio, jolla pystyy tyhjentämään koko listan sisällön.
    function clear(){
        var lista = document.getElementById("myList");
        lista.removeChild(lista.childNodes[0]);
        
    }
    //Funktio, jolla voi poistaa yksittäisen merkinnän listasta.
    function poistaTehtava(){
        event.currentTarget.parentElement.remove();
    }
