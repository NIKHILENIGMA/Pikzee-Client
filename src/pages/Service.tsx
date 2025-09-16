import { type FC } from 'react'
import { Link } from 'react-router'

const Service: FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-background text-secondary-foreground px-4 py-8">
            <section className="w-full max-w-2xl  rounded-lg shadow-md p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl font-bold  mb-4 text-center">About Our Services</h1>
                <p className="text-gray-700 text-base md:text-lg mb-6 text-center">
                    We provide a wide range of digital solutions tailored to your needs. Our team is dedicated to delivering high-quality services
                    that help your business grow and succeed in the digital world.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-3 ">
                            {/* Example icon */}
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                        <span className="">Custom Web Development</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-3">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                        <span className="">Mobile App Solutions</span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-6 h-6 mr-3">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </span>
                        <span className="">UI/UX Design & Consulting</span>
                    </li>
                </ul>
                <div className="mt-8 text-center">
                    <Link
                        to="/contact"
                        className="inline-block bg-background text-primary-foreground px-6 py-2 rounded-md shadow transition">
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Service
