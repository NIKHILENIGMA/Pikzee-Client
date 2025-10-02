import { User, Bell, BarChart3, CreditCard, Receipt, Users, FolderOpen, Zap, Layers, Palette, Shield } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function SettingsLayout() {
    return (
        <div className="min-h-screen bg-background text-foreground dark">
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-sidebar border-r border-sidebar-border p-4 min-h-screen">
                    {/* Personal Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Personal</h3>
                        <div className="space-y-1">
                            <Button
                                variant="secondary"
                                className="w-full justify-start bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </Button>
                        </div>
                    </div>

                    {/* Account Section */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-muted-foreground mb-3">Account</h3>
                        <div className="space-y-1">
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <Bell className="mr-2 h-4 w-4" />
                                Notifications
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <BarChart3 className="mr-2 h-4 w-4" />
                                Usage
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <CreditCard className="mr-2 h-4 w-4" />
                                Plan
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <Receipt className="mr-2 h-4 w-4" />
                                Billing
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <Users className="mr-2 h-4 w-4" />
                                Users
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                                <FolderOpen className="mr-2 h-4 w-4" />
                                Projects
                            </Button>
                        </div>
                    </div>

                    {/* Other Sections */}
                    <div className="space-y-1 mb-6">
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                            <Zap className="mr-2 h-4 w-4" />
                            Actions
                            <span className="ml-auto text-xs bg-green-600 text-white px-2 py-0.5 rounded">Beta</span>
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                            <Layers className="mr-2 h-4 w-4" />
                            Fields
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                            <Palette className="mr-2 h-4 w-4" />
                            Branding
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent">
                            <Shield className="mr-2 h-4 w-4" />
                            Content Security
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-semibold">Profile</h1>
                    </div>

                    {/* Personal Info Section */}
                    <div className="mb-8">
                        <div className="mb-4">
                            <h2 className="text-lg font-medium mb-1">Personal Info</h2>
                            <p className="text-sm text-muted-foreground">Set up your profile.</p>
                        </div>

                        <Card className="p-6 bg-card border-border">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-16 w-16 bg-purple-500">
                                        <AvatarFallback className="text-white text-lg font-medium bg-purple-500">NH</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-medium text-lg">Nikhil Harmalkar</h3>
                                        <p className="text-sm text-muted-foreground">(UTC+05:30) Asia / Kolkata</p>
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm">
                                    Edit
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Authentication Section */}
                    <div className="mb-8">
                        <div className="mb-4">
                            <h2 className="text-lg font-medium mb-1">Authentication</h2>
                            <p className="text-sm text-muted-foreground">
                                Changes to your authentication will apply to all accounts you're a member of.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Card className="p-4 bg-card border-border">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-muted-foreground">nickharmalkar16@gmail.com</p>
                                    </div>
                                    <Button
                                        variant="link"
                                        className="text-blue-400 hover:text-blue-300">
                                        Manage on Adobe ↗
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-4 bg-card border-border">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium">Log Out Of All Active Sessions</p>
                                    <Button
                                        variant="outline"
                                        size="sm">
                                        Log Out
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Cookie Preferences Section */}
                    <div>
                        <div className="mb-4">
                            <h2 className="text-lg font-medium mb-1">Cookie Preferences</h2>
                            <p className="text-sm text-muted-foreground">Set how your data and cookie preferences are handled.</p>
                        </div>

                        <Card className="p-4 bg-card border-border">
                            <div className="flex items-center justify-between">
                                <p className="font-medium">Cookie Preferences</p>
                                <Button
                                    variant="outline"
                                    size="sm">
                                    Edit
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
