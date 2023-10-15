import React from "react";
import { downIcon } from "@/icons";

const BannerItem = ({ icon, text }) => {
	return (
		<div className='flex justify-between items-center py-[8px] px-[12px] w-full '>
			<div className='flex gap-x-[8px] items-center '>
				{icon}

				<h1
					className={`${text === "3 adults" ? "text-black" : "text-gray-400"}`}
				>
					{text}
				</h1>
			</div>

			{downIcon}
		</div>
	);
};

export default BannerItem;
