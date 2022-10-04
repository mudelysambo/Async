import "./styles.css";

export default function App() {

  let a = 2;
  let b = 5;
  
  setTimeout(function(){
    console.log('TimeOut: ' + a)
  },  100)

  fetch('/').then(function(){
    console.log('Fetch')
  })

  console.log('Synchronous')

  console.log(a)
  console.log(b)

  //the output will be as folllows
  //Synchronous
  //1
  //2
  //Fetch
  //Async


  ///Fetch will execute before asyn because the default fetch timeout is actual way faster or shorter compare to the Async ml 100 mili sec that we declared. Hence fetch will display first 


 
}
