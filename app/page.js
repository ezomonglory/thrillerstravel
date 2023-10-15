import BestOffers from "@/components/BestOffers";
import Explore from "@/components/Explore";
import PageTop from "@/components/PageTop";
import Trending from "@/components/Trending";

import Image from "next/image";

export default function Home() {
	return (
		<main className='w-full h-max  '>
			<PageTop />
			<div className='flex flex-col gap-y-[24px]'>
				<Trending />
				<BestOffers />
				<Explore />
			</div>
		</main>
	);
}
