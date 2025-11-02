import { type FC, type ReactNode } from 'react'

const ContentLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return <div className="w-full min-h-screen bg-background text-foreground">{children}</div>
}

export default ContentLayout
