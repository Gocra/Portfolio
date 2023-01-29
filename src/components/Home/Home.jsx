import React, { useEffect, useRef } from 'react'
import { setIntervalDelay } from '../util';
import "./Home.css";

const Home = () => {

  const titleRef = useRef()

  let currentText = 0
  let i = 0
  let adding = false
  let removing = true

  const textArr = [
    "Software Developer",
    "Web Developer",
    "Frontend Developer"
  ]
  
  const updateText = () => {
    if(window.innerWidth <= 576){
      if(titleRef.current.innerHTML !== textArr[0])
        titleRef.current.innerHTML = textArr[0]
      return
    }

    if(adding){
      titleRef.current.innerHTML += textArr[currentText][i]
      i++
      if(i >= textArr[currentText].length){
        adding = false
        const removeTextTimeout = setTimeout(()=>{
          removing = true
          clearTimeout(removeTextTimeout)
        }, 2000);

        }
      } else if(removing) {
        titleRef.current.innerHTML = titleRef.current.innerHTML.substring(0, titleRef.current.innerHTML.length - 1);
        if(titleRef.current.innerHTML.length <= 0){
          adding = true
          removing = false
          i = 0
          currentText++
          if(currentText >= textArr.length) currentText = 0
      }
    }
  }

  useEffect(()=>{

      const myInterval = setIntervalDelay(updateText, 150)

      return () => {
          clearInterval(myInterval)
          currentText = 0
          i = 0
          adding = false
          removing = true
          titleRef.current.innerHTML = ""
      }
  }, [titleRef])

  return (
    <section className="section home" id="home">
      <div className="content">
        <h1 className="name">Brynn Revell</h1>
        <p className="title">
          <span>I am a <span className="text-em" ref={titleRef}>Software Developer</span></span>
        </p>
        <p className="about">I am a software developer developer with a flair for creating <span className="text-em">elegant</span> and <span className="text-em">intuitive</span> experiences. Looking for growth opportunities to expand my technical skill set and put it to use.</p>
        <div className="buttons">
          <a target="_blank" rel="noreferrer" href="https://www.github.com/Gocra" className="btn btn-github">Github</a>
          <a href="#contact" className="btn btn-blue">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Home