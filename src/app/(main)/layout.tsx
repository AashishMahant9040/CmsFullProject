import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/common/Header";


export const metadata = {
    title: "Authentication - My Blogging Website",
    description: "Log in or sign up to access your account.",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="w-full bg-[#06040B]">
            <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-[#06040B]">

              <div className="w-full">
                <Header />
                {children}
              </div>

            </main>
          </SidebarProvider>
            </body>
        </html>
    );
}
