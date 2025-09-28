import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { MediaUploader } from '@/features/media-scheduler'

const UploadIcon = () => (
    <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
    </svg>
)

const VideoIcon = () => (
    <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect
            x="1"
            y="5"
            width="15"
            height="14"
            rx="2"
            ry="2"></rect>
    </svg>
)

const ImageIcon = () => (
    <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"></rect>
        <circle
            cx="8.5"
            cy="8.5"
            r="1.5"></circle>
        <polyline points="21,15 16,10 5,21"></polyline>
    </svg>
)

const TwitterIcon = () => (
    <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
)

const LinkedInIcon = () => (
    <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
        <rect
            x="2"
            y="9"
            width="4"
            height="12"></rect>
        <circle
            cx="4"
            cy="4"
            r="2"></circle>
    </svg>
)

const LibraryIcon = () => (
    <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24">
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"></rect>
        <rect
            x="7"
            y="7"
            width="3"
            height="3"></rect>
        <rect
            x="14"
            y="7"
            width="3"
            height="3"></rect>
        <rect
            x="7"
            y="14"
            width="10"
            height="3"></rect>
    </svg>
)

type Platform = 'youtube' | 'instagram' | 'twitter' | 'linkedin'

interface PostData {
    title: string
    description: string
    media?: File
    mediaUrl?: string
    platform: Platform
    options: {
        youtube: { visibility: 'public' | 'private' }
        instagram: { carousel: boolean }
        twitter: { thread: boolean }
        linkedin: { postType: 'document' | 'video' | 'text' }
    }
}

const platformLimits = {
    youtube: { title: 100, description: 5000 },
    instagram: { title: 0, description: 2200 },
    twitter: { title: 0, description: 280 },
    linkedin: { title: 0, description: 3000 }
}

const platformColors = {
    youtube: 'border-red-500 bg-red-900',
    instagram: 'border-pink-500 bg-pink-900',
    twitter: 'border-blue-500 bg-blue-900',
    linkedin: 'border-blue-600 bg-blue-900'
}

