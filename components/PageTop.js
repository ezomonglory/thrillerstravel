import React from "react";
import BannerItem from "./BannerItem";
import { locationIcon, dateIcon, userIcon } from "@/icons";

const PageTop = () => {
    

	return (
		<div className=' relative w-full bg-gray-400 rounded-xl h-[200px] flex justify-center mb-[56px]'
        style={{
            backgroundImage:'url("/1.jpeg")',
            backgroundPosition:"center",
            backgroundSize:"cover"
        }}        
        >
			<div className='absolute bottom-[-30px] w-[80%] mx-auto h-[70px] bg-white rounded-xl  flex justify-between items-center py-[12px] px-[24px] '
          
            >
				<BannerItem  icon={locationIcon} text='Where Are You Going?' />
				<hr className='w-[2px] bg-gray-400 h-[60%] ' />
				<BannerItem icon={dateIcon} text= 'Check-in Date' />
				<hr className='w-[2px] bg-gray-400 h-[60%] ' />
				<BannerItem icon={userIcon} text='3 adults' />
				<div className='py-[8px] text-white px-[12px] ml-[42px] text-[12px] rounded-lg flex items-center justify-center bg-purple-800 '>
					Search
				</div>
			</div>
		</div>
	);
};

export default PageTop;
