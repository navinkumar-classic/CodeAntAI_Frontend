import Repository_Entry from "./Repository_Entry";
import Select from 'react-select'

function Repository() {
    let repository_data = [["design-system","React","1","7320","Public"],
                           ["codeaint-ci-app","Javascript","2","5871","Private"],
                           ["analytics-dashboard","Python","5","4521","Private"],
                           ["mobile-app","Swift","3","3096","Public"],
                           ["e-commerce-platform","Java","6","6120","Private"],
                           ["analytics-dashboard","Python","5","4521","Private"],
                           ["mobile-app","Swift","3","3096","Public"],
                           ["e-commerce-platform","Java","6","6120","Private"]];
    return ( 
        <>
            <div class = "flex items-center justify-center bg-[rgba(250,250,250,1)] p-8 basis-11/12">
                <div class = "bg-[rgba(255,255,255,1)] border border-[rgba(233,234,235,1)] rounded-xl w-full h-full">

                    <div class = "p-5 flex flex-col w-full justify-between sm:flex-row">
                        <div>
                            <h1 class = "text-2xl font-semibold mb-1">Repositories</h1>
                            <p class = "text-sm">33 total repositories</p>
                        </div>
                        <div class = "flex flex-row items-center mt-5 sm:mt-0">
                            <div class = "border border-[rgba(233,234,235,1)] rounded-md px-4 py-2 mr-3 cursor-pointer text-sm md:text-base">Refresh All</div>
                            <div class = "border border-[rgba(233,234,235,1)] rounded-md px-4 py-2 bg-blue-500 text-white cursor-pointer text-sm md:text-base">
                                Add Repository
                            </div>
                        </div>           
                    </div>

                    <div class = "w-full border-b border-[rgba(233,234,235,1)] px-5 pt-2 pb-5">
                        <div class = "w-4/4 md:w-1/4 md:min-w-[300px]"><Select placeholder = "Search Repository"/></div>
                    </div>

                    <div class = "flex-grow flex flex-col">
                    {
                        repository_data.map((item,index) => (
                            <Repository_Entry title = {item[0]} program = {item[1]} day = {item[2]} data = {item[3]} status = {item[4]}/>
                        ))
                    }
                    </div>
                    
                </div>
            </div>
        </>
     );
}

export default Repository;