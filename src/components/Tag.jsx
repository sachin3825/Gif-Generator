import React, { useState } from "react";
import useGif from "../Hooks/useGif";
import Spinner from "./Spinner";

function Tag() {
  const [tag, setTag] = useState("human");
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className='flex flex-col w-1/2  bg-green-500 rounded-lg border border-richblack-200  items-center p-5 gap-5'>
      <h1 className='text-2xl underline uppercase font-bold'>
        Random {tag} gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} alt='gif' />}

      <input
        className='w-10/12 rounded-md p-2 text-lg'
        name='tag'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        // onClick={clickHandler}
        onClick={() => fetchData(tag)}
        className='w-10/12 bg-slate-200 rounded-lg py-2 text-lg uppercase font-bold'
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
