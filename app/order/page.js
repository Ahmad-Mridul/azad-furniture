// "use client";
// import Image from "next/image";
// import React, { useState, useMemo } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import chair from "@/public/products/chair.png";

// const Page = () => {
//     // Each product has its own quantity
//     const [items, setItems] = useState([
//         { id: 1, name: "Chair", price: 5000, quantity: 1, img: chair },
//         { id: 2, name: "Chair", price: 5000, quantity: 2, img: chair },
//     ]);

//     const [promo, setPromo] = useState("");

//     // ---------- Helpers ----------
//     const increment = (id) =>
//         setItems((prev) =>
//             prev.map((item) =>
//                 item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//             )
//         );

//     const decrement = (id) =>
//         setItems((prev) =>
//             prev.map((item) =>
//                 item.id === id
//                     ? {
//                           ...item,
//                           quantity: item.quantity > 1 ? item.quantity - 1 : 1,
//                       }
//                     : item
//             )
//         );

//     const removeItem = (id) =>
//         setItems((prev) => prev.filter((item) => item.id !== id));

//     // ---------- Calculations ----------
//     const subtotal = useMemo(
//         () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
//         [items]
//     );
//     const shipping = items.length > 0 ? 40 : 0;
//     const discount = promo === "SAVE20" ? 20 : 0;
//     const total = subtotal + shipping - discount;

//     return (
//         <div className="bg-white text-black">
//             <div className="w-[90%] mx-auto py-20">
//                 <button className="btn text-black bg-white border-none shadow-none hover:bg-gray-400 hover:text-white">
//                     <FaArrowLeftLong /> Checkout
//                 </button>

//                 <div className="flex gap-6 mt-10">
//                     {/* ------------------ Cart Section ------------------ */}
//                     <div className="w-3/4">
//                         <h1 className="text-xl font-semibold mb-4 text-[#5B5758]">
//                             My Cart
//                         </h1>

//                         {items.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="p-6 border-b-2 border-b-gray-200 flex items-center gap-4"
//                             >
//                                 <Image
//                                     src={item.img}
//                                     alt={item.name}
//                                     width={100}
//                                     height={100}
//                                 />

//                                 {/* Product Details */}
//                                 <div className="flex flex-1 justify-between items-center">
//                                     <div>
//                                         <p className="font-medium text-2xl">
//                                             {item.name}
//                                         </p>
//                                         <p className="text-xl text-[#16872F]">
//                                             {item.price} BDT / per piece
//                                         </p>

//                                         {/* Quantity Controls */}
//                                         <div className="flex items-center space-x-2 mt-2">
//                                             <button
//                                                 onClick={() =>
//                                                     decrement(item.id)
//                                                 }
//                                                 className="btn w-12 h-12 border border-gray-400 rounded-full bg-transparent text-black text-2xl flex items-center justify-center"
//                                             >
//                                                 -
//                                             </button>

//                                             <p className="w-8 text-center text-lg">
//                                                 {item.quantity}
//                                             </p>

//                                             <button
//                                                 onClick={() =>
//                                                     increment(item.id)
//                                                 }
//                                                 className="btn w-12 h-12 border border-gray-400 rounded-full bg-transparent text-black text-2xl flex items-center justify-center"
//                                             >
//                                                 +
//                                             </button>
//                                         </div>
//                                     </div>

//                                     {/* Price Section */}
//                                     <div className="flex gap-5 items-center">
//                                         <p className="text-xl text-[#16872F]">
//                                             {item.price * item.quantity} BDT
//                                         </p>
//                                         <button
//                                             onClick={() => removeItem(item.id)}
//                                             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white hover:bg-gray-600 transition border-0 text-2xl"
//                                         >
//                                             ×
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* ------------------ Summary Section ------------------ */}
//                     <div className="w-1/4 p-4">
//                         <div className="w-full bg-white text-black p-6 rounded-xl shadow-md space-y-6">
//                             {/* Delivery Instruction */}
// <div>
//     <p className="text-sm font-medium mb-2">
//         Delivery instruction (optional)
//     </p>
//     <textarea
//         className="w-full h-24 border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
//         placeholder="Write a note to seller..."
//     />
// </div>

//                             {/* Promo Code */}
//                             <div>
//                                 <p className="text-sm font-medium mb-2">
//                                     Apply Promo code
//                                 </p>
//                                 <div className="flex">
//                                     <input
//                                         type="text"
//                                         value={promo}
//                                         onChange={(e) =>
//                                             setPromo(e.target.value)
//                                         }
//                                         placeholder="Enter promotional code..."
//                                         className="flex-1 border border-gray-200 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
//                                     />
//                                     <button className="px-5 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 text-sm">
//                                         Apply
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Order Info */}
//                             <div className="space-y-2 text-sm">
//                                 <div className="flex justify-between">
//                                     <span>Subtotal</span>
//                                     <span className="text-green-600">
//                                         BDT {subtotal}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Shipping Cost</span>
//                                     <span className="text-green-600">
//                                         BDT {shipping}
//                                     </span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Discount</span>
//                                     <span className="text-green-600">
//                                         BDT {discount}
//                                     </span>
//                                 </div>
//                                 <hr className="my-2" />
//                                 <div className="flex justify-between font-semibold text-base">
//                                     <span>Total</span>
//                                     <span className="text-green-600">
//                                         BDT {total}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Checkout Button */}
//                             <button className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-medium hover:opacity-90">
//                                 Proceed to checkout
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import chair from "@/public/products/chair.png";

