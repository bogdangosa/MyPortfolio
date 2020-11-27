const Header = document.getElementById("Header");

window.addEventListener("scroll",()=>{
    let scrolPosition = window.scrollY;
    if(scrolPosition==0)
        Header.classList.remove("transparent");
    else
        Header.classList.add("transparent");
    //sconsole.log(scrolPosition);
})