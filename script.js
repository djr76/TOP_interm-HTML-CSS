// ======= JavaScript Boilerplate =======

// Wait for the DOM to be fully loaded before running JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
  
    // Your code goes here
    init();
  });
  
  function init() {
    // Setup event listeners or run startup logic
    console.log('Init function running');
    
    const button = document.querySelector('#myButton');
    if (button) {
      button.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  }
  