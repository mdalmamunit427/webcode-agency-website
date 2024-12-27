import React from 'react'
import HeadingSection from '../../components/HeadingSection'

import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router';

const teamMembers = [
    {
        id: 1,
        image: "/images/members/person1.png",
        name: "John Doe",
        role: "CEO",
        linkedIn: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    {
        id: 2,
        image: "/images/members/person2.png",
        name: "Jane Smith",
        role: "CTO",
        linkedIn: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        facebook: "https://facebook.com/janesmith",
    },
    {
        id: 3,
        image: "/images/members/person3.png",
        name: "Mark Johnson",
        role: "Designer",
        linkedIn: "https://linkedin.com/in/markjohnson",
        twitter: "https://twitter.com/markjohnson",
        instagram: "https://instagram.com/markjohnson",
        facebook: "https://facebook.com/markjohnson",
    },
    {
        id: 4,
        image: "/images/members/person4.png",
        name: "Emily Carter",
        role: "Developer",
        linkedIn: "https://linkedin.com/in/emilycarter",
        twitter: "https://twitter.com/emilycarter",
        instagram: "https://instagram.com/emilycarter",
        facebook: "https://facebook.com/emilycarter",
    },
];

const TeamSection = () => {
  return (
    <div className='bg-colorBg'>
        <div className='section-container'>
            <HeadingSection heading="Meet The Experts" subheading="Our Team" description=""/>

            {/* team member cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {
                    teamMembers.map((member, i) => (
                        <div key={i} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                            <img src={member.image} alt={member.name} className='w-full h-56 object-cover'/>

                            {/* content */}
                            <div className='p-5'>
                                <h3 className='text-xl font-semibold text-gray-800 mb-2'>{member.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{member.role}</p>

                                {/* social icons */}

                                <div className='flex space-x-4 mb-5 items-center'>
                                    <Link to={member.linkedIn}><FaLinkedinIn className='text-blue-600 hover:text-blue-800'/></Link>
                                    <Link to={member.twitter}><FaTwitter className='text-blue-600 hover:text-blue-800'/></Link>
                                    <Link to={member.instagram}><FaInstagram className='text-blue-600 hover:text-blue-800'/></Link>
                                    <Link to={member.facebook}><FaFacebookF className='text-blue-600 hover:text-blue-800'/></Link>
                                </div>

                                {/* contact button */}
                                <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300'>Conatct {member.name.split(" ")[0]}</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TeamSection