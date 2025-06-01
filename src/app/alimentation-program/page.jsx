import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AlimentationProgram() {
    // List of recipes
    const recipes = [
        {
            id: 1,
            title: "Healthy Smoothie",
            description:
                "A delicious and nutritious smoothie with fresh fruits, greens, and a boost of protein.",
            image: "/smoothie.jpg",
        },
        {
            id: 2,
            title: "Quinoa Salad",
            description:
                "A healthy, protein-packed salad with quinoa, vegetables, and a tangy dressing.",
            image: "/salad.jpg",
        },
        {
            id: 3,
            title: "Avocado Toast",
            description:
                "A simple yet healthy meal with mashed avocado on whole-grain toast.",
            image: "/toast.jpg",
        },
        {
            id: 4,
            title: "Grilled Chicken Salad",
            description:
                "A protein-packed salad with grilled chicken, greens, and a light dressing.",
            image: "/chicken.jpg",
        },
        {
            id: 5,
            title: "Vegan Buddha Bowl",
            description:
                "A nourishing bowl with quinoa, roasted veggies, hummus, and avocado.",
            image: "/budha.jpg",
        },
        {
            id: 6,
            title: "Greek Yogurt Parfait",
            description:
                "A refreshing parfait made with Greek yogurt, granola, and fresh berries.",
            image: "/greek.jpg",
        },
        {
            id: 7,
            title: "Chia Pudding",
            description:
                "A creamy and healthy chia pudding made with coconut milk and topped with berries.",
            image: "/chia.jpg",
        },
    ];

    return (
        <>
            <div>
                {/* Navbar */}
                <Navbar />
                <div className="flex flex-col lg:flex-row items-center justify-between  lg:p-12 gap-6 mx-[2rem] lg:mx-[5rem] bg-blue-50 border-b border-blue-500">
                    {/* Text on the left */}
                    <div className="w-full lg:w-[600px]">
                        <img
                            src="/recipe-page.png"
                            alt="Hero Image"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mb-20">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-700 font-bold mb-4">
                            Fuel Your Body, One Meal at a Time
                        </h1>
                        <p className="text-lg text-gray-500 mb-8">
                            Unlock your full potential with a nutrition plan
                            that suits your lifestyle. From balanced meals to
                            energy-boosting snacks and recovery foods, we’re
                            here to help you stay on track and consistent as you
                            nourish your body for optimal health. Let’s make
                            every bite count!
                        </p>
                        
                    </div>
                </div>

                {/* Paragraph Section */}
                <div className="p-6 max-w-screen-xl mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-4xl text-blue-700 font-bold flex justify-center ">
                        Our Recipes
                    </h1>
                </div>

                {/* Recipe Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 p-6 max-w-screen-xl mx-auto">
                    {recipes.map((recipe) => (
                        <div
                            key={recipe.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl text-blue-700 font-semibold">
                                    {recipe.title}
                                </h3>
                                <p className="text-gray-500 mb-5">
                                    {recipe.description}
                                </p>
                                <Link
                                    href={`alimentation-program/${recipe.id}`} // Dynamic link
                                    className="text-white bg-blue-500 py-2.5 px-4 rounded-lg font-semibold"
                                >
                                    View Recipe
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
