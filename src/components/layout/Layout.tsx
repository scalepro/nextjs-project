import { useState, useEffect } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { SidebarNavigation } from './SidebarNavigation';

type LayoutProps = {
  title?: string;
  subTitle?: string;
  children: any;
};

export default function Layout({ title, subTitle, children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const actualNavigation = SidebarNavigation.map((nav) => {
    if (nav.name == title) nav.current = true;
    else nav.current = false;
    if (nav.children) {
      nav.children.map((navChild) => {
        if (navChild.name == subTitle) navChild.current = true;
        else navChild.current = false;
      });
    }
    return nav;
  });

  return (
    <div>
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-20">
        <Sidebar
          navigation={actualNavigation}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <Topbar navigation={actualNavigation} setSidebarOpen={setSidebarOpen} />
        <div className="flex justify-center">
          <main className="w-full max-w-5xl p-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
