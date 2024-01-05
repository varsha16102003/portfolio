import "./Card.css";
import Card from "./Card";
import Wordcarddata from "./Wordcarddata";
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {Wordcarddata.map((val,ind)=> {
            return(
                <Card 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work;