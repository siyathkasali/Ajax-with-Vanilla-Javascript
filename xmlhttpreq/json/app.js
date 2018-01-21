// Customer
document.querySelector('.btn').addEventListener('click', getData);

function getData(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      const data = JSON.parse(this.responseText);
      document.getElementById('output').innerHTML = `<ul>
              <li>${data.id}</li>
              <li>${data.name}</li>
      </ul>`
    }
  }

  xhr.send();
}



// Customers
document.querySelector('.btn1').addEventListener('click', getCustomers);

function getCustomers(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      const datas = JSON.parse(this.responseText);
      let insertData = '';
      datas.forEach(function(data){
         insertData += `
          <li class="list-group-item">${data.id}</li>
          <li class="list-group-item">${data.name}</li>
          <li class="list-group-item">${data.company}</li>
          <li class="list-group-item">${data.phone}</li>
        `;
        document.getElementById('customers').innerHTML = `<ul class="list-group">${insertData}</ul>`;
      });
    }
  }

  xhr.send();
}