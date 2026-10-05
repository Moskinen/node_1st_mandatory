const year = new Date().getFullYear();

const copyrightParagraph = document.getElementById('footer-copyright')
copyrightParagraph.textContent = "© " + year;