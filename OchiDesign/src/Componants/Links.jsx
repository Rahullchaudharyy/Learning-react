import React from "react";

const Links = ({links}) => {
  return (
    <div className=" w-1/2 flex flex-col gap-5 pt-8">
      <div className="headingss">
        <h1>S:</h1>
      </div>
      <div className="links">
        {links.map((link,index)=>{
       return (
        <h2>{link}</h2>
       )
        })}
      </div>
    </div>
  );
};

export default Links;
