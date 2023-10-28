import Introduction from "./components/Introduction";
import Product from "./components/Product";
import ProductQuery from "./components/ProductQuery";
import User from "./components/User";
export default function Documentation({ doc }) {
  console.log(doc);
  return (
    <aside className=" col-span-2 mt-4">
      {doc == "Introduction" && <Introduction />}
      {doc == "Products" && <Product />}
      {doc == "Product Query" && <ProductQuery />}
      {doc == "Users" && <User />}
      {doc == "Category"}
      {doc == "Auth"}
      {doc == "File"}
    </aside>
  );
}
