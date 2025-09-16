import type { FC } from 'react'
import { Editor } from '../components/Editor'

const EditorPage: FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
            <div className="flex min-h-screen flex-col items-center justify-center gap-4 py-4 sm:px-5">
                <div className="flex w-full max-w-screen-lg items-center gap-2 px-4">
                    <h1 className="text-2xl font-bold">My Custom Editor</h1>
                </div>
                <Editor />
            </div>
        </div>
    )
}

export default EditorPage
