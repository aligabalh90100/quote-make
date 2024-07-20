import "./App.css";
import PlayQuote from "./PlayQuote";
import useQetQuote from "./useGetQuote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { getQuote, loading, quote, copyQuote, handleTwitterPost } =
    useQetQuote();

  return (
    <div className="w-full flex items-center justify-center min-h-dvh">
      <main className=" w-11/12 lg:w-2/5 p-6 my-4 rounded-lg">
        <h1 className="text-center pb-8 text-2xl font-semibold">
          Quote Of The Day
        </h1>
        <div className="relative">
          <svg
            className="absolute top-0 size-4 left-0 rotate-180"
            fill="#000000"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z" />
          </svg>

          {loading ? (
            <span className="dot-spinner ml-8">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </span>
          ) : (
            <p className="px-8 ">{quote?.content}</p>
          )}

          <svg
            className="absolute bottom-0 size-4 right-0 "
            fill="#000000"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z" />
          </svg>
        </div>
        <div className="mt-6 text-end  mr-4">
          <span>― </span>
          {loading ? (
            <span className="dot-spinner">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </span>
          ) : (
            <span>{quote?.author}</span>
          )}
        </div>
        <hr />
        <div className="flex justify-between p-4 bor">
          <div className="flex gap-4">
            <PlayQuote text={quote?.content as string} />
            <span
              onClick={() => copyQuote(quote?.content as string)}
              className="group size-10 rounded-full border border-[#222] flex items-center justify-center cursor-pointer hover:bg-[#222]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 group-hover:fill-white transition-all duration-500  ease-in-out"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span
              onClick={handleTwitterPost}
              className="group size-10 rounded-full border border-[#222] flex items-center justify-center cursor-pointer hover:bg-[#222]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
                className="size-5 group-hover:fill-white transition-all duration-500  ease-in-out"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </span>
          </div>
          <button
            onClick={getQuote}
            disabled={loading}
            className={`${
              loading ? "cursor-not-allowed" : ""
            } border  border-[#222] rounded-full px-5 transition-all  hover:bg-[#222] hover:text-white group-hover:fill-white  duration-500  ease-in-out`}
          >
            New Quote
          </button>
        </div>
      </main>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
