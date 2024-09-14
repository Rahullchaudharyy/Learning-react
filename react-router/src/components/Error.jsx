import { useRouteError } from "react-router-dom"
const Error = () => {

    const err = useRouteError()
   
  return (
    <div>


        OppS!! Something went wrong!!!
        <h2>{err.error.message}</h2>
    </div>
  )
}

export default Error