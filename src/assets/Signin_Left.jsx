import Hugeicon from "./icons/Hugeicon"
import AntLogo from "./images/smalllogo.png"
import PieChart from "./images/piechart.png"

function Datapoints(props){
    return(
        <>
            <div class = "flex flex-col justify-center items-center px-4">
                <div class = "font-bold text-lg">{props.num}</div>
                <div class = "text-sm">{props.name}</div>
            </div>
        </>
    );
}

function Signin_Left() {
    return ( 
        <>     
            <div class = "hidden lg:flex flex-col basis-1/2 h-screen bg-[rgba(255,255,255,1)] border-r border-[rgba(233,234,235,1)]">
                <div class = "bg-white border-2 border-[rgba(233,234,235,1)] rounded-3xl shadow-md absolute mx-auto top-[40%] left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div class = "px-4 py-4 border-b border-[rgba(233,234,235,1)] flex flex-row text-lg font-bold">
                        <img src={AntLogo} class = "w-8 h-8"></img>
                        <div class="pl-5">AI to Detect & Autofix Bad Code</div>
                    </div>

                    <div class = "flex flex-row justify-between px-3 py-5">
                        <Datapoints num = "30+" name = "Language Support"/>
                        <Datapoints num = "10K+" name = "Developers"/>
                        <Datapoints num = "100K+" name = "Hours Saved"/>                       
                    </div>

                    <div class = "absolute left-1/2 top-[calc(100%-10px)] w-[220px] border-2 border-[rgba(233,234,235,1)] p-5 rounded-3xl shadow-md bg-white flex flex-row"> 
                        <div class = "flex flex-col">
                            <img src={PieChart} class = "w-11 h-11"></img>
                            <div class = "pt-2">
                                <div class  = "text-sm font-bold">Issues Fixed</div>
                                <div class = "text-3xl font-bold">500K+</div>
                            </div>
                        </div>
                        <div class = "absolute right-4">
                            <div class ="text-sm text-[rgba(0,73,198,1)] font-semibold">↑ 14%</div>
                            <div class = "text-xs">This Week</div>
                        </div>
                    </div>
                </div>
                <Hugeicon/>
            </div>
        </>
     );
}

export default Signin_Left;