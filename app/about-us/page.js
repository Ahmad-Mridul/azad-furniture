import Image from "next/image";
import React from "react";
import heroBg from "@/public/about-us/hero.png";
import clock from "@/public/about-us/clock.png";
import bag from "@/public/about-us/bag.png";
import card from "@/public/about-us/card.png";
import dollar from "@/public/about-us/dollar.png";
import light from "@/public/about-us/light.png";
import product1 from "@/public/about-us/product1.png";
import product2 from "@/public/about-us/product2.png";
import product3 from "@/public/about-us/product3.png";
import product4 from "@/public/about-us/product4.png";
import product5 from "@/public/about-us/product5.png";
import wishlist from "@/public/about-us/wishlist.png";

import "./about-us.css";
const page = () => {
    return (
        <div className="bg-white">
            {/* hero section */}
            <div
                style={{ backgroundImage: `url(${heroBg.src})` }}
                className="flex justify-center items-center bg-cover  md:h-[556px] h-[200px] bg-no-repeat "
            >
                <h1 className="text-white text-[64px] font-saira">About Us</h1>
            </div>

            {/* services */}
            <div className="md:my-30 md:px-25 my-5 ">
                <div className="features p-7 flex flex-col md:flex-row gap-10 rounded items-center justify-center">
                    <div className="services rounded px-10 py-7 space-y-2">
                        <div className="flex items-center gap-5">
                            <Image src={clock} alt="" />
                            <h2>Shope online</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat dolor odio odio{" "}
                        </p>
                    </div>
                    <div className="services rounded px-10 py-7 space-y-2">
                        <div className="flex items-center gap-5">
                            <Image src={bag} alt="" />
                            <h2>Free shipping</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat dolor odio odio{" "}
                        </p>
                    </div>
                    <div className="services rounded px-10 py-7 space-y-2">
                        <div className="flex items-center gap-5">
                            <Image src={card} alt="" />
                            <h2>Return policy</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat dolor odio odio{" "}
                        </p>
                    </div>
                    <div className="services rounded px-10 py-7 space-y-2">
                        <div className="flex items-center gap-5">
                            <Image src={dollar} alt="" />
                            <h2>PAYMENT</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Consequat dolor odio odio{" "}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className=""></div> */}
            <Image src={light} alt="" className="w-full" />
            <div className="my-14 px-20 bg-white">
                <h3 className="text-center md:text-[70px] text-4xl font-semibold mb-12 text-black">
                    Our Top Products
                </h3>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
                    <div className="card space-y-3">
                        <div className="relative border border-gray-400 rounded-2xl">
                            <Image src={product1} alt="" />
                            <Image
                                src={wishlist}
                                alt=""
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Ole Gundorse Spring...
                        </h4>
                        <div className="flex gap-5">
                            <p>$82.00</p>
                            <p className="line-through text-gray-400">
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className="card space-y-3">
                        <div className="relative border border-gray-400 rounded-2xl">
                            <Image src={product2} alt="" />
                            <Image
                                src={wishlist}
                                alt=""
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Ole Gundorse Spring...
                        </h4>
                        <div className="flex gap-5">
                            <p>$82.00</p>
                            <p className="line-through text-gray-400">
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className="card space-y-3">
                        <div className="relative border border-gray-400 rounded-2xl">
                            <Image src={product3} alt="" />
                            <Image
                                src={wishlist}
                                alt=""
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Ole Gundorse Spring...
                        </h4>
                        <div className="flex gap-5">
                            <p>$82.00</p>
                            <p className="line-through text-gray-400">
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className="card space-y-3">
                        <div className="relative border border-gray-400 rounded-2xl">
                            <Image src={product4} alt="" />
                            <Image
                                src={wishlist}
                                alt=""
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Ole Gundorse Spring...
                        </h4>
                        <div className="flex gap-5">
                            <p>$82.00</p>
                            <p className="line-through text-gray-400">
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className="card space-y-3">
                        <div className="relative border border-gray-400 rounded-2xl">
                            <Image src={product5} alt="" />
                            <Image
                                src={wishlist}
                                alt=""
                                className="absolute bottom-2 right-2"
                            />
                        </div>
                        <h4 className="font-semibold text-2xl">
                            Ole Gundorse Spring...
                        </h4>
                        <div className="flex gap-5">
                            <p>$82.00</p>
                            <p className="line-through text-gray-400">
                                $100.00
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="rounded-xl my-5 services px-20 py-4">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default page;
