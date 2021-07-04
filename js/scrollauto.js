
function scrollearA(el,event){
    event.preventDefault();
    console.log()

    if(el.innerHTML==="Solución"){
        sol=document.querySelector(".quality__center",".center")
        sol.scrollIntoView({block: "start", behavior: "smooth"});
    }
    else if(el.innerHTML==="Funcionalidades"){
        sol=document.querySelector(".design")
        sol.scrollIntoView({block: "start", behavior: "smooth"});
    }
    else if (el.innerHTML==="Contacto"){
        sol=document.querySelector("#contactus")
        sol.scrollIntoView({block: "start", behavior: "smooth"});
    }
    
}
