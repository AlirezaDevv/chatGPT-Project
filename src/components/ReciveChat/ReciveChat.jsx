import ChatBot from "../ChatBot/ChatBot";
import Chat from "../Chat/Chat";

function ReciveChat({ userP, botP }) {
  return (
    <div className="chatRecive lg:w-[70rem] md:w-[50rem] ">
      <Chat userP={userP} />
      <ChatBot botP={botP} />
    </div>
  );
}

export default ReciveChat;
