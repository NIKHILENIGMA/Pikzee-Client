import { type FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className="bg-background text-secondary-foreground py-4 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <span className="text-sm">&copy; {new Date().getFullYear()} Content App. All rights reserved.</span>
                <nav className="flex space-x-4 mt-2 md:mt-0">
                    <a
                        href="/"
                        className="hover:underline">
                        Home
                    </a>
                    <a
                        href="/about"
                        className="hover:underline">
                        About
                    </a>
                    <a
                        href="/contact"
                        className="hover:underline">
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
