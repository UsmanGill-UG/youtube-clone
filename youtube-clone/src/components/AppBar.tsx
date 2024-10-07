import { SearchBar } from "./SearchBar";

export function AppBar(){
    return(
        <div className="flex justify-between pt-2">
            <div className="text-md inline-flex items-center pb-2">
                Youtube
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                Sign in
            </div>
        </div>
    );
}