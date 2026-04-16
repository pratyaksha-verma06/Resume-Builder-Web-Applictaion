// Script for live preview
function linktopreview(inputId,previewId){
    const input=document.getElementById(inputId);
    const preview=document.getElementById(previewId);

    input.addEventListener("input",()=>{
       if(input.tagName==="TEXTAREA"){
        preview.innerHTML=input.value.replace("/\n\g","<br>")||" ";
       }
        else{
        preview.innerText=input.value||" ";
       } 
    });
}


linktopreview("name","p-name");
linktopreview("email","p-email");
linktopreview("contact","p-contact");
linktopreview("education","p-education");
linktopreview("skills","p-skills");
linktopreview("projects","p-projects");


