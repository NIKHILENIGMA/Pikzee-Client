import Router from "./app/Router";
import { ThemeProvider } from "./components/theme/theme-provider";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="content-app-theme">
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
