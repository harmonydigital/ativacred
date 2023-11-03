var getBtn=document.querySelectorAll('.getValidation')
var contair=document.getElementById('validation')

var arrAct=Array.from(getBtn)

contair.innerHTML=`

<div class='user-area rtrt'> 
<div class='container-flx'>  
<div class=''>  
 <span>Busque restrições em seu CPF.<span>
</div>
<div onclick='toggleLogin()' class=''>  
<i class="fa-regular fa-user"></i>Entrar
</div> 
</div> 
</div> 

`
arrAct.map((dl)=>{
    dl.addEventListener('click',()=>{
         

        contair.classList.toggle('show')
    })
})