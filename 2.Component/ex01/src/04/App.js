import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div id='App'>
      <MyComponent
        props01={'문자열'}
        props02={12} />
    </div>
  );
}

export default App;
