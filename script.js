
let btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.onclick = encriptarTexto; 

let btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.onclick = desencriptarTexto; 

let btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copiarTextoEncriptado_Desencriptado;

document.getElementById("textoIngresado").select();


btnEncriptar.onmouseenter = animacionBtnEncriptar;
btnEncriptar.onmouseleave = resetAnimacionBtnEncriptar;

function animacionBtnEncriptar(){
    document.getElementById("btnEncriptar").style.background="#4070ab";
    document.getElementById("textoEncriptar").style.fontSize="20px";
    document.getElementById("btnEncriptar").style.border="3px solid #AAAAAA";
}
function resetAnimacionBtnEncriptar() {
    document.getElementById("btnEncriptar").style.background="#0A3871";
    document.getElementById("textoEncriptar").style.fontSize="18px";
    document.getElementById("btnEncriptar").style.border="2px solid #000000";
}

btnDesencriptar.onmouseenter = animacionBtnDesencriptar;
btnDesencriptar.onmouseleave = resetAnimacionBtnDesencriptar;

function animacionBtnDesencriptar(){
    document.getElementById("btnDesencriptar").style.background="#FFFFFF";
    document.getElementById("textoDesencriptar").style.fontSize="20px";
    document.getElementById("btnDesencriptar").style.border="3px solid #0A3871";
}

function resetAnimacionBtnDesencriptar() {
    document.getElementById("btnDesencriptar").style.background="#D8DFE8";
    document.getElementById("textoDesencriptar").style.fontSize="18px";
    document.getElementById("btnDesencriptar").style.border="2px solid #0A3871";
}

btnCopiar.onmouseenter = animacionBtnCopiar;
btnCopiar.onmouseleave = resetAnimacionBtnCopiar;

function animacionBtnCopiar(){
    document.getElementById("btnCopiar").style.background="#FFFFFF";
    document.getElementById("textoCopiar").style.fontSize="20px";
    document.getElementById("btnCopiar").style.border="3px solid #0A3871";
}

function resetAnimacionBtnCopiar() {
    document.getElementById("btnCopiar").style.background="#D8DFE8";
    document.getElementById("textoCopiar").style.fontSize="18px";
    document.getElementById("btnCopiar").style.border="2px solid #0A3871";
}


let textoIngresado = "";
let textoEncriptado = "";
let textoDesencriptado = "";




function ocultarMunieco() {
    document.getElementById("sinTextoEncriptado").style.visibility = "hidden";
}

function mostrarTextoEncriptado() {
    document.getElementById("textoEncriptado").innerHTML =  textoEncriptado;
   
}

function encriptarTexto() {
    
    
    textoEncriptado = "";
    textoIngresado = document.querySelector(".IngresarTexto").value;

    ocultarMunieco();

    

    for (let i in textoIngresado) {

        switch (textoIngresado[i]) {
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break
            case "i":
                textoEncriptado += "imes";
                break
            case "o":
                textoEncriptado += "ober";
                break
            case "u":
                textoEncriptado += "ufat";
                break;
        
            default:
                textoEncriptado += textoIngresado[i];
                break;
        }
    }

    mostrarTextoEncriptado();
}

function mostrarTextoDesencriptado() {
    document.getElementById("textoEncriptado").innerHTML = textoDesencriptado;
   
}



function desencriptarTexto() {
    
    textoDesencriptado = "";
    textoEncriptado = document.querySelector(".IngresarTexto").value;

    ocultarMunieco();


    for (let i= 0; i< textoEncriptado.length; i++) {

        switch  (textoEncriptado[i]) {
            case "a":
                textoDesencriptado += "a";
                i += 1;
                break;
            case "e":
                textoDesencriptado += "e";
                i += 4;
                break
            case "i":
                textoDesencriptado += "i";
                i += 3;
                break
            case "o":
                textoDesencriptado += "o";
                i += 3;
                break
            case "u":
                textoDesencriptado += "u";
                i += 3;
                break;
        
            default:
                textoDesencriptado +=   textoEncriptado.charAt(i);
                break;
        }
    }


    mostrarTextoDesencriptado();


}

function copiarTextoEncriptado_Desencriptado(){
    var copiarTexto = document.getElementById("textoEncriptado");
    copiarTexto.select();
    document.execCommand("copy");
}

