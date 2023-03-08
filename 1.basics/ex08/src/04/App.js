import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';

function App() {
//   return ( // 이안이 JSX 구역
//     <Fragment>
//       <Header />
//       <Content />
//     </Fragment>
//   );
return React.createElement(Fragment, null, React.createElement(Header, null), React.createElement(Content, null));
}

export default App;
