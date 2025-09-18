import AppProvider from './provider'
import AppRouter from './router'
import { ThemeProvider } from '@/components/theme/theme-provider'

const App = () => {
    return (
        <AppProvider>
            <ThemeProvider
                defaultTheme="dark"
                storageKey="content-app-theme">
                <AppRouter />
            </ThemeProvider>
        </AppProvider>
    )
}

export default App
