// const init = () => {
//     //target the DOM element we want with the query tool 
//     const inputForm = document.querySelector('form');
//     //adding an event listener with the (inputForm) in our code
//     //submit is the type of event, and then event is stored as a variable with a callback function 
//     inputForm.addEventListener('submit', (event) => {
//         //stops the page from defaulting back to the norm
//         event.preventDefault();
//         //gets the value from our event object by accessing the event, then the the property(children), then the second element via its index, and finally to get the value with the value attribute
//         //event.target.children[1].value (the method below is the same thing)
//         const input = document.querySelector('input#searchByID');

//         console.log(input.value);

//         fetch('http://localhost:3000/movies')
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);


//     }));
// }

// document.addEventListener('DOMContentLoaded', init);

const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
    
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);