export default function Page() {
    // ---------------------------
    // Data
    // ---------------------------
    const initialProducts = [
        { id: 1, name: "Chair", price: 5000, image: chair },
        { id: 2, name: "Chair Deluxe", price: 7000, image: chair },
        { id: 3, name: "Chair Deluxe", price: 7000, image: chair },
        { id: 4, name: "Chair Deluxe", price: 7000, image: chair },
    ];

    // ---------------------------
    // State
    // ---------------------------
    const [cart, setCart] = useState(
        initialProducts.map((p) => ({ ...p, quantity: 1 }))
    );
    const [promo, setPromo] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);

    // ---------------------------
    // Handlers
    // ---------------------------
    const increment = (id) =>
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );

    const decrement = (id) =>
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                      }
                    : item
            )
        );

    const removeItem = (id) =>
        setCart((prev) => prev.filter((item) => item.id !== id));

    const applyPromo = () => {
        if (promo.trim().toLowerCase() === "dis10") {
            setPromoApplied(true);
        } else {
            setPromoApplied(false);
            alert("Invalid promo code");
        }
    };

    // ---------------------------
    // Calculations
    // ---------------------------
    const subtotal = useMemo(
        () => cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
        [cart]
    );
    const shipping = cart.length > 0 ? 40 : 0;
    const discount = promoApplied ? subtotal * 0.1 : 0;
    const total = subtotal + shipping - discount;

    // ---------------------------
    // Render
    // ---------------------------
    return (
        <div className="bg-white text-black">
            <div className="w-[90%] mx-auto py-20">
                {/* Back button */}
                <button className="btn text-black bg-white border-none shadow-none hover:bg-gray-400 hover:text-white">
                    <FaArrowLeftLong /> Checkout
                </button>

                <div className="flex gap-6 mt-10">
                    {/* Cart Section */}
                    <div className="w-3/4">
                        <h1 className="text-xl font-semibold mb-4 text-[#5B5758]">
                            My Cart
                        </h1>

                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="p-6 border-b-2 border-b-gray-200 flex items-center gap-4"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="flex flex-1 justify-between items-center">
                                    <div>
                                        <p className="font-medium text-2xl">
                                            {item.name}
                                        </p>
                                        <p className="text-xl text-[#16872F]">
                                            {item.price} BDT / per piece
                                        </p>

                                        <div className="flex items-center space-x-2 mt-2">
                                            <button
                                                onClick={() =>
                                                    decrement(item.id)
                                                }
                                                className="btn w-12 h-12 border border-gray-400 rounded-full bg-transparent text-black text-2xl flex items-center justify-center"
                                            >
                                                -
                                            </button>
                                            <p className="w-8 text-center text-lg">
                                                {item.quantity}
                                            </p>
                                            <button
                                                onClick={() =>
                                                    increment(item.id)
                                                }
                                                className="btn w-12 h-12 border border-gray-400 rounded-full bg-transparent text-black text-2xl flex items-center justify-center"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 items-center">
                                        <p className="text-xl text-[#16872F]">
                                            {item.price * item.quantity} BDT
                                        </p>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="btn w-8 h-8 flex items-center justify-center rounded-full bg-gray-500 text-white hover:bg-gray-600 transition border-0 text-2xl"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="w-1/4 p-4">
                        <div>
                            <p className="text-sm font-medium mb-2">
                                Delivery instruction (optional)
                            </p>
                            <textarea
                                className="w-full h-24 border border-gray-200 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                                placeholder="Write a note to seller..."
                            />
                        </div>
                        <div className="w-full max-w-sm mx-auto bg-white text-black p-6 rounded-xl shadow-md space-y-6">
                            {/* Promo Code */}
                            <div>
                                <p className="text-sm font-medium mb-2">
                                    Apply Promo code
                                </p>
                                <div className="flex">
                                    <input
                                        type="text"
                                        value={promo}
                                        onChange={(e) =>
                                            setPromo(e.target.value)
                                        }
                                        placeholder="Enter promotional code..."
                                        className="flex-1 border border-gray-200 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                                    />
                                    <button
                                        onClick={applyPromo}
                                        className="px-5 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 text-sm"
                                    >
                                        Apply
                                    </button>
                                </div>
                                {promoApplied && (
                                    <p className="text-green-600 text-xs mt-1">
                                        10% discount applied!
                                    </p>
                                )}
                            </div>

                            {/* Order Info */}
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-green-600">
                                        BDT {subtotal}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping Cost</span>
                                    <span className="text-green-600">
                                        BDT {shipping}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Discount</span>
                                    <span className="text-green-600">
                                        BDT {discount.toFixed(0)}
                                    </span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between font-semibold text-base">
                                    <span>Total</span>
                                    <span className="text-green-600">
                                        BDT {total.toFixed(0)}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-medium hover:opacity-90">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
