const app = document.getElementById('app')
relogio=()=>{
    containerDate=document.getElementById('relogio')
    const data=new Date()
    let hr=data.getHours()
    let mn=data.getMinutes()
    let ms=data.getSeconds()


    let horaatual=hr+":"+mn+":"+ms
    // console.log(horaatual)

    if(containerDate){
        containerDate.innerHTML=`<h5>Horário de Brasília `+horaatual+`</h5>`
    }

    return horaatual
}  
gotop=()=>{

 
   window.scrollTo(0, 0);
}
initapp=()=>{
    app.innerHTML=`
        <header  id="top">

      

        <div   class="container-flx">
            <div class='menu'>
            <button onclick='menutoggleMenu()' class='btn-menu'>
             
            <img class='logo' src='assets/img/menu-bar.png' alt='..'>
            </button>
                <nav>
                    <div class='controls' onclick='closeMenu()' >
                        <button>
                        <svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>
                        </button>
                        <button onclick='closeMenu()' >
                        <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg>
                        </button>
                    </div>
                    <ul>
                       
                        <li class='iten-dropdown' >
                           <a href=' javascript:void(0)'>Serviços</a>
                           <div class='dropdown'>
                              <ul>
                               
                                 <li>
                                    <a href='#contact' class='getValidation'  target='_blank' >Consulta CPF Serasa<i class="fa-solid fa-arrow-right"></i></a>
                                 </li>
                                 <li>
                                  <a href='https://protestosp.com.br/' target='_blank' >Consulta CPF Cartório<i class="fa-solid fa-arrow-right"></i></a>
                                  </li>
                                  <li>
                                  <a href='https://sistema.fenixconsultas.com.br/login'    target='_blank' > Consulta do BACEN<i class="fa-solid fa-arrow-right"></i></a>
                               </li>
                               
                                
                              </ul>
                           </div>
                        </li>
                        <li>
                           <a href='#benfits'>Vantagens</a>
                        </li>
                        <li>
                        <a href='#steps'>Passo a passo</a>
                     </li>
                  
                     <li class='iten-dropdown' >
                     <a href=' javascript:void(0)'>Entenda seus direitos</a>
                     <div class='dropdown'>
                        <ul>
                        
                   
                           <li>
                              <a href='https://legislacao.presidencia.gov.br/atos/?tipo=LEI&numero=4595&ano=1964&ato=840QTVU9UNVRVTf4c' target='_blank' >Lei nº 4.595 <i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm' target='_blank' >Lei nº 8.078<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp105.htm' target='_blank' >Lei Complementar Nº 105<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                            <li> 
                              <a href='https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#:~:text=43.,sobre%20as%20suas%20respectivas%20fontes' target='_blank' >Artigo 43 da LEI Nº 8.078<i class="fa-solid fa-arrow-right"></i></a>
                           </li>
                           <li>
                           <a href='https://lgpd-brasil.info/capitulo_06/artigo_42' target='_blank' >ARTIGO 42 DA LEI LGPD <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                          
                        </ul>
                     </div>
                  </li>
                     
                        
                        
                        <li >
                            <a class='btn primary convert-btn' href="">
                                <span>Atendimento</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li >
                            <div class='btn inline ' onclick='toggleLogin()' target='_blank'>
                                <span>Entrar</span>
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            </div>
                        </li>
                        <li>
                           <button name='ajuda' class='activeModalPage' style="
                              color: #516583;
                              text-transform: capitalize;
                              font-size: 11px;
                                 ">Ajuda 
                              <i class="fa-regular fa-circle-question"></i>
                           </button>
                        </li>
                    </ul>
                </nav>
            </div>
            
                <div class='brand'><a href='index.html'>
                <img class='h-sm' src='assets/img/prianti-logo.png' alt='..'></a>
                <img class='h-xs' src='assets/img/logo-desk.png' alt='..'></a>
                </div>
                <div style=" display: flex;  align-items: center;  margin: 20px;">
                  
                <a class='activeModalPage' name='ajuda' href='#contact'>
                ?

               </a>

                   
                  </span>
                </div>
            </div>
             <div class='user-area'> 
               <div class='container-flx'>  
               <div class=''>  
                <span>Busque restrições em seu CPF.<span>
               </div>
               <div onclick='toggleLogin()' class=''>  
               <i class="fa-regular fa-user"></i>Entrar
               </div> 
               </div> 
               </div> 


               <div class='searchapi'>

         <label>
         </label>

          <div class='input-group' class='  position: relative; '>
            <span><i class="fa-regular fa-address-card"></i></span>
            <input style="
            position: absolute;
            left: 0;
            width: 96%;
        " name="somename"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        type = "number"
        maxlength = "11" placeholder='Busque seu CPF'>
            <button><i class="fa-solid fa-arrow-right"></i></button>

          </div>
      </div>

       
        </header>

        <main id='main'> 
                <div class='display'  > 
                        <div class='content-text'>
                           <h1 >Limpe seu</h1> 
                            <span class='title'>Nome</span>
                            <p>pague debitos depois.</p>
                            
                        </div>
                        <div class='content-consult'>
                         
                           <div class='search-consult'>
                                 <label>Encontre possiveis restriçõs</label>
                                 <div class='input-group' class='  position: relative; '>
                                    <span><i class="fa-regular fa-address-card"></i></span>
                                    <input style="
                                    left: 0;
                                    width: 100%;
                                    padding: 0 37px;
                                    " name="somename"
                              e     oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    type = "number"
                                    maxlength = "11" placeholder='Busque seu CPF'>
                                          <button><i class="fa-solid fa-arrow-right"></i></button>
                                   
                                 </div>
                        



                             
                           </div>
                        </div>
                        <div class='social'>
                            <a class='' href='#'  target="_blank">    
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            
                            <a class='' href="#" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                            </a>
                            
                        </div>


                </div>
                  <div id='benfits' class='highlights'>
                     <div class='content-text'>
                              <h2>
                              Conheça <strong>vantagens</strong> para você Reativar seu <strong>Crédito</strong> 
                              e voltar a investir.</h2>
                     
                           </div>
                     <div class='container'>
                        <div>
                           <img class='persona' src='assets/img/persona2.png'>
                        </div>
                        
                           <div class='card-container'>
                              <div class='card active'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/$.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    
                                    Reabilitar seu crédito e voltar a fazer negócios.
                                    </h5>
                                    <p>
                                    Finanças estruturadas.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                    <i class="fa-regular fa-circle-check"></i>
                                    </button>
                                 </div>   
                              </div>
                              
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-confianc.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Processos confiáveis e transparentes.
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                      <i class="fa-regular fa-circle-check"></i>
                                    </button>
                                 </div>   
                              </div>

                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-grafic.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Aumento da pontuação do Score de crédito.
                                    </h5>
                                    <p>
                                    Acelere seu negócio.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-regular fa-circle-check"></i>

                                    </button>
                                 </div>   
                              </div>
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon-fil.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                    Operação 100% humanizada.
                                    </h5>
                                    <p>
                                    Consultamos suas dívidas.
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                    <i class="fa-regular fa-circle-check"></i>

                                    </button>
                                 </div>   
                              </div>
                           </div>
                     </div>
                  </div>

                  <div id='steps' class='bread'>
                     <div class='content-text'>
                        <h2>Passo a passo <strong>simples</strong> para você reativar seu crédito agora..</h2>
                     </div>
 
                     <div class='container'>
                        <div>
                           <img class='icon' src='assets/img/persona.png'>
                        </div>
                          
                              <div class='card-container'>
                                 
                              <div class='card'>
                                       <div class='card-header'>
                                       <div class='tooltip blue'>
                                       1
                                       </div>
                                       </div>
                                       <div class='card-main'>
                                          <div class='title-flex'   > 
                                             <h5>  
                                             Busque pelo seu CPF
                                             </h5>
                                          </div>

                                         
                                          <button class='btn circle'>
                                          <i class="fa-solid fa-arrow-right"></i>
                                          </button>

 


                                       </div>
                                       
                                    </div>      
                              
                              <div class='card'>
                                       <div class='card-header'>
                                       <div class='tooltip blue'>
                                       2
                                       </div>
                                       </div>
                                       <div class='card-main'>
                                          <h5>  
                                          Entenda sua dívida
                                          </h5>
                                          <p>
                                          Equipe pronta para ajuda.
                                          </p>
                                       </div>
                                       
                                    </div>
                                    <div class='card'>
                                    <div class='card-header'>
                                    <div class='tooltip blue'>
                                    3
                                    </div>
                                    </div>
                                    <div class='card-main'>
                                       <h5>  
                                       Leia o contrato e entenda o processo
                                       </h5>
                                       <p>
                                       <a hred='arquivo.pdf' target='_blank'>Clique </a> e faça download do pdf
                                       </p>
                                    </div>
                                    
                                 </div>      
                           
                                    <div class='card active'>
                                 <div class='card-header'>
                                 <div class='tooltip blue'>
                                 4
                                 </div>
                                 </div>
                                    <div class='card-main'>
                                       <h5>  
                                          Pronto! Clique para suporte
                                       </h5>
                                       <p>
                                       Simples e rápido
                                       </p>
                                    </div>
                                     
                                 </div>

                                 
                              </div>
                        </div>
                     </div>
                   </div>
                </div>

                



               



 
 
                    
               </div>
        </main>

    `
   
}   
gotop()
app ? initapp() : console.log('err')