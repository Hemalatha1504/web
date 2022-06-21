
async function func(){
    let res=await fetch('launch.json');
    let data=await res.json();
    return data;
}
func().then(data=>console.log(data));//result:404(NotFound)


let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

  fetch(url)
  .then((response)=>{
    return response.status;//returns 200
    return response.json();// returns objects
    return response.json().author;//undefined
   return response.json().html_url;//undefined
  })
  .then((commits)=>{
    console.log(commits)
  })

  let que=function(){
    return new Promise(
        function(resolve,reject)
        {
            resolve('Hi');
        }
    )
  }
  console.log(que());//Promise:Hi

  let que2=function(data){
    return new Promise(
        function(resolve,reject)
        {
            resolve(data + 'Welcome');
        }
    )
  }
  console.log(que2());//undefinedwelcome
  console.log(que2(fetch));//calls function fetch which is declared above
  console.log(que2('fetch'));//fetchwelcome
  que().then(function(data1){
    console.log(data1);//returns first function que "Hi"
  });
  que().then(function(data1){
    console.log(que2(data1));//returns first & second function as "Hi Welcome"
  })
