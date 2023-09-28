/****************************************
 * SECTION: One-page Navigation
 ****************************************/

// JavaScript to add active class to navigation items based on scroll position
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
 let current = "";
 sections.forEach((section) => {
   const sectionTop = section.offsetTop;
   const sectionHeight = section.clientHeight;
   if (pageYOffset >= sectionTop - sectionHeight / 3) {
     current = section.getAttribute("id");
   }
 });

 navLinks.forEach((navLink) => {
   navLink.classList.remove("active");
   if (navLink.getAttribute("href").substring(1) === current) {
     navLink.classList.add("active");
   }
 });
});

/****************************************
 * SECTION: Copy HTML
 ****************************************/
async function copyHTML(el) {
    const codeEl = el.querySelector("code");
    const button = el.querySelector("button");
    const originalButtonText = button.innerText;

    // Get the HTML content as a string and decode HTML entities
    let htmlContent = codeEl ? codeEl.innerHTML : "";
    const txt = document.createElement("textarea");
    txt.innerHTML = htmlContent;
    htmlContent = txt.value;

    try {
      // Use Clipboard API to write the HTML string to clipboard
      await navigator.clipboard.writeText(htmlContent);

      // Update the button text to "Copied"
      button.innerText = "Kopieret!";

      // Reset the button text back to the original after 5 seconds
      setTimeout(() => {
        button.innerText = originalButtonText;
      }, 5000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }