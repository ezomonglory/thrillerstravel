"use client";
import React, { useState } from "react";
import TrendingCard from "./TrendingCard";
import { trendingData } from "@/data";
import { rightIcon, leftIcon } from "@/icons";

const Trending = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev > 0 ? prev - 3 : prev));
	};

	const nextSlide = () => {
		setCurrentSlide((prev) =>
			prev + 3 < trendingData.length ? prev + 3 : prev,
		);
	};

	return (
		<div className='flex flex-col gap-y-[24px]  relative  h-[200px] '>
			<div className='flex justify-between items-center w-full'>
				<h1 className='text-gray-700 font-[500] '>Trending destinations</h1>
				<div className='flex gap-x-[12px]'>
					<div
						className='w-[24px] h-[24px] border border-1 border-black rounded-lg cursor-pointer flex items-center justify-center '
						onClick={prevSlide}
					>
                        {leftIcon}
                    </div>

					<div
						className='w-[24px] h-[24px] bg-purple-800 rounded-lg cursor-pointer flex items-center justify-center '
						onClick={nextSlide}
					>
                        {rightIcon}
                    </div>
				</div>
			</div>
			<div className='overflow-scroll scroll-hidden '>
				<div className='flex gap-x-[12px] '>
					{trendingData
						.slice(currentSlide, currentSlide + 3)
						.map((trend, i) => (
							<TrendingCard
                            key={i}
                            image={trend.image}
								header={trend.header}
								stars={trend.stars}
								text={trend.text}
								price={trend.price}
							/>
						))}
				</div>
			</div>

			<div className='absolute bottom-[0px] text-black w-full flex items-center justify-center'>
				{Array.from({ length: Math.ceil(trendingData.length / 3) }).map(
					(_, index) => (
						<span
							key={index}
							className={`dot inline-block  mx-[5px] cursor-pointer rounded-full  ${
								currentSlide / 3 === index ? "bg-black h-[12px] w-[12px] " : "bg-gray-400 w-[10px] h-[10px] "
							}`}
							onClick={() => setCurrentSlide(index * 3)}
						></span>
					),
				)}
			</div>
		</div>
	);
};

export default Trending;
