import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

// import Button from 'react-bootstrap/Button'
import { Button, Alert, Breadcrumb } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">This is a builder</Alert>
        <Button>Test Build</Button>
      </header>
    </div>
  );
}

export default App;
