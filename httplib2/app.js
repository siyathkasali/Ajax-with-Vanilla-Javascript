const http = new Http();

// http.getData('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


const data = {
  name:"siyath",
  username:"siyathkasali",
  email:"siyaths19@gmail.com"
}

// http.postData('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err=> console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err=> console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err=> console.log(err));
