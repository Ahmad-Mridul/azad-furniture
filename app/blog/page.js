import React from "react";
import heroBg from "@/public/about-us/hero.png";
import blog1 from "@/public/about-us/blog1.png";
import blog2 from "@/public/about-us/blog2.png";
import blog3 from "@/public/about-us/blog3.png";
import Image from "next/image";

const page = () => {
    return (
        <div>
            {/* hero section */}
            <div
                style={{ backgroundImage: `url(${heroBg.src})` }}
                className="flex justify-center items-center bg-cover  h-[556px] bg-no-repeat "
            >
                <h1 className="text-white text-[64px] font-saira">BLOG</h1>
            </div>
            {/* blogs */}
            <div className="py-18 px-25 mx-auto grid grid-cols-3 gap-9">
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog1} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog2} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog3} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog1} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog2} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog3} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog1} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog2} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
                <div className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow">
                    <Image className="rounded-2xl" src={blog3} alt="" />
                    <h2 className="text-2xl font-medium">House boating on Lake Shasta</h2>
                    <p>
                        The best way to spend a long 4th of July weekend. Wake
                        boarding, swimming, barbecues, and bonfires.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;
