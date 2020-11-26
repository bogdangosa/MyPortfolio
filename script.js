const Header = document.getElementById("Header");

window.addEventListener("scroll",()=>{
    let scrolPosition = window.scrollY;
    if(scrolPosition==0)
        Header.classList.remove("ceva");
    else
        Header.classList.add("ceva");
    console.log(scrolPosition);
})