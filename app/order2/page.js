"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function CheckoutPage() {
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedDelivery, setSelectedDelivery] = useState("standard");

    const addresses = [
        {
            id: 1,
            title: "Lenny Cunningham",
            details: "21A Euston St, Croydon, London CR0 2AF, United Kingdom",
        },
        {
            id: 2,
            title: "Credit Cards: Card No 0123",
            details: "Linked to account ending in 7810",
        },
        {
            id: 3,
            title: "XX Conving Street, London SW1A 2AA",
            details: "Work Address",
        },
    ];

    const deliveryOptions = [
        {
            id: "standard",
            label: "Standard Delivery",
            price: 0,
            note: "Free, Always 4-5 working days",
        },
        { id: "express", label: "Express (1-2 days)", price: 60 },
        { id: "nextDay", label: "Next day delivery", price: 80 },
        { id: "sameDay", label: "Same day delivery", price: 120 },
        { id: "special", label: "Special delivery", price: 150 },
    ];

    const orderSummary = {
        subtotal: 460,
        shipping: 40,
        discount: 0,
        total: 500,
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-6">
                {/* Left Section */}
                <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
                    {/* Confirm Address */}
                    <h2 className="text-lg font-semibold mb-4">
                        Confirm delivery location
                    </h2>
                    <div className="space-y-4">
                        {addresses.map((addr) => (
                            <label
                                key={addr.id}
                                className={`block border rounded-lg p-4 cursor-pointer ${
                                    selectedAddress === addr.id
                                        ? "border-green-600"
                                        : "border-gray-200"
                                }`}
                            >
                                <input
                                    type="radio"
                                    name="address"
                                    checked={selectedAddress === addr.id}
                                    onChange={() => setSelectedAddress(addr.id)}
                                    className="mr-3 accent-green-600"
                                />
                                <span className="font-medium">
                                    {addr.title}
                                </span>
                                <p className="text-sm text-gray-600 mt-1">
                                    {addr.details}
                                </p>
                            </label>
                        ))}
                        <button className="text-sm text-red-500 hover:underline">
                            + Add different location
                        </button>
                    </div>

                    {/* Delivery Options */}
                    <h2 className="text-lg font-semibold mt-8 mb-4">
                        Delivery options
                    </h2>
                    <div className="space-y-3">
                        {deliveryOptions.map((opt) => (
                            <label
                                key={opt.id}
                                className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer ${
                                    selectedDelivery === opt.id
                                        ? "border-green-600"
                                        : "border-gray-200"
                                }`}
                            >
                                <div>
                                    <input
                                        type="radio"
                                        name="delivery"
                                        checked={selectedDelivery === opt.id}
                                        onChange={() =>
                                            setSelectedDelivery(opt.id)
                                        }
                                        className="mr-3 accent-green-600"
                                    />
                                    <span className="font-medium">
                                        {opt.label}
                                    </span>
                                    {opt.note && (
                                        <p className="text-sm text-gray-500 mt-1">
                                            {opt.note}
                                        </p>
                                    )}
                                </div>
                                <span
                                    className={`font-medium ${
                                        opt.price === 0
                                            ? "text-green-600"
                                            : "text-gray-800"
                                    }`}
                                >
                                    {opt.price === 0
                                        ? "Free"
                                        : `BDT ${opt.price}`}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-1/3 bg-white rounded-lg p-6 shadow-sm h-fit">
                    <h2 className="text-lg font-semibold mb-4">Order Info</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="text-green-600">
                                BDT {orderSummary.subtotal}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Cost</span>
                            <span className="text-green-600">
                                BDT {orderSummary.shipping}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-600">
                                BDT {orderSummary.discount}
                            </span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-base">
                            <span>Total</span>
                            <span className="text-green-600">
                                BDT {orderSummary.total}
                            </span>
                        </div>
                    </div>
                    <Link href="/order3" className="btn border-none mt-6 w-full py-3 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">
                        Proceed to Pay
                    </Link>
                </div>
            </div>
        </div>
    );
}
