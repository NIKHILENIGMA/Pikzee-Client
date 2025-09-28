import { type FC } from 'react'

interface ProjectCardProps {
    title: string
    imageUrl: string
    fileSize?: string
}

const ProjectCard: FC<ProjectCardProps> = ({ title, imageUrl, fileSize = '0 MB' }) => {
    return (
        <article className="bg-card text-white rounded-[0.8rem] overflow-hidden shadow-md w-3/3 md:h-64">
            {/* Thumbnail */}
            <figure className="relative w-full h-[90%]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-fit"
                />
                {/* Notification Icon */}
                <button
                    aria-label="Notifications"
                    className="absolute top-2 right-2 bg-gray-800 bg-opacity-60 p-1 rounded-full hover:bg-opacity-80 transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="white"
                        className="w-5 h-5">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 10V3.5a1.5 1.5 0 00-3 0V10m-4 0a6 6 0 0112 0v5l2 2H4l2-2v-5z"
                        />
                    </svg>
                </button>
                <figcaption className="absolute bottom-2 left-2 text-sm font-medium">{title}</figcaption>
            </figure>

            {/* Footer */}
            <footer className="w-full h-[10%] flex justify-between items-center px-3 py-2 text-gray-400 text-sm">
                <span>{fileSize}</span>
                <button
                    aria-label="More options"
                    className="hover:text-gray-200 transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-4 h-4">
                        <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                    </svg>
                </button>
            </footer>
        </article>
    )
}

export default ProjectCard
