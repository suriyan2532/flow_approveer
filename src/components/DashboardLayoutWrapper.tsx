"use client";

import { useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import {
  LayoutDashboard,
  Users,
  Settings,
  Menu,
  Bell,
  Search,
  ShoppingCart,
  FileText,
  CreditCard,
  Banknote,
  CheckSquare,
  BarChart,
  DollarSign,
  Car,
  ChevronDown,
} from "lucide-react";
import Logo from "@/components/Logo";
import NotificationDropdown from "@/components/NotificationDropdown";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    if (openSubmenu === name) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(name);
    }
  };

  const t = useTranslations('Navigation');

  const navigation = [
    { name: t("dashboard"), href: "/dashboard", icon: LayoutDashboard },
    { name: t("users"), href: "/dashboard/users", icon: Users },
    {
      name: t("procurement"),
      href: "#",
      icon: ShoppingCart,
      children: [
        { name: t("purchaseRequisitions"), href: "/dashboard/procurement/purchase-requisitions", icon: FileText },
        { name: t("contracts"), href: "/dashboard/procurement/contracts", icon: FileText },
      ],
    },
    {
      name: t("finance"),
      href: "#",
      icon: DollarSign,
      children: [
        { name: t("pettyCash"), href: "/dashboard/finance/petty-cash", icon: Banknote },
        { name: t("advancePayments"), href: "/dashboard/finance/advance-payments", icon: CreditCard },
        { name: t("clearance"), href: "/dashboard/finance/clearance", icon: CheckSquare },
      ],
    },
    {
      name: t("vehicles"),
      href: "#",
      icon: Car,
      children: [
        { name: t("request"), href: "/dashboard/vehicles/request", icon: FileText },
        { name: t("approvals"), href: "/dashboard/vehicles/approvals", icon: CheckSquare },
        { name: t("history"), href: "/dashboard/vehicles/history", icon: BarChart },
        { name: t("calendar"), href: "/dashboard/vehicles/calendar", icon: LayoutDashboard },
      ],
    },
    { name: t("reports"), href: "/dashboard/reports", icon: BarChart },
    { name: t("settings"), href: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#f1f4f6] font-sans text-[#495057]">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-[280px]" : "w-[80px]"
        } bg-white text-[#3f6ad8] transition-all duration-300 ease-in-out flex flex-col shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] z-30 fixed h-full left-0`}
      >
        <div className="h-[60px] flex items-center px-6 border-b border-gray-100">
            <Logo showText={isSidebarOpen} />
        </div>

        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar">
            <div className="px-4 mb-2">
                <p className={`text-xs font-bold text-gray-400 uppercase tracking-wider ${!isSidebarOpen && 'text-center'}`}>
                    {isSidebarOpen ? t('menu') : '...'}
                </p>
            </div>
          <ul className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));
              const isSubmenuOpen = openSubmenu === item.name || isActive;

              if (item.children) {
                  return (
                      <li key={item.name}>
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                                isActive 
                                ? "bg-[#e0f3ff] text-[#3f6ad8] font-semibold" 
                                : "text-gray-600 hover:bg-gray-100 hover:text-[#3f6ad8]"
                            }`}
                          >
                              <div className="flex items-center">
                                  <item.icon className={`w-5 h-5 flex-shrink-0 mr-3 ${isActive ? "text-[#3f6ad8]" : "text-gray-400 group-hover:text-[#3f6ad8]"}`} />
                                  {isSidebarOpen && <span>{item.name}</span>}
                              </div>
                              {isSidebarOpen && (
                                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubmenuOpen ? 'transform rotate-180' : ''}`} />
                              )}
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubmenuOpen && isSidebarOpen ? 'max-h-96 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                              <ul className="pl-10 pr-2 space-y-1">
                                  {item.children.map(child => {
                                      const isChildActive = pathname === child.href;
                                      return (
                                          <li key={child.name}>
                                              <Link
                                                href={child.href}
                                                className={`flex items-center px-4 py-2 rounded-md text-sm transition-colors ${
                                                    isChildActive
                                                    ? "text-[#3f6ad8] font-medium bg-white shadow-sm"
                                                    : "text-gray-500 hover:text-[#3f6ad8] hover:bg-gray-50"
                                                }`}
                                              >
                                                  {child.name}
                                              </Link>
                                          </li>
                                      )
                                  })}
                              </ul>
                          </div>
                      </li>
                  )
              }

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-[#3f6ad8] text-white shadow-md shadow-blue-500/30"
                        : "text-gray-600 hover:bg-gray-100 hover:text-[#3f6ad8]"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#3f6ad8]"} mr-3`} />
                    {isSidebarOpen && (
                      <span className="font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${isSidebarOpen ? "ml-[280px]" : "ml-[80px]"}`}>
        <header className="h-[60px] bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-20">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-[#3f6ad8] hover:bg-blue-50 p-2 rounded-full transition-colors mr-4"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block w-64">
                <input
                    type="text"
                    className="w-full bg-[#f1f4f6] border-none rounded-full py-2 pl-10 pr-4 text-sm text-gray-700 focus:ring-2 focus:ring-[#3f6ad8]/50 focus:bg-white transition-all"
                    placeholder="Search..."
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
            </div>
          </div>

          <div className="flex items-center space-x-3">
             <NotificationDropdown />
             <div className="flex items-center">
                 <LanguageSwitcher />
             </div>
             <div className="pl-3 border-l border-gray-200 flex items-center gap-3 cursor-pointer">
                 <div className="text-right hidden sm:block">
                     <p className="text-sm font-bold text-gray-700 leading-tight">Admin User</p>
                     <p className="text-xs text-gray-500">Administrator</p>
                 </div>
                 <img
                    src="https://ui-avatars.com/api/?name=Admin+User&background=3f6ad8&color=fff"
                    alt="Admin" 
                    className="w-9 h-9 rounded-full shadow-sm border-2 border-white"
                 />
             </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-x-hidden relative font-kanit">
             {children}
        </main>
        
         <footer className="h-12 bg-white flex items-center justify-between px-6 text-sm text-gray-400 border-t border-gray-100">
            <span>© 2026 DND - Flow Approver.</span>
            <span>Deep in details, Develop to success</span>
         </footer>
      </div>
    </div>
  );
}
