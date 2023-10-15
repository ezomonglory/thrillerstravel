import Image from "next/image";
import React from "react";
import SidebarLink from "./SidebarLink";
import { homeIcon, circleFourIcon, mailIcon, settingIcon, heartIcon, circleLeftIcon } from "@/icons";

const Sidebar = () => {
	return (
		<div className="bg-white md:py-[30px] md:px-[30px] min-h-screen flex flex-col justify-between " >
			<div className='flex flex-col space-y-[15px] items-center w-max'>
				<h1 className='text-black text-[26px] font-[500]'>
					Mima<span className='text-gray-600'>Booking</span>
				</h1>
				<div className='relative w-max  '>
					<Image
						className=' rounded-[50%] bord h-[80px] w-[80px] overflow-hidden '
                        width={80}
                        height={80}
						src='/lady.jpg'
					/>
					<div className='absolute h-[30px] w-[30px] bottom-[-20px] bg-black z-30 rounded-full left-[30%] '></div>
				</div>
				<h1 className="text-gray-700 !mt-[30px]"  >ilia jan</h1>
			</div>
			<div className="flex flex-col space-y-[16px]" >
                <SidebarLink icon={homeIcon} text="Dashboard" />
                <SidebarLink icon={circleFourIcon} text="Explore City" />
                <SidebarLink icon={mailIcon} text="Ticket" />
                <SidebarLink icon={heartIcon} text="Favorites" />
                <SidebarLink icon={settingIcon} text="Setting" />
            </div>
			<div>
            <SidebarLink icon={circleLeftIcon} text="Logout" />

            </div>
		</div>
	);
};

export default Sidebar;
