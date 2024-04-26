import Breadcrumb from "./components/Breadcrumb";
import Header from "./components/Header";
import bulb from "./images/bulb.png";
import music from "./images/music.png";
import reload from "./images/reload.png";
import leftArrow from "./images/leftarrow.png";
import rightArrow from "./images/rightarrow.png";
import cropIcon from "./images/crop.png";
import brandIcon from "./images/brandlogo.png";
import hIcon from "./images/h.png";
import yIcon from "./images/y.png";
import gIcon from "./images/g.png";
import eIcon from "./images/e.png";
import xIcon from "./images/x.png";
import add from "./images/add.png";
import Dropdown from "./components/Dropdown";
function App() {
  return (
    <div className=" w-screen h-screen ">
      <Header />
      <Breadcrumb />
      <div className="mt-10 lg:px-28 md:px-10 sm:px-10 px-4">
        <h1 className=" lg:text-3xl md:text-xl sm:text-base text-base font-bold text-blue-700">
          Relations and Functions ( Mathematics )
          <div>
            <ul className="flex text-black justify-center text-lg font-medium mt-6 lg:mr-22 ">
              <li className="lg:mx-10 sm:mx-8 mx-6 border-b-4 border-zinc-950  text-blue-700 lg:font-bold md:font-bold md:text-lg sm:font-medium  sm:text-base font-base text-base">
                Study
              </li>
              <li className="lg:mx-10 sm:mx-8 mx-6 text-gray-500">Quiz</li>
              <li className="lg:mx-10 sm:mx-8 mx-6 text-gray-500">Test</li>
              <li className="lg:mx-10 sm:mx-8 mx-6 text-gray-500">Game</li>
              <li className="lg:mx-10 sm:mx-8 mx-6 text-gray-500">others</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <div className="lg:w-[712px] lg:h-[393.19px] md:w-[612px] md:h-[293.19px] sm:w-[512px] sm:h-[250.19px] w-[475px] h-[293.19px] rounded-3xl bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300">
              <div className=" flex justify-between items-center lg:px-10 lg:pt-8 md:px-10 md:pt-8 sm:px-10 sm:pt-8 px-10 pt-8 ">
                <img src={bulb} alt="bulb" />
                <img src={music} alt="music" />
              </div>
              <h1 className="text-white tracking-widest flex items-center justify-center h-56 lg:mt-6 md:-mt-8 sm:-mt-10 -mt-6">
                9 + 6 + 7x - 2x - 3
              </h1>
            </div>
            <div className="flex justify-between items-center lg:w-[650px] md:w-[550px] sm:w-[450px] w-[400px] mt-6">
              <img src={reload} alt="reload" />
              <div className="flex justify-center items-center">
                <img src={leftArrow} alt="arrowButton" className="w-10 mr-4" />
                <h1>01/10</h1>
                <img src={rightArrow} alt="arrowButton" className="w-10 ml-4" />
              </div>
              <img src={cropIcon} alt="cropIcon" />
            </div>
          </div>
        </h1>
      </div>
      <div className="flex justify-between items-center w-full lg:px-28 md:px-28 sm:px-20 px-8 mt-6">
        <div className="flex ">
          <div
            className=" rounded-full bg-white shadow-sky-600 w-14 h-14 flex justify-center items-center mr-6"
            style={{ boxShadow: "0px 0px 31px 0px #08389966" }}
          >
            <img
              src={brandIcon}
              alt="brandIcon"
              className=" md:mr-4 sm:w-8 md:w-8 lg:w-10 lg:h-8 w-8 h-8 mr-5 ml-4"
            />
          </div>
          <div>
            <p className=" text-xs">Published by</p>
            <div className="flex justify-center items-center">
              <img
                src={hIcon}
                alt="brandName"
                className="sm:w-2 sm:h-3 md:w-2 md:h-4 lg:w-3 lg:h-5 h-4 w-2"
              />
              <img src={yIcon} alt="brandName" className=" md:h-3 mt-2 h-3" />
              <img src={gIcon} alt="brandName" className=" h-3 mt-2" />
              <img src={gIcon} alt="brandName" className=" h-3 mt-2" />
              <img src={eIcon} alt="brandName" className=" h-3 mt-2" />
              <img src={xIcon} alt="brandName" className=" md:h-3 h-4 lg:h-5" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={add} alt="addIcon" className="w-10" />
          <h1 className="ml-4 text-xl font-bold text-blue-700">
            Create Flashcard
          </h1>
        </div>
      </div>
      <h1 className=" lg:px-28 md:px-28 sm:px-20 px-4 mt-6 mb-8 text-4xl font-extrabold text-blue-700">
        FAQ
      </h1>
      <Dropdown />
    </div>
  );
}

export default App;
