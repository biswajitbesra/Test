// Step 1: Create a <style> element
const style = document.createElement("style");

// Step 2: Write CSS rules dynamically
style.innerHTML = `
  /* Utility Classes */
  .text-center { text-align: center; }
  .text-red { color: red; }
  .text-blue { color: blue; }
  .bg-black { background-color: black; }
  .bg-white { background-color: white; }
  .p-4 { padding: 1rem; }
  .m-4 { margin: 1rem; }
  .flex { display: flex; }
  .flex-col { flex-direction: column; }
  .flex-row { flex-direction: row; }
`;

// Step 3: Append <style> to the <head>
document.head.appendChild(style);

// Now you can use these utility classes in your HTML!
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    console.log("clicked");
    
})