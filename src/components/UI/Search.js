import React, {useState, useRef, useEffect} from "react";
import clsx from "clsx";


function Search() {

    const targetRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const showSearchInput = isHovered || isFocused;
    const searchIcon = <img src="/icons/arrow-right.svg" className={clsx("w-10 z-10 self-end cursor-pointer pr-4")} alt=""/>;
    const arrowRight = <img src="/icons/search.svg" className={clsx("w-7 z-10")} alt=""/>;

    useEffect(() => {
        targetRef.current.value = "";
    }, [showSearchInput]);



    return (
        <div className={clsx("transitionSearchBar relative w-[52px] h-[45px] box-border border rounded-[50px] border-2 border-solid border-transparent hidden lg:flex justify-center items-center flex-col mr-6",  showSearchInput?"customKitShadow w-1/2 shadow-xl border-2 border-solid border-transparent":"w-full" ) }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        hover={showSearchInput}
        >
            <input type="search" className={clsx("text-[14px] custom-input-css absolute top-0 left-0 w-full h-[40px] leading-[3Opx] outline-0 border-1 text-[2rem] rounded-[20px] m-0 py-0 px-[20px] appearance-none", showSearchInput?"block":"hidden")} ref={targetRef} />
            {showSearchInput ? searchIcon : arrowRight }
        </div>
    )

}


export default Search;