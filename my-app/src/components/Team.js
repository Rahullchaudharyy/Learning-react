const Team = ({Name,Location,Contact,url}) => {
    return (
        <div className="max-w-sm w-full p-4 bg-white shadow-lg rounded-lg border border-gray-200 m-4 mt-[10vmin]">
      <div className="flex items-center space-x-4">
        <img
        src={url}
          alt="person avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Name {Name}</h2>
          <p className="text-gray-500">location {Location}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <span className="font-bold">Contact: </span> {Contact}
        </p>
      </div>
    </div>
    )


}


export default Team; 
