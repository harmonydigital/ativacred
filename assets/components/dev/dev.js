const body=document.getElementsByTagName('body')[0]
const msgDev=document.getElementById('dev')
 


// body.innerHTML+=`
//     <div style="
//     text-align: center;
//     margin: 60px;
// ">
//         <h1>Harmony Building...<h1>
//         <p>Aplicação em desenvolvimento...</p>
//     </div>

// `
msgDev.style.cssText='background:#00008f'

if(1===2){
msgDev.innerHTML=`
    <div style="
    text-align: center;
    margin: 0px;
    padding: 40px 0;
    color:white;
    font-size: 13px;
">
<i style="
font-size: 20px;
margin: 0 auto 10px;
" class="fa-solid fa-circle-info"></i>
        <h1 style="
        color:white;
        font-size: 14px;
        margin: 0px;
    ">Harmony Building...<h1>
        <p style="
        color:white;
        font-size: 12px;
        margin: 0px;
    ">Aplicação em desenvolvimento...</p>
    </div>

`

}