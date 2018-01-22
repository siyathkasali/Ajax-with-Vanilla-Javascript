const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts){
  // if(err){
  //   console.log(err);
  // }else{
  //   console.log(data);
  // }
// });

const data = {
  title:'custom post',
  body:'this is custome post testing'
};

// Create POST
// http.post('https://jsonplaceholder.typicode.com/posts', data,
// function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })

// UPDATE post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
// function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(data);
//   }
// })

// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(err, posts){
    if(err){
        console.log(err);
      }else{
        console.log(data);
      }
});