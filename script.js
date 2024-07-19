const navLinkEls = document.querySelectorAll('.nav-link');
const sectionEls = document.querySelectorAll('.section');


//Nav 
let currentSection = 'about';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if(window.scrollY >= sectionEl.offsetTop){
            currentSection = sectionEl.id;
        }
    })

    navLinkEls.forEach(navLinkEL => {
        if(navLinkEL.href.includes(currentSection)){
            navLinkEL.classList.add('active');
            navLinkEL.childNodes[1].style.width = "50px";
            // navLinkEL.childNodes[1].style.backgroundColor = "rgb(226 232 240)";
        }
        if(navLinkEL.href.includes(!currentSection)){
            navLinkEL.classList.remove('active');
            navLinkEL.childNodes[1].style.width = "2rem";
            // navLinkEL.childNodes[1].style.backgroundColor = "rgb(226 232 240)";
        }
    })
});

//Cursor Animation
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX -125;
  let y = e.pageY -125;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
});

document.addEventListener("mouseout", () => {
  cursor.computedStyleMap.display = "none";
})