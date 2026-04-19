checkAuth();
function linktopreview(inputId, previewId){
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    input.addEventListener("input", () => {

        if (input.tagName === "TEXTAREA") {
            const lines = input.value.split("\n");

            preview.innerHTML = lines
                .map(line => line.trim() ? `• ${line}` : "")
                .join("<br>");

        } else {
            preview.innerText = input.value || "—";
        }
    });
}

//  LINKING 
linktopreview("name","p-name");
linktopreview("email","p-email");
linktopreview("contact","p-contact");
linktopreview("education","p-education");
linktopreview("skills","p-skills");
linktopreview("project","p-project");
linktopreview("certification","p-certification");

//  RESET 
document.getElementById("resetbtn").addEventListener("click", () => {
    const defaults = {
        "p-name": "Your Name",
        "p-email": "Email",
        "p-contact": "Phone",
        "p-education": "",
        "p-skills": "",
        "p-projects": "",
        "p-certification": "",
    };

    for (let id in defaults) {
        document.getElementById(id).innerText = defaults[id];
    }
});

// DOWNLOAD PDF 
async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const element = document.getElementById("resume-content");

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
}

document.getElementById("downloadBtn")
    .addEventListener("click", downloadPDF);