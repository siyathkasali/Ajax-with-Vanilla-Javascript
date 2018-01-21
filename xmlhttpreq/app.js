function getData(){
  const xmlhttpReq = new XMLHttpRequest();

  xmlhttpReq.open('GET', 'page.txt' , true);

  xmlhttpReq.onprogress = function(){
    console.log("On Progress ", this.readyState); 
  }

  xmlhttpReq.onload = function(){
    if(this.status === 200){
      document.getElementById('output').innerHTML = `<h1>
      ${this.responseText}
      </h1>`;
    }
  }

  xmlhttpReq.onerror = function(){
    console.log('Request Error ', this.readyState);
  }

  xmlhttpReq.send();
}

document.querySelector('.btn').addEventListener('click', getData);

