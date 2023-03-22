

import React from 'react'
import Button from './components/Button'
//import Alert from './components/Alert'
//import ListGroup from "./components/ListGroup";

const App = () => {
  //let items =['New York','San Francisco', 'Tokyo','London','Paris' ];
  //const handleSelectItem = (item: string)=>{
    //console.log(item);
    

  //}

  return (
   // <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
   /*<div>
    <Alert >
      Hello <span> World </span>
      </Alert>
   </div>*/
   <div>
    <Button   onClick={()=> console.log('Clicked')}>My Button</Button>
    </div>
  )
}

export default App