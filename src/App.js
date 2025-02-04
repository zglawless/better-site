import Layout from './components/Layout'
import ParticlesComp from './components/particles'
import Projects from './components/Projects'
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
     <>
     <ParticlesComp id= "particles"/>
     <Layout />
     <Projects/>
     </>
  )
}

export default App;
