import Req from "./Request";
import Res from "./Response";
import { endpoints } from "../Endpoints";
export default function Product() {
  let { product } = endpoints;
  return (
    <article className="px-2">
      <h2 className="text-5xl md:text-6xl py-2">Product</h2>
      <h3 className="text-2xl py-2">Get all products</h3>
      <Req method={product.getAll.method}>
        [{product.getAll.method}] {product.getAll.url}
      </Req>
      <div>
        <code>
          <pre>
            {product.getAll.response}
            {console.log()}
          </pre>
        </code>
      </div>
      <Res></Res>
    </article>
  );
}
