import sendBtn from "../../assets/send.svg";
import GetPrompt from "../../services/axios-ai/request";
import { useDispatch, useSelector } from "react-redux";

function SendChat() {
  const dispatch = useDispatch();
  const inputPrompt = useSelector((d) => d.inputPrompt);

  return (
    <div className="chatSend  mt-auto w-full flex flex-col items-center justify-center">
      <div className="inp lg:w-[72rem] md:w-[50rem] p-2 py-3 flex items-center rounded-lg">
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) =>
            dispatch({ type: "CHANGE_INPUT", inputPrompt: e.target.value })
          }
          placeholder="message chatGPT"
          className="p-5 text-white bg-transparent text-2xl focus:border-none focus:outline-none"
        />
        <button
          className="send"
          onClick={() => {
            if (!inputPrompt) {
              return;
            }
            dispatch({
              type: "PROMPT_REQUEST",
              isLoading: true,
              userP: inputPrompt,
            });
            GetPrompt(inputPrompt).then((res) => {
              dispatch({
                type: "PROMPT_REQUEST_SUCCESS",
                isLoading: false,
                botPrompt: res.data.result,
                fromInput: true,
              });
            });
          }}
        >
          <img className="transition sendImg" src={sendBtn} />
        </button>
      </div>
    </div>
  );
}

export default SendChat;
