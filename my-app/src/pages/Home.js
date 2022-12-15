import"../stylesheets/home.css"
import handleSet from '../images/handleset.jpg'
export default function Home(){
    return(
        <wrapper className="grid-wrapper">
            <div className="gridchild">
                <h1> American Made Products for Everything Armwrestling</h1>

                <h2> EST. 2021</h2>
            </div>

            <div className="gridchild">
            <img src={handleSet} alt="HandleSet" width="100%" height="auto"/>
            </div>
        </wrapper>
    )
}