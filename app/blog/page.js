import React from "react";
import heroBg from "@/public/about-us/hero.png";
// import blog1 from "@/public/about-us/blog1.png";
// import blog2 from "@/public/about-us/blog2.png";
// import blog3 from "@/public/about-us/blog3.png";
import Image from "next/image";
import Link from "next/link";

// blog data
import blogs from "@/public/data/data.json"

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
                            width={400}
                            height={250}
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
