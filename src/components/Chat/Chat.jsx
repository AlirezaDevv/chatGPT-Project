import userIcon from "../../assets/user-icon.png";

function Chat({ userP }) {
  return (
    <div className="chat m-4 py-8 px-6 text-sm flex items-center text-justify">
      <img src={userIcon} className="object-cover w-10 mb-5 mr-6 rounded-3xl" />
      <div>
        <p className="text-2xl font-semibold mb-2">You</p>
        <p className="txt  txtColor text-2xl">{userP ? userP : ""}</p>
      </div>
    </div>
  );
}

export default Chat;
