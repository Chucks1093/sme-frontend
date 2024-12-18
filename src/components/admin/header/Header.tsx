import { Search, Settings, X } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	const handleClear = () => {
		setSearchText("");
	};

	return (
		<div
			className={`
        flex items-center gap-2
        bg-white h-12 w-[60%]
        rounded-[1.6rem] px-4
        border 
        transition-all duration-200 ease-in-out
        ${isFocused ? "shadow-md border-green-950/20" : "hover:border-gray-300"}
      `}>
			<Search
				className={`
          w-5 h-5
          transition-colors duration-200
          ${isFocused ? "text-green-950" : "text-gray-400"}
        `}
			/>

			<input
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder='Search loan applicants by name, business, or location...'
				type='text'
				className={`
          h-full w-full
          bg-transparent
          text-base text-gray-800
          placeholder:text-gray-400
          focus:outline-none
          transition-all duration-200
        `}
			/>

			{searchText && (
				<button
					onClick={handleClear}
					className={`
            p-1 rounded-full
            hover:bg-gray-100
            transition-colors duration-200
            group
          `}
					aria-label='Clear search'>
					<X className='w-4 h-4 text-gray-400 group-hover:text-gray-600' />
				</button>
			)}
		</div>
	);
};

export default function Header() {
	return (
		<header className=' bg-[#f1f2f2] w-full h-[10vh] flex flex-row justify-between  items-center gap-4  text-[1.1rem] px-8'>
			<SearchBar />
			<Settings
				className='ml-auto block'
				stroke='#453124'
			/>
			<Avatar className='border border-accent w-8 h-8'>
				<AvatarImage src='https://github.com/shadcn.png' />
				<AvatarFallback className='text-accent bg-white text-sm'>
					CN
				</AvatarFallback>
			</Avatar>
		</header>
	);
}
