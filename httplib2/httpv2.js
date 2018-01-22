class Http{

  // GET Data
  getData(url){
    return new Promise((resolve,reject)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data => resolve(data))
    .catch(err=> rejecet(err));
  })
  }

  // POST Data
  postData(url,data){
    return new Promise((resolve,reject)=>{
    fetch(url,{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(data => resolve(data))
    .catch(err=> rejecet(err));
  })
  }

  // UPDATE Data
  put(url,data){
    return new Promise((resolve,reject)=>{
    fetch(url,{
      method: 'put',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response=> response.json())
    .then(data => resolve(data))
    .catch(err=> rejecet(err));
  })
  }

// UPDATE Data
delete(url){
  return new Promise((resolve,reject)=>{
  fetch(url,{
    method: 'DELETE',
    headers:{
      'Content-type':'application/json'
    }
  })
  .then(response=> response.json())
  .then(() => resolve('Reseroce deleted...'))
  .catch(err=> rejecet(err));
})
}

}