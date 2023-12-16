import { useDispatch } from "react-redux";
import msgIcon from "../../assets/message.svg";

function SideBtn({ userP }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "CHANGE_INPUT",
      inputPrompt: userP,
    });
  };

  return (
    <button
      className="query w-[23rem] flex justify-start items-center text-xl bg-transparent p-6 my-4 mx-auto rounded-lg"
      onClick={() => {
        handleClick();
      }}
    >
      <img src={msgIcon} className="mr-12  object-cover h-7" /> {userP}
    </button>
  );
}

export default SideBtn;
