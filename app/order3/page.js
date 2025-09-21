// app/checkout/page.tsx (Next.js App Router)
"use client";
import { useState } from "react";
// import { CreditCard, Paypal, Apple, Wallet } from "lucide-react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaGooglePay, FaPaypal } from "react-icons/fa";
import { LiaApplePay } from "react-icons/lia";
export default function CheckoutPage3() {
    const [selectedCard, setSelectedCard] = useState("credit");

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Payment Section */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">Payment</h2>

                    {/* Saved Cards */}
                    <div className="space-y-3">
                        {/* Credit Card */}
                        <div
                            className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer ${
                                selectedCard === "credit"
                                    ? "bg-red-50 border-red-400"
                                    : ""
                            }`}
                            onClick={() => setSelectedCard("credit")}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    checked={selectedCard === "credit"}
                                    onChange={() => setSelectedCard("credit")}
                                />
                                <span className="font-medium">Credit Card</span>
                                <span className="text-gray-500">
                                    **** **** **** 6522
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-500">07/29</span>
                                <button className="text-red-500">Edit</button>
                            </div>
                        </div>

                        {/* Visa Card */}
                        <div
                            className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer ${
                                selectedCard === "visa"
                                    ? "bg-red-50 border-red-400"
                                    : ""
                            }`}
                            onClick={() => setSelectedCard("visa")}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="radio"
                                    checked={selectedCard === "visa"}
                                    onChange={() => setSelectedCard("visa")}
                                />
                                <span className="font-medium">Visa Card</span>
                                <span className="text-gray-500">
                                    **** **** **** 6522
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-500">07/29</span>
                                <button className="text-red-500">Edit</button>
                            </div>
                        </div>
                    </div>

                    {/* Add Payment Option */}
                    <div className="mt-6">
                        <h3 className="text-sm font-semibold mb-3">
                            Add Payment Option
                        </h3>
                        <div className="grid gap-3">
                            <button className="flex bg-gray-200 text-black items-center gap-3 p-3 rounded-xl hover:bg-gray-100">
                                <CiCreditCard1 />
                                Credit/Debit Card
                            </button>
                            <button className="flex bg-gray-200 text-black items-center gap-3 p-3 rounded-xl hover:bg-gray-100">
                                <FaPaypal /> Paypal
                            </button>
                            <button className="flex bg-gray-200 text-black items-center gap-3 p-3 rounded-xl hover:bg-gray-100">
                                <LiaApplePay /> Apple Pay
                            </button>
                            <button className="flex bg-gray-200 text-black items-center gap-3 p-3 rounded-xl hover:bg-gray-100">
                                <FaGooglePay /> Google Pay
                            </button>
                        </div>
                    </div>
                </div>

                {/* Order Info Section */}
                <div className="bg-white rounded-2xl shadow p-6 h-fit">
                    <h2 className="text-lg font-semibold mb-4">Order Info</h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span>4 products</span>
                            <span className="text-green-600 font-medium">
                                BDT 480
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Cost</span>
                            <span className="text-green-600 font-medium">
                                BDT 40
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Discount</span>
                            <span className="text-green-600 font-medium">
                                BDT 20
                            </span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-base">
                            <span>Total</span>
                            <span className="text-green-600">BDT 500</span>
                        </div>
                    </div>
                    <button className="w-full mt-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-medium">
                        Payment (BDT 500)
                    </button>
                </div>
            </div>
        </div>
    );
}
