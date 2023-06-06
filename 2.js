panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click' , ()=> {
        removeaxtive()
        panel.classList.add('active');
    })
    })
function removeaxtive(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}
