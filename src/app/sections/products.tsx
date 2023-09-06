import Image from "next/image";
import { useState } from "react";

const products = [
    {
        title: "product 1",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 2",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 3",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 4",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 5",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 6",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 7",
        by: "Alinaintana.id",
        price: "30.000"
    },
    {
        title: "product 8",
        by: "Alinaintana.id",
        price: "30.000"
    },
]

const initialPostList = 2;
const incrementInitialPostList = 100;

export default function Products() {
    const [displayPosts, setDisplayPosts] = useState(initialPostList);

    const loadMore = () => {
        setDisplayPosts(displayPosts + incrementInitialPostList)
    }
    
    const loadLess = () => {
        setDisplayPosts(displayPosts - incrementInitialPostList)
    }

    return (
        <div className="flex flex-col items-center my-20">
            <div className="text-center md:text-start md:flex md:items-center w-4/5 md:justify-between mb-10">
                <div className="md:w-1/4 md:border-l-[3px] md:border-[#F999B7] md:pl-5">
                    <h1 className="text-4xl font-semibold">Our featured products</h1>
                </div>
                <hr className="w-1/2 border-[3px] border-[#F999B7] mx-auto mt-2 mb-5 md:hidden" />
                <div className="md:w-[30%]">
                    <p className="text-[#898989]">We come with hijab choices that are suitable to be combined with Muslim clothing.</p>
                    {displayPosts < products.length ? (
                        <button onClick={loadMore} className="hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-2 py-1 mt-2 text-center border-2 border-black capitalize">
                            show all collections
                        </button>
                    ) : (
                        <button onClick={loadLess} className="hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm px-2 py-1 mt-2 text-center border-2 border-black capitalize">
                            show less collections
                        </button>
                    )}
                </div>
            </div>
            <div className="w-4/5 grid md:grid-cols-2 lg:grid-cols-4 gap-x-0 md:gap-x-5 gap-y-10">
                {products.slice(0, displayPosts).map((product, i) => (
                    <div className="w-full" key={i}>
                        <article className="card card--2">
                            <div className="card__img"></div>
                            <div className="card_link cursor-pointer">
                                <div className="card__img--hover">
                                    <Image src={'/assets/produk.png'} className="mx-auto my-12" width={160} height={160} alt="produk" />
                                </div>
                            </div>
                            <div className="card__info mt-5">
                                <span className="card__category">Rp. {product.price}</span>
                                <h3 className="card__title font-semibold text-xl">{product.title}</h3>
                                <p className="card__by">by <span className="card__author" title="author">{product.by}</span></p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    )
}
