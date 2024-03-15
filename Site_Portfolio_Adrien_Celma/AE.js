function basculeMenu() {
    var element = document.getElementById("div_navigation");
    // on regarde si la class 'show' existe 
    if (element.classList.contains('show')==true)
        element.setAttribute("class", "div-navigation hide");
    else
        element.setAttribute("class", "div-navigation show");

    var titre = document.getElementById("div_titre");
    if(titre != null)
    {
        if(titre.classList.contains("show"))
            titre.setAttribute("class","hide centre");
        else
            titre.setAttribute("class","show centre");

    }
}

 /* Pour la page Contact */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
