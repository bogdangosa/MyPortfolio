const Header = document.getElementById("Header");

window.addEventListener("scroll",()=>{
    let scrolPosition = window.scrollY;
    if(scrolPosition==0)
        Header.classList.remove("transparent");
    else
        Header.classList.add("transparent");
    //sconsole.log(scrolPosition);
})


const Hamburger = document.getElementById("Hamburger");
const Nav = document.getElementById("Nav");

Hamburger.addEventListener("click",()=>{
    Nav.classList.toggle("Show");
    Hamburger.classList.toggle("Change");
})


window.addEventListener('load',()=>{

    let IntersectionObserverFade = new IntersectionObserver(Entries=>{
        Entries.forEach(Entrie => {
            if(Entrie.isIntersecting){
                setTimeout(()=>{
                    Entrie.target.classList.add('FadeInAnimationFinal');
                },100);
                IntersectionObserverFade.unobserve(Entrie.target);
            }
        });
    });

    document.querySelectorAll('.FadeInAnimation').forEach(element =>{
        IntersectionObserverFade.observe(element);
    });

    //console.log(window.outerHeight/5);

    const NavOptions = {
        rootMargin: `${-window.outerHeight/5}px`
    }

    const NavLinks = document.querySelectorAll('.nav-link');
    let IntersectionObserverNav = new IntersectionObserver(Entries=>{
        Entries.forEach(entrie=>{
            if(entrie.isIntersecting){
                NavLinks.forEach(navlink=>{
                    navlink.classList.remove('active');
                })
                
                if(entrie.target.classList.contains('Home'))
                    NavLinks[0].classList.add('active');
                
                if(entrie.target.classList.contains('About'))
                    NavLinks[1].classList.add('active');

                if(entrie.target.classList.contains('Work'))
                    NavLinks[2].classList.add('active');

                if(entrie.target.classList.contains('Contact'))
                    NavLinks[3].classList.add('active');

                console.log(entrie.target);


            }
        });
    },NavOptions);

    const Sections = document.querySelectorAll('.section');
    Sections.forEach(section=>{
        IntersectionObserverNav.observe(section);
    });

})