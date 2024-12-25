import Navbar from "./Navbar";
import Repository from "./Repository";

function MainPage() {
    return ( 
        <>
            <div class = "flex flex-col md:flex-row">
                <div class = "w-full md:w-[225px] flex-shrink-0 border-b border-[rgba(233,234,235,1)] md:border-r md:border-[rgba(233,234,235,1)]">
                    <Navbar/>
                </div>
                <Repository class = "flex-1"/>
            </div>
        </>
     );
}

export default MainPage;