import React, { Component } from 'react'
import JsxParser from 'react-jsx-parser'

class InjectableComponent extends Component {
  static defaultProps = {
    eventHandler: () => {}
  }
  // ... inner workings of InjectableComponent
}

const MyComponent = () => (
  <JsxParser
    bindings={{
      foo: 'bar',
      myEventHandler: () => { /* ... do stuff ... */ },
    }}
    jsx={`
      <h1>Header</h1>
      <InjectableComponent eventHandler={myEventHandler} truthyProp />
      <Library.SomeComponent someProp={foo} calc={1 + 1} stringProp="foo" />
      <Library.DataFetcher>((data) => <div>{data.name}</div>)</Library.DataFetcher>
    `}
  />
)