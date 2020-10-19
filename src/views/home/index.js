import React from "react";
import "./index.scss";

const App = () => {
  const views = [1,2,3]
  return <div>
    <h1>Fixed</h1>
    {
      views.map( (i,c)=>{
        return <div key={i} className="view"><b>View fixed height: 1080px <span>{c}</span></b></div>
      } )
    }
        <h1>Responsive</h1>
    {
      views.map( (i,c)=>{
        return <div key={i} className="view-responsive"><b>View responsive height <span>{c}</span></b></div>
      } )
    }
  </div>;
};

export default App;
