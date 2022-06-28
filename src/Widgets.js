import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

const newsArticle = (heading, subtitle) =>{
    return(
<div className="widgets__article">
  <div className="widgets__articleLeft">
    <FiberManualRecordIcon/>
  </div>

  <div className="widgets__articleRight">
    <h4>{heading}</h4>
    <p>{subtitle}</p>
  </div>

</div>)
}

  return (
    <div className="widgets">
        <div className = "widgets__header">
            <h2>Linkedin News</h2>
            <InfoIcon/>
        </div>
     { newsArticle("This is Widgets", "Top News-1000 readers") }
     { newsArticle("Bitcoin plunges", "Hits 20k") }
     { newsArticle("Tesla stock split", "3 to 1 stock split") }
     { newsArticle("Market heading towards major correction", "Speculations of recession") }
 
    </div>
  )
}

export default Widgets