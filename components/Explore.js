import { exploreData } from "@/data";
import React from "react";
import ExploreCard from "./ExploreCard";

const Explore = () => {
	return (
		<div className='flex flex-col gap-y-[24px]  relative  h-[200px] '>
			<div className='flex justify-between items-center w-full'>
				<h1 className='text-gray-700 font-[500] '>Explore France</h1>
			</div>
			<div className='overflow-scroll scroll-hidden '>
				<div className='flex gap-x-[24px] w-max  '>
					{exploreData.map((trend, i) => (
						<ExploreCard
                        key={i}
                        image={trend.image}
							header={trend.header}
							title={trend.title}
							price={trend.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Explore;
