import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { FiActivity, FiCompass, FiTruck, FiCalendar } from "react-icons/fi";

const services = [
    {
        icon: FiCalendar,
        title: "Customizable Settings",
        description: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
    },
    {
        icon: FiCompass,
        title: "Developer-Friendly",
        description: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
    },
    {
        icon: FiActivity,
        title: "Responsive Design",
        description: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
    },
    {
        icon: FiTruck,
        title: "Cloud Integration",
        description: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
    },
]

const Services = () => {
    return (
        <div className='max-w-screen-2xl container bg-white mx-auto py-20 px-5'>
            <HeadingSection heading="Explore our range of professional services tailored to meet your business needs." subheading="Services" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus, excepturi eos eaque provident iusto sint hic nihil iste architecto temporibus quasi facere aliquam sed in repellendus cupiditate ipsa, quas quae sapiente. Perspiciatis repudiandae vel magni facilis nulla, ex et modi. Placeat nobis minima porro, mollitia molestiae dolores provident obcaecati!" />


            {/* services container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16'>
                {
                    services.map((service, index) => (
                        <div key={index} className='flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer'>
                            <service.icon className='text-blue-600 text-4xl mb-4' />
                            <p className='text-gray-600 mt-2 md:px-10'>{service.description}</p>
                        </div>
                    ))
                }
            </div>

            {/* button */}
            <div className='text-center'>
                <button className='bg-blue-600 text-white px-8 py-3 rounded-md  hover:bg-blue-700 transition'>
                    Explore More
                </button>
            </div>
        </div>
    )
}

export default Services