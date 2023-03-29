import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className='background w-screen h-screen flex flex-col overflow-x-hidden gap-3 '>
      <h1 className='bg-white rounded-md m-3 p-2 text-center '>Random GIFS</h1>
      <div className='flex flex-col w-full justify-center items-center gap-5'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
