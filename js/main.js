const btnSwitch = document.querySelector("#switch");
const fecha = new Date()
// const hora = fecha.getHours()
const hora = fecha.getHours()

let changeModeDark = ()=>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('activate');
    localStorage.setItem('dark-mode', 'True');
}

let changeModeLigth = () =>{
    document.body.classList.toggle('Ligth');
    btnSwitch.classList.toggle('Ligth');
    localStorage.setItem('dark-mode', 'False');
}


if(localStorage.getItem('dark-mode') == 'True'){
    changeModeDark()
}
else if(localStorage.getItem('dark-mode') == 'False' && hora >= 19 || localStorage.getItem('dark-mode') == 'False' && hora >= 1 && hora < 7 ){    
    setTimeout(()=>{
        window.confirm("Ya es de noche \n ¿Deseas activar en modo obscuro?") ? changeModeDark() : changeModeLigth()
    },2000)
    
}

btnSwitch.addEventListener('click', () =>{
    changeModeDark()

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'True');
    }        
    else{
        localStorage.setItem('dark-mode', 'False');
    }    
})    


