import FilterSidebar from "../components/FilterSidebar";
import Products from "../components/Products";
import axios from "axios";

export default function Home(props) {
  return (
    <div className='main_container flex flex-col pt-14'>
      <h1 className={"font-bold uppercase text-lg text-center my-3"}>
        All Products
      </h1>
      <div className='flex'>
        <FilterSidebar />
        <Products products={props.products} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log("Running the server side props function");
  const { data } = await axios.get(
    "http://localhost:3000/api/products/getproducts"
  );
  console.log("Data got from the backend: ", data);
  return { props: { products: data.data } };
};
