(function () {
    const styles = `
      :root {
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-color: #f8f9fa;
        --text-color: #212529;
        --border-radius: 6px;
        --transition: all 0.3s ease-in-out;
      }
  
      body {
        font-family: Arial, sans-serif;
        background: var(--background-color);
        color: var(--text-color);
        margin: 0;
        padding: 0;
      }
  
      h1, h2, h3, h4, h5, h6 {
        color: var(--primary-color);
        margin-bottom: 10px;
      }
  
      button {
        background: var(--primary-color);
        color: #fff;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: var(--border-radius);
        transition: var(--transition);
      }
  
      button:hover {
        background: #0056b3;
      }
  
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color:red;
      }
    `;
  
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  })();
  