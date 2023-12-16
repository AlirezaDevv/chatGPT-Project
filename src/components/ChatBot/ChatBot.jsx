import gptImgLogo from "../../assets/chatgptLogo.svg";

function ChatBot({ botP }) {
  return (
    <div className="chat bot  m-4 py-8 px-6 text-sm flex items-start text-justify rounded-3xl">
      <img src={gptImgLogo} className="object-cover w-10 mr-6 rounded-3xl" />
      <div className="flex items-center justify-center pb-10 pr-5 ">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-3">ChatGPT</p>
          <p className="animate-typing pr-5 botTxt txtColor ">
            {botP ? botP : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
