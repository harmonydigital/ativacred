 
var modalconsult=document.getElementById('modalconsult')


 openConsult=()=>{

    modalconsult.innerHTML=`
    <div class="modal show" id="consultContainer"  style="display:none;z-index:999;"> 
<div class="modal-body" id="modal-body" style="top: 11.4531px; position: fixed;">
  <div class="controls">
    <button onclick="consultToggle()"><svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg><!-- <i class="fa-solid fa-chevron-left"></i> Font Awesome fontawesome.com --></button>
    <button onclick="consultToggle()"><svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg><!-- <i class="fa-solid fa-xmark"></i> Font Awesome fontawesome.com --></button>
</div>

    <div class=" ">    
    <h2><span  >Digite seu CPF</span></h2>
     
    <div class="search-consult">  
                                 <div class="input-group">
                                    <span><svg class="svg-inline--fa fa-address-card" aria-hidden="true" focusable="false" data-prefix="far" data-icon="address-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M208 256c35.35 0 64-28.65 64-64c0-35.35-28.65-64-64-64s-64 28.65-64 64C144 227.3 172.7 256 208 256zM464 232h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 232 464 232zM240 288h-64C131.8 288 96 323.8 96 368C96 376.8 103.2 384 112 384h192c8.836 0 16-7.164 16-16C320 323.8 284.2 288 240 288zM464 152h-96c-13.25 0-24 10.75-24 24s10.75 24 24 24h96c13.25 0 24-10.75 24-24S477.3 152 464 152zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16V416z"></path></svg><!-- <i class="fa-regular fa-address-card"></i> Font Awesome fontawesome.com --></span>
                                    <input style="
                                    left: 0;
                                    width: 100%;
                                    padding: 0 37px;
                                    " name="somename" e="" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" maxlength="11" placeholder="Busque seu CPF">
                                          <button><svg class="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg><!-- <i class="fa-solid fa-arrow-right"></i> Font Awesome fontawesome.com --></button>
                                   
                                 </div>
                        



                             
                           <div  class='returnMsg'> 
                           <i class="fa-solid fa-circle-info"></i> Saiba mais sobre suas restrições clicando aqui
                           </div>
                           </div>

    </div>
        
   
</div>
<div onclick="consultToggle()" class="overlay"></div>
</div>
    

    `
 }



 var btnActvConsult=document.querySelectorAll('.activeModalConsult')
 var arrBtnActv=Array.from(btnActvConsult)
 
 arrBtnActv.map((act)=>{
    act.addEventListener('click',()=>{
        openConsult()
     })
 })





 consultToggle=()=>{
 

    document.getElementById('consultContainer').classList.toggle('show')
 }


