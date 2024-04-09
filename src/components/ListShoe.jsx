import ShoesItem from "./ShoesItem";

const ListShoe = ({ listShoes, addToCart }) => {
  //   console.log(props);
  return (
    <div className="list_shoes grid grid-cols-3 gap-5">
      {listShoes.map((item, index) => {
        // yêu cầu: mang giao diện các item đôi giày đưa vào bên trong component shoeItem và quản lý
        return <ShoesItem shoes={item} key={index} addToCart={addToCart} />;
      })}
    </div>
  );
};

export default ListShoe;
