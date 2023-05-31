var textarea_input = document.getElementById("textarea_input");
var textarea_output = document.getElementById("textarea_output");
var content_found = document.getElementById("found_text");
var content_not_found = document.getElementById("not_found_text");
var content_buttons = document.getElementById("content_buttons")
var main_content = document.getElementById("main_content");
var alert_copy = document.getElementById("alert");
var encripted = false;

function encriptar(){
    content_not_found.style.display = "none";
    content_buttons.style.display = "none";
    content_found.style.display = "block";
    main_content.style.gridTemplateColumns = "40% 60%";
    encripted = true;
    
    let text = textarea_input.value;
    let l = {'a':'ai', 'e':'enter', 'i':'imes', 'o':'ober', 'u':'ufat'}
    textarea_output.value = text.replace(/[aeiou]/gi,function(match) {return l[match]});
}

function desencriptar(){
    content_not_found.style.display = "none";
    content_buttons.style.display = "none";
    content_found.style.display = "block";
    main_content.style.gridTemplateColumns = "40% 60%";
    encripted = true;
    
    let text = textarea_input.value;
    let p = {'ai':'a', 'enter':'e', 'imes':'i', 'ober':'o', 'ufat':'u'};
    textarea_output.value = text.replace(/(?:ai|enter|imes|ober|ufat)/gi,function(match) {return p[match.toLowerCase()]});
}

function copy(){
    textarea_output.select(); 
    try {
        document.execCommand("copy");
        alert_copy.classList.add("alert-success");
        alert_copy.style.display = "block"
    } catch (err) {
        alert_copy.classList.add("alert-danger");
        alert_copy.style.display = "block"
    }
}

function onfocus_textarea(){
    if (encripted == true){
        content_not_found.style.display = "none";
        content_buttons.style.display = "grid";
        content_found.style.display = "block";
        main_content.style.gridTemplateColumns = "60% 40%";
        encripted = false;
    }
}

function reset(){
    let text = textarea_input.value;
    let cleanText = text.normalize("NFD").replace(/[^\w\s]/gi, '');
    textarea_input.value = cleanText.toLowerCase();

    if (textarea_input.value==""){
        content_not_found.style.display = "block";
        content_buttons.style.display = "grid";
        content_found.style.display = "none";
        alert_copy.style.display = "none"
        main_content.style.gridTemplateColumns = "60% 40%";
        encripted = false;
    }
}

function reloading(){
    textarea_input.value = "";
    textarea_output.value = "";
    alert_copy.style.display = "none"
}

textarea_input.onclick = onfocus_textarea;
setInterval(reset, 500);
