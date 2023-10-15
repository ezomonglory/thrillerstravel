import React from "react";

const Header = () => {
	return (
		<div className='bg-white py-[12px] px-[24px] rounded-lg w-full flex justify-between items-center'>
			<div className='py-[8px] px-[12px] border  border-1 border-gray-200 rounded-xl flex gap-x-2 '>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='22'
					height='22'
					fill='gray'
					viewBox='0 0 256 256'
				>
					<path d='M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z'></path>
				</svg>
				<input
					type='text'
					className='bg-transparent outline-none text-gray-400 placeholder:text-gray-400 '
					placeholder='search any things...'
				/>
			</div>

			<div className='flex items-center gap-x-[10px] '>
				<h1 className='text-black'>Saturday, may 3, 2023</h1>
				<div className='flex gap-x-[10px]'>
					<h2 className='bg-red-400 rounded-full h-[18px] text-[12px] w-[18px] flex items-center justify-center '>
						3
					</h2>
					<div className='border-1 border-gray-200  h-[32px] w-[32px] border flex items-center justify-center rounded-xl '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='gray'
							viewBox='0 0 256 256'
						>
							<path d='M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z'></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
