import React from "react";

const ExploreCard = ({ header, title, price, image }) => {
	return (
		<div className='bg-white w-[350px] rounded-md flex gap-x-[12px] h-[100px] p-[12px] '>
			<div className='bg-gray-300 rounded-md w-[100px] h-full  '
             style={{
                backgroundImage:`url(${image})`,
                backgroundPosition:"cover",
                backgroundSize:"cover"
            }}
            ></div>

			<div className='flex flex-col items-start justify-center w-full '>
				<h1 className='text-black font-[500]  '>{header}</h1>

				<div className='flex justify-between w-full ' >
					<p className='text-gray-300'>{title}</p>
					<h1 className='text-black tracking-[-1px] font-[500] '>{price}</h1>
				</div>
			</div>
		</div>
	);
};

export default ExploreCard;
