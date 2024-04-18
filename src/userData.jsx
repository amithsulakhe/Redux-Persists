import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "./redux/slice";
const UserData = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData(data));
    console.log(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserData;
