import Image from 'next/image';

export default function Home() {
    return (
        <div className="bg-[#FEE3EC] w-full px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full my-32 md:my-40 text-center md:text-start">
                    <div className="md:ml-20">
                        <h4 className="uppercase text-sm">summer new collection product</h4>
                        <h1 className="capitalize font-semibold text-4xl mb-5 mt-1">hijab best seller 2023</h1>
                        <button className="hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 border-2 border-black uppercase">get started</button>
                    </div>
                </div>
                <div className="w-full hidden md:block self-end">
                    <Image src={'/assets/anselma.png'} className="ml-10" width={300} height={300} alt='anselma' />
                </div>
            </div>
        </div>
    )
}
