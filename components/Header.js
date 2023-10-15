import { bellIcon, searchIcon } from "@/icons";
import React from "react";

const Header = () => {
	return (
		<div className='bg-white py-[12px] px-[24px] rounded-lg w-full flex justify-between items-center'>
			<div className='py-[8px] px-[12px] border  border-1 border-gray-200 rounded-xl flex gap-x-2  items-center '>
				{searchIcon}
				<input
					type='text'
					className='bg-transparent outline-none text-gray-400 placeholder:text-gray-400 '
					placeholder='search any things...'
				/>
			</div>

			<div className='flex items-center gap-x-[10px] '>
				<h1 className='text-black'>Saturday, may 3, 2023</h1>
				<div className='flex gap-x-[10px]'>
					<h2 className='bg-red-400 rounded-full h-[18px] text-[12px] w-[18px] flex items-center justify-center text-white '>
						3
					</h2>
					<div className='border-1 border-gray-200  h-[32px] w-[32px] border flex items-center justify-center rounded-xl '>
					{bellIcon}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
