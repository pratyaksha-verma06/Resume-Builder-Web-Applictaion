// Script for live preview
function linktopreview(inputId,previewId){
    const input=document.getElementById(inputId);
    const preview=document.getElementById(previewId);

    input.addEventListener("input",()=>{
       if(input.tagName==="TEXTAREA"){
        preview.innerHTML = input.value.replace(/\n/g, "<br>") || " ";
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


// Reset Button 
const reset=document.querySelector("#resetbtn");

function resetPreview(){
    const reset_clmn={
         "p-name": "Your Name",
        "p-email": "Email",
        "p-contact": "Phone",
        "p-education": "",
        "p-skills": "",
        "p-projects": ""
    };
    for (let id in reset_clmn) {
    document.getElementById(id).innerText = reset_clmn[id];
    }
};

reset.addEventListener("click",resetPreview);


// download PDF
async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const element = document.querySelector("#resume-content");

    const canvas = await html2canvas(element, {
        scale: 2 
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; 
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
}

const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", downloadPDF);
