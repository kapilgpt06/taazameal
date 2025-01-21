import BottomNavigation from "@/components/BottomNavigation";
import DesktopWarning from "@/components/DesktopWarning";

export default function Layout({ children }) {
    return (
        <div>
            <div className="hidden sm:flex h-screen w-full bg-gradient-to-br from-orange-500 to-orange-600 items-center justify-center">
                <DesktopWarning />
            </div>
            <div className="block sm:hidden">
                {children}
                <BottomNavigation />
            </div>
        </div>
    )
}