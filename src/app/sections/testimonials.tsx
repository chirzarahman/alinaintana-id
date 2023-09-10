import Image from "next/image";

const images = [
    {
        img: '/assets/img11.jpg',
        alt: '1'
    },
    {
        img: '/assets/img11.jpg',
        alt: '2'
    },
    {
        img: '/assets/img11.jpg',
        alt: '3'
    }
];

export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <section className="flex flex-col items-center my-20" id="testimonials">
            <div className="text-center md:text-start md:flex md:items-center w-4/5 md:justify-between mb-10">
                <div className="md:w-1/4 md:border-l-[3px] md:border-[#F999B7] md:pl-5">
                    <h1 className="text-4xl font-semibold">Our Customer Testimonials</h1>
                </div>
                <hr className="w-1/2 border-[3px] border-[#F999B7] mx-auto mt-2 mb-5 md:hidden" />
                <div className="md:w-[30%]">
                    <p className="text-[#898989]">Our brand is very trusted, you can see from some of the reviews of some of our customers.</p>
                </div>
            </div>
            <div className="w-max h-max lg:h-[25rem] grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 p-3">
                {images.map((image, i) => (
                    <div className="bg-gray-300 w-[15rem] md:w-[18rem] h-[20rem] rounded-md" key={i}>
                        <Image src={image.img} className="w-full h-full rounded-md" width={100} height={100} alt={image.alt} />
                    </div>
                ))}
            </div>
        </section>
    )
}
