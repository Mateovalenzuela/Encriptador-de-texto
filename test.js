
let textoDesencriptado = "";
let textoEncriptado = "maitenterober";

function desencriptarTexto() {
    
    textoDesencriptado = "";
    //textoEncriptado = document.querySelector(".texto-encriptado").value;


    for (let i in textoEncriptado) {

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

    console.log(textoDesencriptado)
    //mostrarTextoDesencriptado();


}