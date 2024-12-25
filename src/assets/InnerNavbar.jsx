import Homeicon from "./icons/Homeicon";
import Bookicon from "./icons/Bookicon";
import Cloudicon from "./icons/Cloudicon";
import Settingicon from "./icons/Settingicon";
import Codeicon from "./icons/Codeicon";
import Supporticon from "./icons/Supporticon";
import Logouticon from "./icons/Logouticon";
import Option from "./Option";

function InnerNavbar(){

    return(
        <>
            <div class = "flex flex-col">
                <select class = "m-4 border-2 border-[rgba(233,234,235,1)] rounded-md p-1">
                    <option value="volvo">Navin Kumar</option>
                    <option value="saab">Sriran</option>
                    <option value="opel">Meghna</option>
                    <option value="audi">Harini</option>
                </select>
                <Option name = "Repositories" icon = {Homeicon} route = "/mainpage"/>
                <Option name = "AI Code Review" icon = {Codeicon} route = "/mainpage"/>
                <Option name = "Cloud Security" icon = {Cloudicon} route = "/mainpage"/>
                <Option name = "How to Use" icon = {Bookicon} route = "/mainpage"/>
                <Option name = "Settings" icon = {Settingicon} route = "/mainpage"/>
            </div>
            <div class = "flex flex-col pb-5">
                <Option name = "Support" icon = {Supporticon} route = "/mainpage"/>
                <Option name = "Logout" icon = {Logouticon} route = "/"/>
            </div>
        </>
    );
}

export default InnerNavbar;