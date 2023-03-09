import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div id='App'>
      <MyComponent
        props01={'문자열'}
        props02={12}
        props03={true} 
        props04={{no:1, name:'짱구'}}
        props05={['hello', 'world', 'react.js', 'es6']}
        props06={ () => '함수' }
        props07={10}
        props08={[true, false]}
        props09={{no:1, name:"짱구", email:"shin@email.com"}} />
    </div>
  );
}

export default App;
