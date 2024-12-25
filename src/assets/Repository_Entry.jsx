import database from "./images/database.png";
import circle from "./images/circle-blue.png";

function Repository_Entry(props) {
    return (
        <>
            <div class = "px-5 py-5 w-full border-b border-[rgba(233,234,235,1)] hover:bg-[rgba(245,245,245,1)] cursor-pointer">
                <div class = "flex flex-row items-center">
                    <h1 class = "text-md md:text-xl mr-4 font-semibold">{props.title}</h1>
                    <div class = "bg-[rgba(239,248,255,1)] border border-[rgba(178,221,255,1)] rounded-3xl px-2 text-[rgba(23,92,211,1)] text-xs md:text-base">
                        {props.status}
                    </div>
                </div>

                <div class = "flex flex-row pt-3 text-[rgba(24,29,39,1)] text-[0.7rem] md:text-sm">
                    <div class = "mr-5 md:mr-9 flex flex-row">
                        <div class = "mr-1 md:mr-2">{props.program}</div>
                        <img src = {circle} class = "h-2 w-2 my-auto"></img>
                    </div>
                    <div class = "mr-3 md:mr-9 flex flex-row">
                        <img src = {database} class = "h-3 w-3 my-auto mr-1 md:mr-2"></img>
                        <div>{props.data}KB</div>
                    </div>
                    <div class = "">Updated {props.day} days ago</div>
                </div>
            </div>
        </>
    );
}

export default Repository_Entry;