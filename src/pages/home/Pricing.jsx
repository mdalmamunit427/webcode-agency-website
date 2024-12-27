import React, { useState } from 'react'
import HeadingSection from '../../components/HeadingSection'
import { list } from 'postcss';

const pricingPlans = [
    {
        name: "Freelancer",
        monthlyPrice: 25,
        yearlyPrice: 250, // 25 * 12
        saves: "$25 USD per month, paid annually",
        features: [
            "1 Project",
            "Basic Support",
            "Access to all templates",
            "5GB Storage",
        ],
    },
    {
        name: "Professional",
        monthlyPrice: 65,
        yearlyPrice: 650, // 65 * 12
        saves: "$55 USD per month, paid annually",
        features: [
            "5 Projects",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics",
        ],
    },
    {
        name: "Agency",
        monthlyPrice: 95,
        yearlyPrice: 950, // 95 * 12
        saves: "$95 USD per month, paid annually",
        features: [
            "Unlimited Projects",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration",
        ],
    },
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
    return (
        <div className='section-container'>
            <HeadingSection heading="Choose Your Plan" subheading="Pricing" description={"Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you."} />

            {/* toggle for yearly/monthly plan */}

            <div className='text-center mb-10'>
                <label className='inline-flex items-center cursor-pointer'>
                    <span className='mr-3 text-lg text-gray-600'>
                        {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
                    </span>
                    <div className='relative'>
                        <input type="checkbox" className='sr-only' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                        <div className='toggle-bg w-14 h-8 bg-gray-300 rounded-full'></div>
                        <div className={`toggle-circle absolute top-1 left-1 w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 ${isYearly ? "transform translate-x-6" : ""}`}></div>
                    </div>
                </label>
            </div>

            {/* princing plan */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    pricingPlans.map((plan) => (
                        <div key={plan.name} className='bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>

                            {/* top */}
                            <div className='p-5 text-center'>
                                <h3 className='text-2xl font-semibold text-gray-800 my-3'>{plan.name}</h3>
                                <p className='text-gray-500 mb-5'>Best for {plan.name.toLowerCase()}s</p>

                                {/* pricing */}
                                <div className='text-3xl font-bold text-gray-800'>
                                    ${
                                        isYearly ? plan.yearlyPrice : plan.monthlyPrice
                                    }
                                    <span className='text-sm text-gray-500'>/{isYearly ? "year" : "month"}</span>
                                </div>
                                <p className='mt-5'> {isYearly ? plan.saves : ""}</p>
                            </div>

                            {/* button */}
                            <div className='p-5 text-center'>
                                <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Choose {plan.name}</button>
                            </div>

                            {/* features */}
                            <div className='p-5 md:px-12 md:py-5'>
                                <ul className='text-center text-gray-600'>
                                    {
                                        plan.features.map((feature, index) => (
                                            <li key={index} className='flex items-center mb-2'>
                                                <svg
                                                    className="w-4 h-4 text-blue-600 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 12l5 5L20 7"
                                                    />
                                                </svg> {feature}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pricing