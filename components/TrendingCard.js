import { starIcon } from "@/icons";
import React from "react";

const TrendingCard = ({ image, header, stars, text, price }) => {
	return (
		<div className='bg-white rounded-lg h-[120px]   flex p-[12px] gap-x-[12px] w-3/3 md:w-2/3 lg:w-1/3  '        
        >
			<div className='w-[100px] h-full rounded-md bg-gray-500 flex-shrink-0'
            style={
                {
                    backgroundImage:`url(${image})`,
                    backgroundPosition:"cover",
                    backgroundSize:"cover"
                }
            }
            >


            </div>

			<div className="flex flex-col justify-between flex-grow " >
				<div className="flex justify-between items-center" >
					<h1 className="text-black font-[500] " >{header} </h1>

					<div className="flex items-center gap-x-[4px]" >
                        {starIcon}
						<p className="text-gray-400 text-[12px] " >{stars}</p>
					</div>
				</div>

                <p className="text-gray-300 text-[12px] ellipsis line-clamp-2 " >
                    {text}
                </p>

                <h1 className="text-black font-[700] tracking-[-1px] " > {price} </h1>
			</div>
		</div>
	);
};

export default TrendingCard;
