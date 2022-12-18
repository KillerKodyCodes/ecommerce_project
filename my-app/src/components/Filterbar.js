import "../stylesheets/filterbar.css"

export default function Filterbar(){
   
   
    return(
        <nav className="product-filter">
            <h1>Red Lightning Armwrestling Handles and Merchandise</h1>

            <div className="sort">

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <div className="select">
                        <select>
                            <option value="Featured">Featured</option>
                            <option value="Most Popular">Most Popular</option>
                            <option value="Price: High to Low">"Price: High to Low"</option>
                            <option value="Price: Low to High">"Price: Low to High"</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    )
}