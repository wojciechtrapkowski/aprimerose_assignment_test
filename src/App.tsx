import React from 'react';
import { Form } from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Form />
      <ToastContainer />
    </div>
  );
}

export default App;
