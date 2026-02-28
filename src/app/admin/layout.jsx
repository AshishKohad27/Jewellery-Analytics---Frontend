import BottomNavBar from "@/components/site/BottomNavBar";
import Header from "@/components/site/Header";
import SideBar from "@/components/site/SideBar";

export default function AdminDataLayout({ children }) {
  return (
    <>
      <Header />
      <SideBar />
      {children}
      <BottomNavBar />
    </>
  );
}
