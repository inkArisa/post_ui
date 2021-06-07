import React, { Component } from 'react'
import './App.css';
import CustomizedInput from "./components/CustomizedInput";
import { Button, Container } from '@material-ui/core';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <PostList />
        <div>
          <div className="sms">
            <form className="form-sms">
              <CustomizedInput label="Phone"/>
              <CustomizedInput label="Message"/>
              <Button>
                  Post sms
              </Button>
            </form>
          </div>
          <div className="bank">
            <form className="form-bankref">
              <CustomizedInput label="id"/>
              <CustomizedInput label="ref1"/>
              <CustomizedInput label="ref2"/>
              <Button>
                  post Bank Ref
              </Button>
            </form>
          </div>
          </div>
    </div>
  );
}

export default App;