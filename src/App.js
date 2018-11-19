import React from 'react'
import DisplayMyName from './DisplayMyName';
import DisplayName from './DisplayName'

const App = () => (
  <div>
    <h1>Hello World</h1>
    < DisplayMyName />
    < DisplayName
      name="Patryk Sztajdel" />
  </div>
)

export default App