import React from "react";
import "./card.css"
export const Card = ()=>{
const [value, setvalue] = React.useState(0)
return <div className="box">
<h1 className="title">{value}</h1>
 <button  className="btn" onClick={()=> setvalue(value + 1)}>click</button>
 <button  className="btn" onClick={value>0?()=> setvalue(value - 1): value}>remove</button>
 <button  className="btn" onClick={()=>setvalue(value*0)}>again</button>
</div>
}