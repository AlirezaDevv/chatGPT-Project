import ReciveChat from "../ReciveChat/ReciveChat";
import SendChat from "../SendChat/SendChat";
import Footer from "../Footer/Footer";
import PreChat from "../PreChat/PreChat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
export default function Main() {
  
  const b = document.body;

  const promptData = useSelector((d) => d.promptData);
  const layout = useSelector((d) => d.changeLayout);
  const dispatch = useDispatch();
  const chatBot = useRef(null);

  useEffect(() => {
    if (chatBot.current) {
      chatBot.current.scrollTop = chatBot.current.scrollHeight - 100;
    }
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (b.offsetWidth == "800") {
        console.log('message')
        dispatch({ type: "LAYOUT", changeLayout: true });
      }
    });
  });

  let showPrompt = promptData.map((data, i) => {
    return <ReciveChat userP={data.userPrompt} botP={data.botPrompt} key={i} />;
  });

  return (
    <main
      className={`main flex items-center flex-col my-40 mb-0 ${
        layout ? "main-w2" : "main-w1"
      }`}
    >
      <span
        className={`menu-icon cursor-pointer hidden fixed  ${
          layout ? "top-[13px] left-[11px]" : "top-[13px] left-[260px]"
        }  `}
        onClick={() => {
          dispatch({ type: "LAYOUT" });
        }}
      >
        {layout ? <BiMenuAltLeft /> : <IoClose />}
      </span>
      <div
        ref={chatBot}
        className="chatBox overflow-hidden overflow-y-scroll scroll-smooth"
      >
        {promptData.length ? showPrompt : <PreChat />}
      </div>
      <SendChat />
      <Footer />
    </main>
  );
}
