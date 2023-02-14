import "./App.css";
import Carts from "./components/Carts";
import ListProduct from "./components/ListProduct";
import Title from "./components/Title";

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <Title />
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProduct />
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Carts />
        {/* CART : END */}
      </div>
    </div>
  );
}

export default App;
