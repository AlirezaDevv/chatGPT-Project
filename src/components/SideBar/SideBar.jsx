import gptLogo from "../../assets/chatgpt.svg";
import addBtn from "../../assets/add-30.png";
import home from "../../assets/home.svg";
import saved from "../../assets/bookmark.svg";
import rocked from "../../assets/rocket.svg";
import { useDispatch, useSelector } from "react-redux";
import SideBtn from "./sideBtn";

export default function SideBar() {
  const userPrompts = useSelector((d) => d.promptData);
  const layout = useSelector((d) => d.changeLayout);

  const dispatch = useDispatch();

  let showPrompt = userPrompts.map((data, i) => {
    return <SideBtn userP={data.userPrompt} key={i} />;
  });

  return (
    <>
      <div
        className={`line fixed h-screen ${
          layout ? "line-0" : "line-270"
        } flex flex-col justify-center cursor-pointer`}
        onClick={() => {
          dispatch({ type: "LAYOUT" });
        }}
      >
        <div className="counter ">
          <div className="line-up w-2 h-6 rounded-t-md transition "></div>
          <div className="line-down w-2 h-6  rounded-b-md transition"></div>
        </div>
      </div>

      <aside
        className={`sidebar z-30 bg-slate-900 border-r border-r-gray-800 border-solid px-4 ${
          layout ? "-left-2/4" : "left-0"
        }`}
      >
        <div className="upperSide border-b border-b-gray-800 border-solid">
          <div className="upperSideTop flex items-center p-10 mb-10 ">
            <img src={gptLogo} className="logo mr-4" />
            <span className="brand text-3xl"> Chat GPT </span>
          </div>
          <button
            className="midBtn flex transition items-center text-white text-2xl p-6  justify-center mb-12 mx-auto rounded-lg"
            onClick={() => {
              dispatch({
                type: "RESTART_APP",
              });
            }}
          >
            <img className="addBtn h-6 pr-4" src={addBtn} />
            New Chat
          </button>
          <div className="upperSideBottom overflow-y-scroll h-[300px] ">
            {userPrompts.length != 0 ? showPrompt : null}
          </div>
        </div>
        <div className="lowerSide p-8">
          <div className="listItems cursor-pointer m-3 flex items-center justify-start text-xl">
            <img src={home} className="listItemsImg m-4 pr-4 w-10" />
            Home
          </div>
          <div className="listItems cursor-pointer m-3 flex items-center justify-start text-xl">
            <img src={saved} className="listItemsImg m-4 pr-4 w-10" />
            Saved
          </div>
          <div className="listItems cursor-pointer m-3 flex items-center justify-start text-xl">
            <img src={rocked} className="listItemsImg m-4 pr-4 w-10" />
            Upgrade to Pro
          </div>
        </div>
      </aside>
    </>
  );
}
