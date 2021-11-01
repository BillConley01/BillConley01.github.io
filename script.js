
document.addEventListener("DOMContentLoaded", function(){
    var tabList = [].slice.call(document.querySelectorAll(".navigation-list a:not(.dropdown-toggle)"));
    tabList.forEach(element =>{
       let elementID = element.getAttribute('href');
       let pageLink = elementID.substring(1);
       let page = document.getElementById(pageLink);
       if(pageLink !=="home"){
        page.classList.remove('show');
        element.classList.remove('active');
        console.log("other");
       }
       else console.log("home");
        element.addEventListener("click", function(event){
            console.log(pageLink);
            event.preventDefault();
            tabList.forEach(item =>{
                let otherLink = item.getAttribute('href').substring(1);
                if(otherLink !== pageLink){
                    page = document.getElementById(otherLink);
                    console.log("removing classes from " + otherLink);
                    item.classList.remove('active');
                    page.classList.remove('active');
                    page.classList.remove('show');
                }
                else  {
                    console.log("adding classes to " + otherLink);
                    element.classList.add('active');
                    page = document.getElementById(otherLink);
                    page.classList.add('show');
                    page.classList.add('active');
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){
const link = document.querySelector('README.md');
// Clone the <template> in the import.
const template = link.import.querySelector('template');
const clone = document.importNode(template.content, true);
document.querySelector('#container').appendChild(clone);
});
