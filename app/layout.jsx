import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Provider } from "@/components/Provider";

export const metadata = {
  title: "PromptHub",
  description: "A place to share and discover prompts for ChatGPT.",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
