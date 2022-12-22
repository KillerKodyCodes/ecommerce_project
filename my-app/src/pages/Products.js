import Filterbar from "../components/Filterbar"
import ProductCollection from "../components/ProductCollection"

import ProductGrid from "../components/ProductGrid"
export default function Products(){
    return(
        <div className="ProductList">
          <Filterbar/>
          <ProductGrid/>
        </div>
    )
}