"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Bell, 
  ShoppingCart, 
  DollarSign, 
  Car, 
  FileWarning, 
  CheckCircle2, 
  Clock,
  ChevronRight
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface Notification {
  id: string;
  type: "procurement" | "finance" | "vehicles" | "contracts";
  titleKey: string;
  descKey: string;
  time: string;
  isUnread: boolean;
  link: string;
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Notifications");

  const notifications: Notification[] = [
    {
      id: "1",
      type: "procurement",
      titleKey: "prTitle",
      descKey: "prDesc",
      time: "2 mins ago",
      isUnread: true,
      link: "/dashboard/procurement/purchase-requisitions/PR-2023-001/status",
    },
    {
      id: "2",
      type: "finance",
      titleKey: "pcTitle",
      descKey: "pcDesc",
      time: "45 mins ago",
      isUnread: true,
      link: "/dashboard/finance/petty-cash",
    },
    {
      id: "3",
      type: "contracts",
      titleKey: "contractTitle",
      descKey: "contractDesc",
      time: "3 hours ago",
      isUnread: false,
      link: "/dashboard/procurement/contracts",
    },
    {
      id: "4",
      type: "vehicles",
      titleKey: "vehicleTitle",
      descKey: "vehicleDesc",
      time: "5 hours ago",
      isUnread: false,
      link: "/dashboard/vehicles/history",
    },
  ];

  const unreadCount = notifications.filter(n => n.isUnread).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "procurement": return <ShoppingCart className="w-4 h-4" />;
      case "finance": return <DollarSign className="w-4 h-4" />;
      case "vehicles": return <Car className="w-4 h-4" />;
      case "contracts": return <FileWarning className="w-4 h-4 text-rose-500" />;
    }
  };

  const getIconBg = (type: Notification["type"]) => {
    switch (type) {
      case "procurement": return "bg-blue-50 text-blue-600";
      case "finance": return "bg-green-50 text-green-600";
      case "vehicles": return "bg-purple-50 text-purple-600";
      case "contracts": return "bg-rose-50 text-rose-600 border border-rose-100";
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Icon Trigger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative p-2 rounded-full transition-all duration-200 ${
          isOpen ? "bg-blue-50 text-[#3f6ad8]" : "text-gray-500 hover:text-[#3f6ad8] hover:bg-blue-50"
        }`}
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-black rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          {/* header */}
          <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-black text-gray-900 font-kanit uppercase tracking-tight">{t('title')}</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t('unreadCount', { count: unreadCount })}</p>
            </div>
            <button className="text-[10px] font-black text-[#3f6ad8] hover:underline uppercase tracking-widest">
              {t('clearAll')}
            </button>
          </div>

          {/* List */}
          <div className="max-h-[380px] overflow-y-auto custom-scrollbar">
            {notifications.map((notif) => (
              <Link
                key={notif.id}
                href={notif.link}
                onClick={() => setIsOpen(false)}
                className={`flex gap-4 p-4 hover:bg-gray-50 transition-colors relative group ${notif.isUnread ? 'bg-blue-50/20' : ''}`}
              >
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm ${getIconBg(notif.type)}`}>
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-black font-kanit ${notif.isUnread ? 'text-[#3f6ad8]' : 'text-gray-800'}`}>
                      {t(notif.titleKey)}
                    </p>
                    <span className="text-[9px] font-bold text-gray-400 uppercase">{notif.time}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-kanit leading-snug line-clamp-2">
                    {t(notif.descKey)}
                  </p>
                </div>
                {notif.isUnread && (
                  <div className="absolute right-2 top-11 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <Link 
            href="/dashboard/notifications" 
            onClick={() => setIsOpen(false)}
            className="block py-3 text-center text-[11px] font-black text-gray-400 hover:text-[#3f6ad8] bg-gray-50/50 border-t border-gray-100 transition-colors font-kanit uppercase tracking-widest"
          >
            {t('seeAll')} <ChevronRight className="w-3 h-3 inline-block ml-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
