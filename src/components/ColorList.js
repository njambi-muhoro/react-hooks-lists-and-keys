import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const myColors = colors.map(colorObj=>{
   return <li key={colorObj} style={{colorObj}}>{colorObj}</li>
  })


  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {myColors}
      </ol>
    </div>
  );
}

export default ColorList;
