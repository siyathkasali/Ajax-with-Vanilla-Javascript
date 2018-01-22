const posts = [
  {title:"this is title 1", body: 'this is body 1'},
  {title:"this is title 2", body: 'this is body 2'}
];

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      resolve();
    }, 2000)
  });
}

function getPosts(){
 setTimeout(function(){
   let output = '';
  posts.forEach(function(post){
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
 },1000)
}

createPost({ title:'data is something is hola', body: 'hola Machan is body 3333'}).then(getPosts);
