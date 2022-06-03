// Context API 를 이용해서 데이터 공용으로 사용하기
import { createContext, useState } from "react";

//내보낸 DataContext를 통해 value 값을 넣어 사용
const DataContext = createContext();

//미리 Provider를 작성하여 작성한 value값을 가진 컴포넌트를 내보냄
const DataProvider = ({children}) => {
  //사용할 값을 useState로 들고옴
  const [user, setUser] = useState(null);
  //comment로 사용할 내용
  const [comments, setComments] = useState(
    [{
      id : 1,
      product : '책',
      user : '응애',
      text : '먹을만하네요',
      img : null
    }]);
    //증가하는 id값
    const [id, setId] = useState(2);
    //product로 사용할 내용
    const [product, setProduct] = useState({
      id : 1,
      name : '책',
      text : '못먹겠네요',
      img : 'book.png'
    });

  //사용할 value값을 state와 action으로 분리해서 넣어둠
  const value = {
    state : {user, comments, id, product},
    action : {setUser, setComments, setId, setProduct}
  };
  //children을 통해서 value값을 사용한 컴포넌트를 넘겨줌
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
};

//consumer 작성
//Datacontext.consumer으로 사용할 내용을 Dataconsumer로 사용
const { Consumer : DataConsumer } = DataContext;

//컴포넌트로 쓰기위한 provider와 consumer
export {DataProvider, DataConsumer};
//값을 가져와서 쓰기위한 디폴트 컨텍스트 API
export default DataContext;