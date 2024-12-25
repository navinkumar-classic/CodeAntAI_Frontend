import { useNavigate } from "react-router-dom";

function LoginOption(props){
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/mainpage");
    };
    return(
        <>
            <div class = "flex flex-row rounded-lg border-2 border-[rgba(233,234,235,1)] justify-center items-center w-3/4 xl:w-1/2 py-3 my-2 cursor-pointer hover:bg-[rgba(245,245,245,1)]"
                 style={{visibility: props.hidden ? "visible":"hidden"}} onClick={handleNavigate}>
                <img src = {props.img} class = "w-7 h-7"></img>
                <div class = "text-lg ml-2 font-semibold">{props.name}</div>
            </div>
        </>
    );
}

export default LoginOption;