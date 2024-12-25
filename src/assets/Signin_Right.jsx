import Codeantlogo from "./icons/Codeantlogo";
import Git from "./images/git.png";
import Azure from "./images/azure.png";
import Bitbucket from "./images/bitbucket.png";
import Gitlab from "./images/gitlab.png";
import Sso from "./images/sso.png";
import LoginOption from "./LoginOption";
import { useState } from "react";

function Signin_Right() {
    const [signInType,setSignInType] = useState(true)
    return ( 
        <>
            <div class = "flex items-center justify-center flex-col basis-full lg:basis-1/2 h-screen bg-[rgba(250,250,250,1)]">
                <div class = "bg-[rgba(255,255,255,1)] w-11/12 border border-[rgba(233,234,235,1)] rounded-xl">
                    <div class = "py-4 flex flex-col items-center">
                        <div class = "py-6"><Codeantlogo /></div>
                        <h1 class = "text-center text-3xl font-semibold">Welcome to CodeAnt AI</h1>
                    </div>

                    <div>
                        <div class = "flex flex-row mx-6 my-3 bg-[rgba(250,250,250,1)] border border-[rgba(233,234,235,1)] rounded-lg">
                            <div class = "basis-1/2 text-center py-4 font-bold text-lg rounded-md cursor-pointer"
                                 onClick={() => setSignInType(true)}
                                 style={{backgroundColor: signInType ? "rgba(21,112,239,1)":"transparent",
                                        color: signInType ? "white":"black"}}>
                                SAAS
                            </div>
                            <div class = "basis-1/2 text-center py-4 font-bold text-lg rounded-md cursor-pointer"
                                 onClick={() => setSignInType(false)}
                                 style={{backgroundColor: signInType ? "transparent":"rgba(21,112,239,1)",
                                        color: signInType ? "black":"white"}}>
                                Self Hosting
                            </div>
                        </div>
                    </div>  

                    <div class = "flex flex-col border-t-2 border-[rgba(233,234,235,1)] justify-center items-center mt-4 py-2">
                        {
                            signInType ? (
                                <>
                                    <LoginOption img = {Git} name = "Sign in with GitHub" hidden = {true}/>   
                                    <LoginOption img = {Bitbucket} name = "Sign in with Bitbucket" hidden = {true}/>
                                    <LoginOption img = {Azure} name = "Sign in with Azure Devops" hidden = {true}/>
                                    <LoginOption img = {Gitlab} name = "Sign in with GitLab" hidden = {true}/>  
                                </>
                            ):(
                                <>
                                    <LoginOption img = {Gitlab} name = "Self Hosted GitLab" hidden = {true}/>   
                                    <LoginOption img = {Sso} name = "Sign in with SSO" hidden = {true}/>
                                    <LoginOption img = {Sso} name = "Sign in with SSO" hidden ={false}/>
                                    <LoginOption img = {Sso} name = "Sign in with SSO" hidden = {false}/>
                                </>
                            )
                        }                         
                    </div>
                </div>
                <p class = "pt-6">By signing up you agree to the <b>Privacy Policy.</b></p>
            </div>
        </>
     );
}

export default Signin_Right;