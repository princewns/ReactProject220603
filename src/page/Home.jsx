import ProductionDisplay from "../components/ProductionDisplay";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const data = useContext(DataContext);

  return(
    <div>
      {/* 카드컴포넌트 - ProductionDisplay */}
      <ProductionDisplay product={data.state.product}/>
    </div>
  );
};
export default Home;