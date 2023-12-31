import Image from "next/image";

export default function About() {
    return (
        <section className="flex flex-col items-center my-20" id="about">
            <div className="text-center md:text-start md:flex md:items-center w-4/5 md:justify-between mb-10">
                <div className="md:w-1/4 md:border-l-[3px] md:border-[#F999B7] md:pl-5">
                    <h1 className="text-4xl font-semibold">New Arrivals this Season</h1>
                </div>
                <hr className="w-1/2 border-[3px] border-[#F999B7] mx-auto mt-2 mb-5 md:hidden" />
                <div className="md:w-[30%]">
                    <p className="text-[#898989]">Lorem ipsum dolor sit amet consectetur. Vestibulum quam nunc nunc lacus. Gravida fermentum fusce sit fermentum lectus.</p>
                </div>
            </div>
            <div className="w-max h-max lg:h-[25rem] grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 p-3 relative">
                <div className="border-[3px] border-[#F999B7] border-b-0 border-r-0 w-24 h-32 absolute"></div>
                <div className="border-[3px] border-[#F999B7] border-t-0 border-l-0 w-24 h-32 absolute bottom-0 right-0"></div>
                <div className="bg-gray-300 w-[15rem] md:w-[18rem] h-[20rem]">
                    <Image src={'/assets/img1.jpg'} className="w-full h-full" width={100} height={100} alt="1" />
                </div>
                <div className="bg-gray-300 w-[15rem] md:w-[18rem] h-[20rem] self-end">
                    <Image src={'/assets/img2.jpg'} className="w-full h-full" width={100} height={100} alt="2" />
                </div>
                <div className="bg-gray-300 w-[15rem] md:w-[18rem] h-[20rem]">
                    <Image src={'/assets/img3.jpg'} className="w-full h-full" width={100} height={100} alt="3" />
                </div>
            </div>
        </section>
    )
}
