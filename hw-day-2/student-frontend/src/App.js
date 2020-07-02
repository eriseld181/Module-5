import React from 'react';
import StudentList from './components/StudentList'
import NavBar from './components/NavBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <StudentList />
    </div>
  );
}

export default App;
