import { useNavigate } from "react-router-dom";

function Option(props){
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(props.route);
    };

    return(
        <>
            <div class = "flex flex-row mx-4 px-3 py-2 rounded-lg hover:bg-[rgba(21,112,239,1)] hover:text-white cursor-pointer"
            onClick={()=>handleNavigate()}>
                <props.icon  fill = "currentColor"/>
                <div class = "text-md ml-2 font-semibold">{props.name}</div>
            </div>
        </>
    );
}

export default Option;