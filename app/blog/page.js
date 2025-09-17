import React from "react";
import heroBg from "@/public/about-us/hero.png";
import blog1 from "@/public/about-us/blog1.png";
import blog2 from "@/public/about-us/blog2.png";
import blog3 from "@/public/about-us/blog3.png";
import Image from "next/image";
import Link from "next/link";

// blog data
const blogs = [
    {
        id: 1,
        image: blog1,
        title: "House boating on Lake Shasta",
        content:
            "The best way to spend a long 4th of July weekend. Wake boarding, swimming, barbecues, and bonfires.",
    },
    {
        id: 2,
        image: blog2,
        title: "Mountain Hiking Adventure",
        content:
            "Exploring nature’s beauty while hiking through mountain trails and enjoying breathtaking views.",
    },
    {
        id: 3,
        image: blog3,
        title: "Beachside Camping Experience",
        content:
            "Camping on the beach with friends, enjoying sunsets, beach games, and campfire stories.",
    },
    {
        id: 4,
        image: blog1,
        title: "Family Picnic in the Park",
        content:
            "Spending quality time outdoors with family, delicious food, and fun activities.",
    },
    {
        id: 5,
        image: blog2,
        title: "Road Trip Across California",
        content:
            "Driving along scenic routes, visiting iconic landmarks, and making lifelong memories.",
    },
    {
        id: 6,
        image: blog3,
        title: "Winter Skiing Holiday",
        content:
            "Hitting the slopes, enjoying the snow, and relaxing in cozy cabins during the winter holidays.",
    },
];

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
                {blogs.map((blog, idx) => (
                    <div
                        className="p-3 bg-[#FFF9ED] space-y-2 rounded-2xl shadow"
                        key={idx}
                    >
                        <Image
                            className="rounded-2xl"
                            src={blog.image}
                            alt=""
                        />
                        <Link href={`/blog/${blog.id}`}>
                            <h2 className="text-2xl font-medium">
                                {blog.title}
                            </h2>
                        </Link>
                        
                        <p>{blog.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;
