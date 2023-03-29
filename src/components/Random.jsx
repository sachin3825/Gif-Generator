import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";

function Random() {
  const { gif, loading, fetchData } = useGif();
  return (
    <div className='flex flex-col w-1/2  bg-green-500 rounded-lg border border-richblack-200  items-center p-5 gap-5'>
      <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width={450} alt='gif' />}
      <button
        onClick={() => fetchData()}
        className='w-10/12 bg-slate-200 rounded-lg py-2 text-lg uppercase font-bold'
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
