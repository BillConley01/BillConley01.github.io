
document.addEventListener("DOMContentLoaded", function(){
    var tabList = [].slice.call(document.querySelectorAll(".navigation-list a:not(.dropdown-toggle)"));
    tabList.forEach(element =>{
       let elementID = element.getAttribute('href');
       let pageLink = elementID.substring(1);
       let page = document.getElementById(pageLink);
       if(pageLink !=="home"){
        page.classList.remove('show');
        element.classList.remove('active');
       }
        element.addEventListener("click", function(event){
            event.preventDefault();
            tabList.forEach(item =>{
                let otherLink = item.getAttribute('href').substring(1);
                if(otherLink !== pageLink){
                    page = document.getElementById(otherLink);
                    item.classList.remove('active');
                    page.classList.remove('active');
                    page.classList.remove('show');
                }
                else  {
                    element.classList.add('active');
                    page = document.getElementById(otherLink);
                    page.classList.add('show');
                    page.classList.add('active');
                }
            });
        });
    });
});

window.addEventListener('load', function(){
const template = document.querySelector('link[rel="import"]').getElementsByTagName("template")[0];
    if(template){
        console.log("link not null " + template);
    }
const data = document.getElementById('template-container')
data.appendChild(template.cloneNode());
       }, false);
    