export default function MediaScheduler() {
    const [activePlatform, setActivePlatform] = useState<Platform>('youtube')
    const [postData, setPostData] = useState<PostData>({
        title: '',
        description: '',
        platform: 'youtube',
        options: {
            youtube: { visibility: 'public' },
            instagram: { carousel: false },
            twitter: { thread: false },
            linkedin: { postType: 'text' }
        }
    })

    const handleMediaUpload = (file: File, url: string) => {
        setPostData((prev) => ({ ...prev, media: file, mediaUrl: url }))
    }

    const handleTitleChange = (value: string) => {
        const limit = platformLimits[activePlatform].title
        if (limit === 0 || value.length <= limit) {
            setPostData((prev) => ({ ...prev, title: value }))
        }
    }

    const handleDescriptionChange = (value: string) => {
        const limit = platformLimits[activePlatform].description
        if (value.length <= limit) {
            setPostData((prev) => ({ ...prev, description: value }))
        }
    }

    const handlePlatformChange = (platform: Platform) => {
        setActivePlatform(platform)
        setPostData((prev) => ({ ...prev, platform }))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOptionChange = (platform: Platform, key: string, value: any) => {
        setPostData((prev) => ({
            ...prev,
            options: {
                ...prev.options,
                [platform]: {
                    ...prev.options[platform],
                    [key]: value
                }
            }
        }))
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="flex h-screen">
                <div className="w-[70%] p-6 flex flex-col">
                    <div className="flex-1 flex flex-col">
                        {/* Platform Selection Tabs */}
                        <div className="mb-6">
                            <Tabs
                                value={activePlatform}
                                onValueChange={(value) => handlePlatformChange(value as Platform)}>
                                <TabsList className="grid w-full  max-w-2xl grid-cols-4 h-12">
                                    <TabsTrigger
                                        value="youtube"
                                        className="flex  items-center gap-2 text-sm">
                                        <VideoIcon />
                                        YouTube
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="instagram"
                                        className="flex items-center gap-2 text-sm">
                                        <ImageIcon />
                                        Instagram
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="twitter"
                                        className="flex items-center gap-2 text-sm">
                                        <TwitterIcon />X
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="linkedin"
                                        className="flex items-center gap-2 text-sm">
                                        <LinkedInIcon />
                                        LinkedIn
                                    </TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        {/* Central Media Display */}
                        <div
                            className={`flex-1 rounded-lg border-2 border-dashed transition-colors border-border bg-muted p-8 flex items-center justify-center min-h-[500px]`}>
                            {postData.mediaUrl ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    {postData.media?.type.startsWith('image/') ? (
                                        <img
                                            src={postData.mediaUrl || '/placeholder.svg'}
                                            alt="Preview"
                                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                                        />
                                    ) : postData.media?.type.startsWith('video/') ? (
                                        <video
                                            src={postData.mediaUrl}
                                            controls
                                            className="max-w-full max-h-full rounded-lg shadow-lg"
                                        />
                                    ) : (
                                        <div className="text-center">
                                            <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                                                <span className="text-gray-500 text-sm">Media Preview</span>
                                            </div>
                                            <p className="text-gray-600">{postData.media?.name}</p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <ImageIcon />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground/80 mb-2">No Media Selected</h3>
                                    <p className="text-foreground/60">Upload media to see preview for {activePlatform}</p>
                                </div>
                            )}
                        </div>

                        {/* Platform-Specific Visual Indicator */}
                        <div className="mt-4 flex items-center justify-center">
                            <div className={`px-4 py-2 rounded-full border ${platformColors[activePlatform]} flex items-center gap-2`}>
                                {activePlatform === 'youtube' && <VideoIcon />}
                                {activePlatform === 'instagram' && <ImageIcon />}
                                {activePlatform === 'twitter' && <TwitterIcon />}
                                {activePlatform === 'linkedin' && <LinkedInIcon />}
                                <span className="font-medium capitalize">{activePlatform} Preview</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] bg-sidebar-accent border-l border-border flex flex-col">
                    <div className="p-6 border-b border-border">
                        <h2 className="text-xl font-semibold">Media Editor</h2>
                        <p className="text-sm text-foreground/60">Configure your {activePlatform} post</p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6 minimal-scrollbar">
                        {/* Media Management Controls */}
                        <div className="space-y-3">
                            <h3 className="font-medium text-sm text-foreground/80">Media Management</h3>
                            <div className="space-y-2">
                                <Button
                                    className="w-full justify-start"
                                    variant="outline">
                                    <UploadIcon />
                                    Upload/Change Media
                                </Button>
                                <Button
                                    className="w-full justify-start"
                                    variant="outline">
                                    <LibraryIcon />
                                    Select from App Library
                                </Button>
                            </div>
                            {postData.media && (
                                <div className="text-xs text-gray-600 p-2 bg-muted rounded">
                                    <strong>Current:</strong> {postData.media.name}
                                </div>
                            )}
                            <MediaUploader
                                onUpload={handleMediaUpload}
                                currentMedia={postData.mediaUrl}
                                compact
                            />
                        </div>

                        {/* Platform-Specific Content Fields */}
                        <div className="space-y-4">
                            <h3 className="font-medium text-sm text-foreground/80">Content</h3>

                            {activePlatform === 'youtube' && (
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <Label className="text-sm font-medium mb-2 block">Title</Label>
                                        <Input
                                            value={postData.title}
                                            onChange={(e) => handleTitleChange(e.target.value)}
                                            placeholder="Enter video title..."
                                            className="w-full rounded-sm bg-background"
                                        />
                                        <p className="text-xs text-foreground/60 mt-1">
                                            {postData.title.length}/{platformLimits.youtube.title}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Description</label>
                                        <Textarea
                                            value={postData.description}
                                            onChange={(e) => handleDescriptionChange(e.target.value)}
                                            placeholder="Enter video description..."
                                            className="min-h-24 resize-none"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            {postData.description.length}/{platformLimits.youtube.description}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Visibility</label>
                                        <Select
                                            value={postData.options.youtube.visibility}
                                            onValueChange={(value) => handleOptionChange('youtube', 'visibility', value)}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="public">Public</SelectItem>
                                                <SelectItem value="private">Private</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}

                            {activePlatform === 'instagram' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Caption</label>
                                        <Textarea
                                            value={postData.description}
                                            onChange={(e) => handleDescriptionChange(e.target.value)}
                                            placeholder="Write your Instagram caption..."
                                            className="min-h-24 resize-none"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            {postData.description.length}/{platformLimits.instagram.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="carousel"
                                            checked={postData.options.instagram.carousel}
                                            onCheckedChange={(checked) => handleOptionChange('instagram', 'carousel', checked)}
                                        />
                                        <label
                                            htmlFor="carousel"
                                            className="text-sm">
                                            Enable carousel
                                        </label>
                                    </div>
                                </div>
                            )}

                            {activePlatform === 'twitter' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Tweet</label>
                                        <Textarea
                                            value={postData.description}
                                            onChange={(e) => handleDescriptionChange(e.target.value)}
                                            placeholder="What's happening?"
                                            className="min-h-20 resize-none"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            {postData.description.length}/{platformLimits.twitter.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="thread"
                                            checked={postData.options.twitter.thread}
                                            onCheckedChange={(checked) => handleOptionChange('twitter', 'thread', checked)}
                                        />
                                        <label
                                            htmlFor="thread"
                                            className="text-sm">
                                            Create as thread
                                        </label>
                                    </div>
                                </div>
                            )}

                            {activePlatform === 'linkedin' && (
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Post Content</label>
                                        <Textarea
                                            value={postData.description}
                                            onChange={(e) => handleDescriptionChange(e.target.value)}
                                            placeholder="Share your professional update..."
                                            className="min-h-24 resize-none"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            {postData.description.length}/{platformLimits.linkedin.description}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium mb-2 block">Post Type</label>
                                        <Select
                                            value={postData.options.linkedin.postType}
                                            onValueChange={(value) => handleOptionChange('linkedin', 'postType', value)}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="text">Text Post</SelectItem>
                                                <SelectItem value="document">Document</SelectItem>
                                                <SelectItem value="video">Video</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="p-6 border-t border-muted-foreground bg-sidebar-accent">
                        <div className="space-x-2 flex">
                            <Button variant="default">Schedule Post</Button>
                            <Button
                                variant="outline"
                                className="">
                                Save Draft
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
