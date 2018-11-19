import React from 'react'
import DisplayMyName from './DisplayMyName';
import DisplayName from './DisplayName'

const name = 'Patryk Sztajdel'

const App = () => (
  <div>
    <h1>Hello World</h1>
    < DisplayMyName />
    < DisplayName
      name={name} />
  </div>
)

export default App