import DataContext from "../context/DataContext";
import { useContext } from "react";

const MyPage = () => {
  //contextAPI를 통해 관련값을 가져옴
  const data = useContext(DataContext);
  return(
    <div>
      <p>{data.state.user}</p>
    </div>
  );
};
export default MyPage;