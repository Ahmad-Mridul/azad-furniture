import React from "react";
import "./blog-details.css";
import blogs from "@/public/data/data.json";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
const page = async ({ params }) => {
    const { id } = await params;
    const blog = blogs.find((blog) => blog.id.toString() === id);
    console.log(blog);
    return (
        <div className="mt-8">
            <div className="w-[75%] mx-auto">
                <div className="space-y-5">
                    <div className="flex items-center gap-5 md:px-25">
                        <button className="px-4 py-1 rounded-xl bg-[#CFCFCF] border border-[#C77777]">
                            Design
                        </button>
                        <p className="text-xl font-bold stroke-text">
                            16 March 2025
                        </p>
                    </div>
                    <h1 className="md:text-5xl text-3xl font-bold md:px-25">{blog.title}</h1>
                    <div className="relative w-full md:h-120 h-80">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            // style={{ objectFit: "cover" }}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[75%] mx-auto md:px-25 mt-16 font-thin">
                <p>
                    Google has been investing in AI for many years and bringing
                    its benefits to individuals, businesses and communities.
                    Whether it’s publishing state-of-the-art research, building
                    helpful products or developing tools and resources that
                    enable others, we’re committed to making AI accessible to
                    everyone.
                </p>
                <br />
                <p>
                    We’re now at a pivotal moment in our AI journey.
                    Breakthroughs in generative AI are fundamentally changing
                    how people interact with technology — and at Google, we’ve
                    been responsibly developing large language models so we can
                    safely bring them to our products. Today, we’re excited to
                    share our early progress. Developers and businesses can now
                    try new APIs and products that make it easy, safe and
                    scalable to start building with Google’s best AI models
                    through Google Cloud and a new prototyping environment
                    called MakerSuite. And in Google Workspace, we’re
                    introducing new features that help people harness the power
                    of generative AI to create, connect and collaborate.
                </p>
                <div className="max-w-xl mx-auto my-8 p-6 border-l-4 border-purple-600 bg-gray-50">
                    <p className="text-gray-800 italic text-lg leading-relaxed">
                        “People worry that computers will get too smart and take
                        over the world, but the real problem is that they’re too
                        stupid and they’ve already taken over the world.”
                    </p>
                    <p className="mt-4 text-gray-600 font-semibold">
                        — Pedro Domingos
                    </p>
                </div>
                <p>
                    More than 3 billion people already benefit from AI-powered
                    features in Google Workspace, whether it’s using Smart
                    Compose in Gmail or auto-generated summaries in Google Docs.
                    Now, we’re excited to take the next step and bring a limited
                    set of trusted testers a new set of features that makes the
                    process of writing even easier. In Gmail and Google Docs,
                    you can simply type in a topic you’d like to write about,
                    and a draft will be instantly generated for you. So if
                    you’re a manager onboarding a new employee, Workspace saves
                    you the time and effort involved in writing that first
                    welcome email. From there, you can elaborate upon or
                    abbreviate the message or adjust the tone to be more playful
                    or professional — all in just a few clicks. We’ll be rolling
                    out these new experiences to testers in the coming weeks.
                </p>
                <div className="relative w-[90%] my-5 mx-auto  h-80">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        // style={{ objectFit: "cover" }}
                        className="rounded-xl"
                    />
                </div>
                <p>
                    We’re so excited by the potential of generative AI, and the
                    opportunities it will unlock — from helping people express
                    themselves creatively, to helping developers build brand new
                    types of applications, to transforming how businesses and
                    governments engage their customers and constituents. Stay
                    tuned for more to come in the weeks and months ahead.
                </p>
            </div>
            <div className="w-[90%] mx-auto py-20">
                <div className="flex items-center justify-between">
                    <p className="text-[#F05B3A] md:text-5xl text-2xl font-bold">
                        Related blog
                    </p>
                    <Link href="/blog" className="btn bg-[#808080] rounded-xl text-white">
                        View All <FaLongArrowAltRight />
                    </Link>
                </div>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-9">
                    {blogs.slice(0,3).map((blog, idx) => (
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
        </div>
    );
};

export default page;
