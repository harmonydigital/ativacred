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

   console.log('go')  
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
                                    <a href='#' target='_blank' >Reabilita Crédito <i class="fa-solid fa-arrow-right"></i></a>
                                 </li>
                                
                              </ul>
                           </div>
                        </li>
                        <li>
                           <a href='#'>Vantagens</a>
                        </li>
                        <li>
                        <a href='#'>Passo a passo</a>
                     </li>
                     <li>
                        <a href='#'>Legislação</a>
                     </li>
                     
                        
                        
                        <li >
                            <a class='btn primary convert-btn' href="">
                                <span>Atendimento</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li >
                            <a class='btn inline' href="https://github.com/harmonydigital/harmonywebsites" target='_blank'>
                                <span>Entrar</span>
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                            </a>
                        </li>
                        <li>
                     <a href='#' style="
                     color: #516583;
                     text-transform: capitalize;
                     font-size: 11px;
                 ">Ajuda 
                     <i class="fa-regular fa-circle-question"></i>

                     </a>
                  </li>
                    </ul>
                </nav>
            </div>
            
                <div class='brand'><a href='index.html'>
                <img class='h-sm' src='assets/img/prianti-logo.png' alt='..'></a>
                <img class='h-xs' src='assets/img/logo-desk.png' alt='..'></a>
                </div>
                <div>...
                </div>
            </div>
             <div class='user-area'> 
               <div class='container-flx'>  
               <div class=''>  
                <span>Busque restrições em seu CPF.<span>
               </div>
               <div class=''>  
               <i class="fa-regular fa-user"></i>Entrar
               </div> 
               </div> 
               </div> 


               <div class='searchapi'>

         <label>
         </label>

          <div class=' '>

            <input type='' placeholder='Digite seu CPF'>
      
          </div>
      </div>

       
        </header>

        <main> 
                <div class='display'  > 
                        <div class='content-text'>
                           <h1 >Reabilite seu</h1> 
                            <span class='title'>Crédito</span>
                            <p>‘seu nome limpo sem complicações’</p>
                            <h2 >veja como é fácil reabilitar seu crédito já.</h2>
                            <a  class='btn-down' href='#about'>
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
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
                  <div class='highlights'>
                     <div class='content-text'>
                              <h2>
                              Mais <strong>vantagens</strong> para você Reativar seu <strong>Crédito</strong> 
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
                                       Reabilitação de crédito
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                 </div>   
                              </div>
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                       Reabilitação de crédito
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                 </div>   
                              </div>

                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                       Reabilitação de crédito
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                 </div>   
                              </div>
                              <div class='card'>
                                 <div class='card-header'>
                                    <img class='icon' src='assets/img/flag-icon.png'>
                                 </div>
                                 <div class='card-main'>
                                    <h5>  
                                       Reabilitação de crédito
                                    </h5>
                                    <p>
                                       Resolva e volte a comprar
                                    </p>
                                 </div>
                                 <div class='card-footer'>
                                    <button>
                                       <i class="fa-solid fa-arrow-right"></i>
                                    </button>
                                 </div>   
                              </div>
                           </div>
                     </div>
                  </div>

                  <div class='bread'>
                     <div class='content-text'>
                        <h2>Passo a passo simples para você reativar seu crédito agora..</h2>
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
                                          <h5>  
                                             Reabilitação de crédito
                                          </h5>
                                          <p>
                                             Resolva e volte a comprar
                                          </p>
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
                                             Reabilitação de crédito
                                          </h5>
                                          <p>
                                             Resolva e volte a comprar
                                          </p>
                                       </div>
                                       
                                    </div>

                                    <div class='card active'>
                                 <div class='card-header'>
                                 <div class='tooltip blue'>
                                 3
                                 </div>
                                 </div>
                                    <div class='card-main'>
                                       <h5>  
                                          Reabilitação de crédito
                                       </h5>
                                       <p>
                                          Resolva e volte a comprar
                                       </p>
                                    </div>
                                     
                                 </div>

                                 
                              </div>
                        </div>
                     </div>
                  <div class='harmonyabout' id='about' style='display:none;'>
                     <div class='container-flex'>
                           <div class='content-text'>
                           <span class='title'></span>
                           <h2>produtos
                           para pessoas,
                           como eu e você.</h2>
                           <a class='anchor btn primary convert-btn h-xs' href='#about'>
                           <span>Fale comigo</span>
                                 <i class="fa-brands fa-whatsapp"></i>
                              </a>
                           </div>

                           <div>
                              <p>Harmony se traduz na eficiente interação entre produtos e pessoas.
                              </br></br>Somos a estreita relação do homem e tecnologia, amamos criar soluções reais para tornar a vida de pessoas ainda
                              melhor.
                              </br></br>Unimos um grupo de profissionais do Design, para conversas sobre o comportamento humano e como a interação de alguns produtos podem ser tão relevantes, assim projetar novos modelos e testar novas soluções.
                              </br></br>Aqui tudo começa na relação de pessoa para pessoa, criamos uma conexão com o interlocutor e então podemos entender como o Design pode solucionar e otimizar nossa vida enquanto seres humanos.
                              Veja o que fizemos até aqui, e crie algo novo você também..</p>
                           </div>
                     
                     </div>
                  </div>
                </div>
                <div class='portfolio' id='portfolio' style="display: none;">
                <div class='text-content'>
                   <span class='title'></span>
                   <h3>Galeria Portfólio</h3>
                </div>
                <div class='tabs-portfolio'>
                   <div class="tab">
                      <button class="tablinks" onclick="openCity(event, 'apps')">Tecnologia</button>
                      <button class="tablinks" onclick="openCity(event, 'brand')">Branding</button>
                      <button class="tablinks" onclick="openCity(event, 'social')">Social Media</button>
                   </div>
                   <div id="apps" class="tabcontent">
                      <div class='slide' id='gallery'>
                         <div class="swiper tecnologia">
                            <div class="swiper-wrapper">
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>Web Site Intellectex</h4>
                                           <p>App Institucional com descrição dos serviços prestados.</p>
                                           <a class='get-site' target='_blank' href='https://intellectx.com.br/'>
                                           visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/intellectex.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>E-commerce Tudo Praela</h4>
                                           <p>Loja Woocommerce integração de pagamentos e calculo de frete.</p>
                                           <a class='get-site' target='_blank' 
                                              href='https://tudopraela.infinityfreeapp.com/'>visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/tudopraela.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>Web Site Hotel</h4>
                                           <p>app capta e armazena dados de pessoas para reservas de apartamentos na praia.</p>
                                           <a class='get-site' target='_blank' 
                                              href='https://sundaystore.infinityfreeapp.com/'>visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/modelo.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>Web Site landing page Grupo Vip</h4>
                                           <p>app capta e armazena dados de pessoas e as conecta a lista vip.</p>
                                           <a class='get-site' target='_blank' 
                                              href='https://harmonydigital.github.io/outlabs/'>visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/modelo2.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>Web Site landing page Cartão</h4>
                                           <p>app realiza cadastro de pessoas e armazena dados para cartão de crédito e envio de publicidade.</p>
                                           <a class='get-site' target='_blank' 
                                              href='https://harmonydigital.github.io/registercard/'>visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/modelo1.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>App Delivery na Praia</h4>
                                           <p>app realiza pedidos e entrega ao restaurante em tempo real na praia.</p>
                                           <a class='get-site' target='_blank' 
                                              href='https://harmonydigital.github.io/beachbar/'>visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/modelo3.png'>
                               </div>
                               <div class="swiper-slide">
                                  <div class='overlaygallery'>
                                     <div class='text-content'>
                                        <span>
                                        <i class="fa-regular fa-heart"></i>
                                        </span>
                                        <div>
                                           <h4>App ADM Pedidos na Praia</h4>
                                           <p>app gerência pedidos em tempo real, calcula mostra faturamento do dia.</p>
                                           <a class='get-site' target='_blank' href='https://harmonydigital.github.io/admbeach/'>
                                           visite este site
                                           <i class="fa-solid fa-arrow-right"></i>
                                           </a>
                                        </div>
                                        <span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                        </span>
                                     </div>
                                  </div>
                                  <img class='logo' src='assets/img/modelo4.png'>
                               </div>
                            </div>
                            <div class="swiper-pagination"></div>
                         </div>
                      </div>
                   </div>
                   <div id="brand" class="tabcontent">
                     <div class='slide' id='brand'>
                        <!-- Swipesr -->
                        <div class="swiper mySwiper">
                           <div class="swiper-wrapper">


                              <div class="swiper-slide">
                                 <div class='overlaygallery'>
                                       <div class='text-content'>
                                       <span>
                                       <i class="fa-regular fa-heart"></i>
                                       </span>
                                       <div>
                                             <h4>Branding app Quero pizza</h4>
                                             <p>WebApp Restaurante Quero Pizza delivery.</p>
                                             <a class='get-site' target='_blank' 
                                                href='https://harmonydigital.github.io/queropizza/'>visite este site
                                             <i class="fa-solid fa-arrow-right"></i>
                                             </a>
                                       </div>
                                       <span>
                                       <i class="fa-solid fa-chevron-down"></i>
                                       </span>
                                       </div>
                                    </div>
                                 <img class='logo' src='assets/img/produtos/brand/brand-queropizza.png'>
                              </div>

                              <div class="swiper-slide">
                                 <div class='overlaygallery'>
                                         <div class='text-content'>
                                         <span>
                                         <i class="fa-regular fa-heart"></i>
                                         </span>
                                         <div>
                                             <h4>Brand TUDOPRAELA.COM.BR</h4>
                                             <p>Padrões de design de marca para e-commerce Tudo pra ela.</p>
                                             <a class='get-site' target='_blank' 
                                                 href='https://tudopraela.infinityfreeapp.com/'>visite este site
                                             <i class="fa-solid fa-arrow-right"></i>
                                             </a>
                                         </div>
                                         <span>
                                         <i class="fa-solid fa-chevron-down"></i>
                                         </span>
                                         </div>
                                     </div>
                                 <img class='logo' src='assets/img/produtos/brand/sacola-tudopraela.png'>
                              </div>
         
                              <div class="swiper-slide">
                                 <div class='overlaygallery'>
                                         <div class='text-content'>
                                         <span>
                                         <i class="fa-regular fa-heart"></i>
                                         </span>
                                         <div>
                                             <h4>Brand Reservei</h4>
                                             <p>Padrões de design de marca para app de reservas.</p>
                                             <a class='get-site' target='_blank' 
                                                 href='http://sundaystore.infinityfreeapp.com/'>visite este site
                                             <i class="fa-solid fa-arrow-right"></i>
                                             </a>
                                         </div>
                                         <span>
                                         <i class="fa-solid fa-chevron-down"></i>
                                         </span>
                                         </div>
                                     </div>
                                 <img class='logo' src='assets/img/produtos/brand/brand-reservei.png'>
                              </div>
                          
                           </div>
                           <div class="swiper-pagination"></div>
                        </div>
                     </div>
                  </div>
                   <div id="social" class="tabcontent">
                      <div class='slide' id='gallery'>
                         <!-- Swipesr -->
                         <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/mentoria_cacino.png'></div>
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media.png'></div>
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media1.png'></div>
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media2.png'></div>
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media3.png'></div>
                               <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media4.png'></div>
                            </div>
                            <div class="swiper-pagination"></div>
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