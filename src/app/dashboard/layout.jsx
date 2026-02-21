import BottomNavBar from "@/components/site/bottomNavBar";
import Header from "@/components/site/header";
import SideBar from "@/components/site/sideBar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      {children}
      <BottomNavBar />
    </>
  );
}
