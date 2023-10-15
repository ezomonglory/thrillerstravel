import { locationIconSmall, heartIcon } from "@/icons";
import React from "react";

const BestOfferCard = ({ header, location, price, image }) => {
	return (
		<div className='bg-white p-[12px] rounded-md w-[200px] flex flex-col gap-y-[12px] justify-between'>
			<div className='w-full bg-gray-400 rounded-md h-[100px] '
            style={{
                backgroundImage:`url(${image})`,
                backgroundPosition:"cover",
                backgroundSize:"cover"
            }}
            ></div>

			<div className='flex flex-col gap-y-[4px]'>
				<h1 className='text-black text-[14px] font-[500] ' >{header}</h1>
				<div className="flex items-center gap-x-1" >
                    {locationIconSmall} 
					<p className="text-[12px] text-gray-500 " >{location}</p>
				</div>
			</div>
            
           <div className="flex justify-between" >
           <div className="flex items-center gap-x-[4px] " >
                <h1 className="text-black font-[700] tracking-[-1px]" >{price}</h1>  <span className="text-gray-500 text-[12px] " > / night</span>
            </div>

            <div className='w-[24px] h-[24px] border border-1 border-[#919191] rounded-lg flex items-center justify-center '>
                {heartIcon}
            </div>
           </div>
		</div>
	);
};


export default BestOfferCard;
