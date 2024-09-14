import React, { useState } from 'react';
import Data from '../Data';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem , clearCart,removeItem} from '../utils/cartSlice';

const Home = () => {
  const [Search, setSearch] = useState('');
  const [Auth, setAuth] = useState(true);





  const FilteredData = Data.filter((item) =>
    item.dishName.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
  );

  const changeState = () => {
    setAuth(!Auth)
  }

  const dispatch = useDispatch()

  const HandleAddItem =()=>{
   dispatch(addItem("Pizza"))
  }


  



  return (
    <div className="h-auto w-full mt-10 flex flex-wrap justify-center p-4 bg-gray-100">

      <div className="h-[60px] bg-gray-400 rounded-xl m-[2vmin] w-[100vw] flex items-center justify-between px-[5vmin] md:px-[20vmin]">
        <input
          type="text"
          placeholder="Search for a dish..."
          onChange={(e) => setSearch(e.target.value)}
          value={Search}
          className="w-[40%] h-[40px] p-2 rounded-md"
        />

        <div>
          <button onClick={changeState}>{Auth ? "LogIn" : "LogOut"}</button>
        </div>
      </div>

      {FilteredData.length === 0 ? (
        <div className="mt-10 h-auto md:h-[40vmin] w-[45vmin] m-4 p-4 bg-white rounded-xl shadow-lg animate-pulse">
          <div className="photo h-[40%] w-full bg-gray-300 rounded-md mb-4"></div>
          <div className="h-[60%] w-full flex flex-col gap-2">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="flex flex-col mt-4 gap-2">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        </div>
      ) : (
        FilteredData.map((itemData, index) => (
          <div
            key={index}
            className="mt-10 h-auto hover:scale-2 md:h-[40vmin] w-[45vmin] m-4 p-4 bg-white rounded-xl shadow-lg"
          >
            <div className="photo h-[40%] w-full bg-yellow-300 rounded-md mb-4 overflow-hidden">
              <img
                src={`https://via.placeholder.com/150?text=${itemData.dishName}`}
                alt={itemData.dishName}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[60%] w-full flex flex-col">
              <h1 className="text-xl font-semibold text-gray-800">{itemData.dishName}</h1>
              <h2 className="text-md text-gray-600">{itemData.restaurantName}</h2>
              <div className="details flex flex-col mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">Rating:</span>
                  <h2 className="font-bold text-yellow-500">{itemData.rating}</h2>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">Price:</span>
                  <h2 className="font-bold">${itemData.price}</h2>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm">Delivery Time:</span>
                  <h2 className="font-bold">{itemData.timeToDeliver}</h2>
                  <button onClick={HandleAddItem} className='p-3 py-1 text-white rounded-xl bg-black'>Add</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
