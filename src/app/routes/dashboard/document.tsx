import { Search, MoreHorizontal, ChevronLeft, FileText, Plus } from 'lucide-react'
import { useState, type FC } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

const Document: FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

    return (
        <div className="flex h-screen bg-background text-foreground">
            {/* Left Sidebar */}
            <div
                className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-sidebar-accent border-r border-sidebar-border flex flex-col fixed h-screen z-20`}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
                    <h1 className="text-lg font-semibold text-white">Docs</h1>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-gray-400 hover:text-white">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 text-gray-400 hover:text-white"
                            onClick={() => setSidebarOpen(false)}>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Pages Section */}
                <div className="flex-1 p-4">
                    <div className="mb-4">
                        <h2 className="text-sm font-medium text-gray-400 mb-3">Pages</h2>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
                                <FileText className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-300">Project Overview Doc</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-md bg-gray-700 cursor-pointer">
                                <div className="h-4 w-4 rounded-full bg-yellow-500 flex items-center justify-center">
                                    <span className="text-xs">😃</span>
                                </div>
                                <span className="text-sm text-white font-medium">Untitled</span>
                            </div>
                        </div>
                    </div>

                    {/* Add Page Button */}
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-foreground hover:bg-primary/20">
                        <Plus className="h-4 w-4" />
                        <span className="text-sm">Add page</span>
                    </Button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
                {/* Scrollable Content Section (includes gradient header) */}
                <div className="flex-1 bg-background/70 relative overflow-y-auto minimal-scrollbar">
                    {/* Top Gradient Header */}
                    <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative">
                        {!sidebarOpen && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-4 left-4 h-8 w-8 p-0 text-white/80 hover:text-white hover:bg-white/10"
                                onClick={() => setSidebarOpen(true)}>
                                <ChevronLeft className="h-4 w-4 rotate-180" />
                            </Button>
                        )}
                    </div>
                    <div className="flex flex-col items-start px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pt-8">
                        {/* Emoji Icon */}
                        <div
                            className="w-16 h-16 bg-card rounded-full flex items-center justify-center text-5xl mb-4"
                            style={{ marginLeft: '-1.5rem' }}>
                            😃
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Social Media App Design</h1>

                        {/* User Info */}
                        <div className="flex items-center gap-3 mb-8">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                                <AvatarFallback className="bg-blue-600 text-white text-xs">NH</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-400">Nikhil Harmalkar</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">Last updated Today at 8:49 pm</span>
                        </div>

                        {/* Editor Input */}
                        <div className="w-full">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, enim nostrum necessitatibus, voluptatum voluptatibus
                            odio molestiae ipsum illum doloribus, nam velit distinctio rem sunt fugit asperiores vitae labore natus! Consectetur.
                            Cupiditate vitae doloremque id praesentium error provident quaerat qui nam adipisci in perferendis ratione, dignissimos,
                            nihil magnam? Nesciunt eos ab a praesentium, reprehenderit cumque incidunt sint sunt officia? Esse, beatae. Ullam
                            architecto dicta officia temporibus repudiandae officiis eos! Rem, dolorum tenetur assumenda quae officia maxime.
                            Consequuntur fugiat, reprehenderit autem magnam labore, aliquam sed assumenda illo eligendi nihil, provident quis omnis!
                            Totam quas provident enim exercitationem quod dolore consequuntur, distinctio nisi neque cum maxime laudantium est tempora
                            expedita deserunt aspernatur nam reiciendis optio officia fugit laboriosam sint a. Consequatur, ut sequi? Sapiente libero
                            quaerat accusantium atque tempora eos illo aliquid adipisci accusamus dolore dignissimos dolores sit eveniet laboriosam
                            rerum vel cumque, ad amet quae delectus? Excepturi illum sapiente dolores saepe odio! Voluptatibus id minus doloribus
                            numquam labore possimus alias nobis, placeat ipsum corrupti, eaque et voluptatem temporibus modi repudiandae natus ut
                            accusamus tenetur. Maiores exercitationem quidem modi cupiditate dolor quas molestias. Corrupti, nobis repellat nihil
                            molestias sint laborum velit iste quod, ducimus, porro earum illum maxime quis non. Dolor voluptatum error ab eum sit,
                            vel, repudiandae eveniet et corporis, dolorem fugit! Deserunt optio tempore qui vitae nemo fuga nesciunt quam harum iusto
                            obcaecati voluptates, quibusdam earum consectetur exercitationem recusandae nam veniam sint porro facilis esse, aliquid
                            temporibus eius architecto. Amet, aliquid. Illum similique quaerat esse modi. Quo tempore reiciendis distinctio voluptates
                            consequatur saepe pariatur nihil asperiores. Quisquam obcaecati laborum autem error. Eaque voluptatibus accusamus voluptas
                            mollitia modi assumenda facere tempore at! Nihil odio aut blanditiis necessitatibus inventore saepe consectetur ea
                            assumenda! Nemo modi eos minus at animi ipsa ipsum, magnam ea fugiat hic nostrum eligendi officiis, perspiciatis ullam?
                            Veritatis, repudiandae veniam. In expedita aut laboriosam laborum harum recusandae libero excepturi, veniam, quis
                            molestiae, quisquam quod eligendi quibusdam nobis minima porro quae voluptatum quaerat aliquid nihil nulla ipsam! Autem et
                            minima quibusdam! Voluptatibus consequuntur, doloremque dolorum eaque distinctio beatae dignissimos facere. Aperiam,
                            accusantium? Rem cumque est placeat debitis sapiente quod obcaecati tempore ratione! Fugiat eos cumque harum enim quaerat
                            sequi accusamus voluptatum. Aliquid nemo doloribus minima eius ut qui in ipsa ipsam nesciunt praesentium et, dolorem
                            accusantium repudiandae repellendus velit perferendis, repellat sint laboriosam alias iusto est. Quos nisi perspiciatis
                            eos fugit. Assumenda, reiciendis provident. Voluptatibus beatae voluptas eveniet incidunt maxime unde voluptate ipsa quae
                            distinctio deleniti! Dolor debitis blanditiis neque eius numquam nihil expedita, harum consectetur? Pariatur modi error
                            impedit animi? Voluptatem voluptatibus recusandae rerum nobis aliquid atque facilis laborum iusto et ad repellat cum
                            tenetur ullam asperiores exercitationem, iure id. Sit iste sint laborum harum assumenda, illum fugit? Id, quod?
                            Perspiciatis maxime fugit quaerat quam impedit enim, placeat, praesentium veniam labore officiis dolores eaque rem commodi
                            itaque velit autem sunt molestias quibusdam consectetur nostrum minima facilis consequuntur ex sit. Accusamus! Qui nemo
                            quod eum incidunt at esse ipsa, a reprehenderit labore magnam, pariatur quam amet hic quasi. Fugiat omnis nulla mollitia.
                            Reiciendis nihil error porro atque architecto eius nostrum est? Possimus facilis illum id, consequatur ut tempore ratione
                            vero rerum? Ea nostrum suscipit recusandae non et perferendis ut eius quia, exercitationem sunt. Delectus vitae magnam
                            nulla quibusdam harum est id.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Document
