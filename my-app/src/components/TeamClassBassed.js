
import React from "react"


class TeamClassBassed extends React.Component{

  render(){
    return(
      <div className="max-w-sm w-full p-4 bg-white shadow-lg rounded-lg border border-gray-200 m-4 mt-[10vmin]">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/100"
          alt="person avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Name{}</h2>
          <p className="text-gray-500">location{}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-bold">Contact: </span> {}
        </p>
      </div>
    </div>
    )
  }
}


export default TeamClassBassed;