document.querySelector('.get-jokes').addEventListener('click', getData);

function getData(e){
  const number = document.querySelector('input[type="number"]').value;
  
  
  const xhr = new XMLHttpRequest();
  const url = `http://api.icndb.com/jokes/random/${number}`;
  xhr.open('GET', url, true);
  xhr.onload = function(){
    if(this.status === 200){
      const data =JSON.parse(this.responseText);
      let output = '';
      data.value.forEach(function(joke){
       output += `
            <li class="list-group-item">${joke.joke}</li>
       `;
       document.querySelector('.jokes').innerHTML = output;
      });
    }
  }
  xhr.send();

  e.preventDefault();
}