import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiArrowRight } from 'react-icons/fi'

const Newsletter = () => {
    return (
        <div className='section-container text-center'>
            <HeadingSection heading="Stay Updated with Our Newsletter" subheading="" description="Subscribe to our newsletter to get the latest news, updates, and offers. Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar." />

            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition'>
                    <span>Subscribe Now</span>
                </button>
                <button className='border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white text-blue-600 transition'>Learn More</button>
            </div>
        </div>
    )
}

export default Newsletter