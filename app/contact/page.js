import React from "react";
import heroBg from "@/public/about-us/hero.png";
import arrow from "@/public/contact-us/arrow.png";
import Image from "next/image";
import { FaClock, FaPhone } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { IoIosSend, IoMdMail } from "react-icons/io";
import "../about-us/about-us.css"
const page = () => {
    return (
        <div>
            <div
                style={{ backgroundImage: `url(${heroBg.src})` }}
                className="flex justify-center items-center bg-cover  h-[556px] bg-no-repeat "
            >
                <h1 className="text-white text-[64px] font-saira">
                    Contact Us
                </h1>
            </div>
            <div className="p-25 bg-[#FFF9ED] flex items-center justify-around">
                <div className="shadow border border-gray-200 rounded-2xl px-42 py-32">
                    <div className="flex items-center gap-2">
                        <p className="uppercase">Contact Form</p>
                        <Image src={arrow} alt="" />
                    </div>
                    <h2 className="font-bold text-2xl">Get in Touch with Us</h2>
                    <div className="space-y-5 mt-5">
                        <div className="flex items-center gap-5">
                            <FaPhone className="text-2xl" />
                            <div className="">
                                <p className="text-gray-400">
                                    Requesting A Call:
                                </p>
                                <p className="font-bold">+8801715-087800</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <FaClock className="text-2xl" />
                            <div className="">
                                <p className="text-gray-400">Open Hours:</p>
                                <p className="font-bold">8 am - 10 pm</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <ImLocation className="text-2xl" />
                            <div className="">
                                <p className="text-gray-400">Location:</p>
                                <p className="font-bold">Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow border border-gray-200 rounded-2xl p-10 bg-white">
                    <form action="" className="space-y-3">
                        <div className="">
                            <label htmlFor="name">Your Name</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                id=""
                                placeholder="Type your name"
                                className="w-full border border-gray-200 px-5 py-2 rounded"
                            />
                        </div>
                        <div className="w-full flex gap-5">
                            <div className="w-1/2">
                                <label htmlFor="name">Your Email</label>
                                <br />
                                <label className="input">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Type your Email"
                                    />
                                    <IoIosSend className="text-2xl" />
                                </label>
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="name">Your Phone</label>
                                <br />
                                <label className="input">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Type your Phone"
                                    />
                                    <FaPhone className="text-2xl" />
                                </label>
                            </div>
                        </div>
                        <div className="relative">
                            <label htmlFor="name">Message</label>
                            <br />
                            <textarea
                                required
                                placeholder="Write Message.."
                                rows={5}
                                className="w-full border border-gray-200 px-5 py-2"
                            />
                            <IoMdMail className="text-2xl absolute top-8 right-2" />
                        </div>
                        <button className="btn w-full services text-white">Request for a  Meeting </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;
