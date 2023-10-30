



var btnMOdal=document.querySelectorAll('.activeModalPage') 
var arrBtn=Array.from(btnMOdal)
  




var modalpagcontain=document.getElementById('modalpagcontain') 
var modl=`   

<div class="modal " id="mpag"  style="display:none;z-index:999;"> 
<div class="modal-body" id="modal-body" style="top: 11.4531px; position: fixed;">
  <div class="controls">
    <button onclick="toggleModalPag()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
    <button onclick="toggleModalPag()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>
</div>

    <div class=" ">    
    <h2> Pagina <span id='namePage'></span></h2>
    <p>..</p>

    </div>
        
   
</div>
<div onclick="toggleModalPag()" class="overlay"></div>
</div>
` 
  
modalpagcontain.innerHTML+=modl

toggleModalPag=()=>{
    document.getElementById('mpag').classList.toggle('show')

}
namePage=document.getElementById('namePage')

arrBtn.map( (th)=>{
 

    th.addEventListener('click',function(e){
         
        document.getElementById('mpag').classList.toggle('show')

        namePage.innerHTML=e.target.getAttribute('name')
    })
})




var btnConvert=btnGetMsg=document.querySelectorAll('.convert-btn') 
const arr = Array.from(btnConvert);
const modal=document.getElementById('modal')
const modalBody=document.getElementById('modal-body')

var mousePos = {};


toggleModal=()=>{
    modal.classList.toggle('show')
  

    // modal.style.left = mousePos.x + "px"; // set the modal position to the last stored position
     modalBody.style.top = mousePos.y + "px";
     modalBody.style.position = "fixed";
}
arr.map((el)=>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()   
        var rect = e.target.getBoundingClientRect(); // get some poition, scale,... properties of the item
        mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
        mousePos.y = e.clientY - rect.top;
      

        return toggleModal()
        
    })
})


 