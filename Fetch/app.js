const text = document.querySelector('.get-text');
const json = document.querySelector('.get-json');
const api = document.querySelector('.get-api');


text.addEventListener('click', getText);
json.addEventListener('click', getJson);
api.addEventListener('click',getApi);
// Getting text
function getText(){
  fetch('text.txt')
  .then(response => response.text()).then(data=> 
    console.log(data)).catch(function(err){
    console.log(err)
  })
}

// Getting JSON file
function getJson(){
  fetch('data.json')
  .then(response => response.json())
  .then(data=> {
    let output = '';
    data.forEach(dat =>{
      output += `<li cla>${dat.fname}</li>
              <li>${dat.age}</li>
              <li>${dat.company}</li>
      `;
    });
    document.querySelector('.json-data').innerHTML = output;
  })
}

// Gettting external API

function getApi(){
  fetch('https://api.github.com/users')
  .then(function(response){
     return response.json(); 
  }).then(function(data){
    let output = '';
    data.forEach(function(user){
      output += `<li cla>${user.login}</li>`;
    });
    document.querySelector('.api-data').innerHTML = output;
  })
}

