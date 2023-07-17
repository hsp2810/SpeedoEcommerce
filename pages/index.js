import FilterSidebar from "../components/FilterSidebar";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className='main_container flex flex-col pt-14'>
      <h1 className={"font-bold uppercase text-lg text-center my-3"}>
        All Products
      </h1>
      <div className='flex'>
        <FilterSidebar />
        <Products />
      </div>
    </div>
  );
}
