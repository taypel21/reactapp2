import React, { useState } from 'react'
import './App.css';  
import Display from './component/Display'
import Footer from './component/Footer'
import Button from './component/Button'
import profileImg from './component/image.png'

function App() {

const [skills , setSkills] = useState("My name is Chanta")
const [count, setCount] = useState(0);

const handleCount = () => {
  setCount(count + 1);
}
const handleName = () => {
  setSkills("My name is Chanta")
}
const handleSkill = () => {
  setSkills("I'm a web developer") 
}
  return (

    <>
      <div className="container">
        <img className="photo" src={profileImg} alt="profile" />
        <main>
          <h3>Hi</h3>
          <Display clasName="skill-display" data={skills} />
          <div>
            <Button buttonClass="action-button" handleClick={handleName} buttonText={"Name"} />
            <Button buttonClass="action-button" handleClick={handleSkill} buttonText={"Skill"} />
          </div>
          <div>
            <Display className="count" data={count} />
            <Button buttonClass="count-button" handleClick={handleCount} buttonIcon={"fas fa-heart"} />
          </div>
        </main>
        <Footer  /> 
      </div>
    </>
  )
}


export default App;
