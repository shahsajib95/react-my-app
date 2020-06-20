import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Anwar', 'Salman', 'Bappi', 'Shuvo', 'Sakib']
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '60.99'},
    {name: 'Pdf Reader', price: '6.99'},
    {name: 'Premiere Pro', price: '249.99'}
  ]
  

  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am A react Person</p>
        {/* <Counter></Counter>
        <Users></Users> */}
        {/* <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
      
      {
        products.map(products=><li>{products.name}</li>)
      }
        </ul> */}
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      
{/* 
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        {/* <Person name="Munna" job="Accountant"></Person>
        <Person name="Masum" job="Doctor"></Person> */}
        </header>
    </div>
  );
}

// function Users(){
//   const [users, setUsers] = useState([])

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=> res.json())
//     .then(data=> setUsers(data));
//   }, [])

//   return(
//   <div>
//     <h3>Dynamic Users: {users.length}</h3>
//     <ul>{ 
//     users.map(user =><li>{user.name}</li>)
//   }
// </ul>
//   </div>
//   )
// }

// function Counter(){
//   const[count, setCount] = useState(10);
//   const handleIncrease = () =>  setCount(count + 1);

  

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={ () =>  setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width:'300px',
    float:'left',
    color: 'black',
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

// function Person(props) {
//   return(
//     <div style={{border: '2px solid gold', width: '410px'}}>
//       <h3>My Name: {props.name}</h3>
//   <p>My Profession: {props.job}</p>
//     </div>
//   )
  
// }

export default App;
