"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { 
  Bell, 
  ShoppingCart, 
  DollarSign, 
  Car, 
  FileWarning, 
  Clock,
  Search,
  Trash2,
  Check,
  ChevronRight,
  SlidersHorizontal
} from "lucide-react";
import { Link } from "@/i18n/routing";

interface Notification {
  id: string;
  type: "procurement" | "finance" | "vehicles" | "contracts";
  titleKey: string;
  descKey: string;
  time: string;
  date: string;
  isUnread: boolean;
  link: string;
}

export default function NotificationsPage() {
  const t = useTranslations("Notifications");
  const tCommon = useTranslations("Common");
  const [filter, setFilter] = useState<string>("all");

  const notifications: Notification[] = [
    {
      id: "1",
      type: "procurement",
      titleKey: "prTitle",
      descKey: "prDesc",
      time: "19:30",
      date: "Feb 10, 2026",
      isUnread: true,
      link: "/dashboard/procurement/purchase-requisitions/PR-2023-001/status",
    },
    {
      id: "2",
      type: "finance",
      titleKey: "pcTitle",
      descKey: "pcDesc",
      time: "18:45",
      date: "Feb 10, 2026",
      isUnread: true,
      link: "/dashboard/finance/petty-cash",
    },
    {
      id: "3",
      type: "contracts",
      titleKey: "contractTitle",
      descKey: "contractDesc",
      time: "16:15",
      date: "Feb 10, 2026",
      isUnread: false,
      link: "/dashboard/procurement/contracts",
    },
    {
      id: "4",
      type: "vehicles",
      titleKey: "vehicleTitle",
      descKey: "vehicleDesc",
      time: "14:20",
      date: "Feb 10, 2026",
      isUnread: false,
      link: "/dashboard/vehicles/history",
    },
    {
        id: "5",
        type: "procurement",
        titleKey: "prTitle",
        descKey: "prDesc",
        time: "09:00",
        date: "Feb 09, 2026",
        isUnread: false,
        link: "/dashboard/procurement/purchase-requisitions",
    }
  ];

  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "procurement": return <ShoppingCart className="w-5 h-5" />;
      case "finance": return <DollarSign className="w-5 h-5" />;
      case "vehicles": return <Car className="w-5 h-5" />;
      case "contracts": return <FileWarning className="w-5 h-5" />;
    }
  };

  const getIconBg = (type: Notification["type"]) => {
    switch (type) {
      case "procurement": return "bg-blue-50 text-blue-600 border-blue-100";
      case "finance": return "bg-green-50 text-green-600 border-green-100";
      case "vehicles": return "bg-purple-50 text-purple-600 border-purple-100";
      case "contracts": return "bg-rose-50 text-rose-600 border-rose-100";
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 font-kanit pb-10">
      {/* Header Section - Full Width Design */}
      <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-[#3f6ad8] shadow-inner border border-blue-100/50">
            <Bell className="w-8 h-8 animate-bounce-subtle" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight italic uppercase flex items-center gap-2">
              {t('title')}
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block mb-4"></span>
            </h1>
            <p className="text-gray-500 font-medium text-base mt-1">
                <span className="text-[#3f6ad8] font-bold">Smart Center</span> • จัดการทุกกิจกรรมและการอนุมัติที่สำคัญของคุณ
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 self-end lg:self-center">
          <button className="px-6 py-3.5 bg-gray-50 text-gray-600 rounded-2xl font-black border border-gray-100 hover:bg-white hover:shadow-md transition-all text-sm flex items-center gap-2 group">
            <Check className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
            {t('clearAll')}
          </button>
          <button className="px-6 py-3.5 bg-rose-50 text-rose-600 rounded-2xl font-black border border-rose-100 hover:bg-rose-100 hover:shadow-md transition-all text-sm flex items-center gap-2 group">
            <Trash2 className="w-4 h-4 group-hover:shake transition-transform" />
            ลบทั้งหมด
          </button>
        </div>
      </div>

      {/* Re-designed Action Bar (Filters & Search) */}
      <div className="bg-white p-3 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col xl:flex-row items-center gap-4">
         <div className="flex items-center gap-3 px-4 py-2 border-r border-gray-100 hidden xl:flex">
             <SlidersHorizontal className="w-5 h-5 text-gray-400" />
             <span className="text-sm font-black text-gray-400 uppercase tracking-widest leading-none">Filters</span>
         </div>
         
         <div className="flex-1 w-full overflow-x-auto custom-scrollbar no-scrollbar flex items-center gap-2 px-2">
            {[
                { id: "all", label: "ทั้งหมด (All)" },
                { id: "procurement", label: "จัดซื้อ (Procurement)" },
                { id: "finance", label: "การเงิน (Finance)" },
                { id: "vehicles", label: "ยานพาหนะ (Vehicles)" },
                { id: "contracts", label: "สัญญา (Contracts)" }
            ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-3 rounded-2xl text-sm font-black whitespace-nowrap transition-all flex items-center gap-2 ${
                      filter === cat.id 
                      ? "bg-[#3f6ad8] text-white shadow-xl shadow-blue-500/30 -translate-y-0.5" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  }`}
                >
                  {filter === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>}
                  {cat.label}
                </button>
            ))}
         </div>

         <div className="relative group w-full xl:w-80">
            <input 
              type="text" 
              placeholder={tCommon('search')}
              className="w-full pl-12 pr-6 py-4 bg-gray-50/50 rounded-2xl border border-gray-100 font-kanit text-sm focus:ring-4 focus:ring-[#3f6ad8]/10 focus:border-[#3f6ad8] focus:bg-white transition-all outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3f6ad8] transition-colors" />
         </div>
      </div>

      {/* Notification List - Expanded Grid/List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <Link
              key={notif.id}
              href={notif.link}
              className={`flex flex-col md:flex-row md:items-center gap-6 p-6 bg-white rounded-[2rem] border border-gray-100 hover:border-[#3f6ad8]/30 hover:shadow-xl hover:shadow-[#3f6ad8]/5 transition-all group relative overflow-hidden ${notif.isUnread ? 'ring-2 ring-[#3f6ad8]/5' : ''}`}
            >
              {notif.isUnread && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3f6ad8] shadow-[2px_0_10px_rgba(63,106,216,0.3)]"></div>
              )}
              
              <div className={`w-16 h-16 rounded-[1.5rem] flex-shrink-0 flex items-center justify-center border-2 shadow-sm transition-all group-hover:scale-105 group-hover:rotate-3 ${getIconBg(notif.type)}`}>
                {getIcon(notif.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-lg font-black truncate leading-tight ${notif.isUnread ? 'text-[#3f6ad8]' : 'text-gray-900'}`}>
                      {t(notif.titleKey)}
                    </h3>
                    {notif.isUnread && (
                        <span className="px-2.5 py-1 bg-[#3f6ad8] text-white text-[10px] font-black rounded-lg uppercase tracking-widest shadow-lg shadow-blue-500/20">New</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs font-black text-gray-400 uppercase tracking-tighter bg-gray-50 px-3 py-1.5 rounded-xl border border-gray-100">
                    <span className="flex items-center gap-1.5 text-[#3f6ad8]"><Clock className="w-3.5 h-3.5" /> {notif.time}</span>
                    <span className="text-gray-200">|</span>
                    <span>{notif.date}</span>
                  </div>
                </div>
                <p className="text-base text-gray-500 leading-relaxed font-medium line-clamp-2 max-w-4xl">
                   {t(notif.descKey)}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center self-end md:self-center gap-4">
                <div className="hidden sm:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-[#3f6ad8] uppercase tracking-widest">คลิกเพื่อดู</span>
                    <span className="text-[9px] text-gray-400">View Details</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#3f6ad8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="bg-white rounded-[3rem] py-24 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center px-10">
              <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-6 border border-gray-100 relative shadow-inner">
                  <Bell className="w-12 h-12 text-gray-300" />
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase italic">ไม่พบการแจ้งเตือน</h3>
              <p className="text-gray-500 font-medium mt-2 max-w-md mx-auto text-lg">
                  ยังไม่มีกิจกรรมใหม่ๆ ในหมวดหมู่นี้สำหรับคุณในขณะนี้ <br/>
                  <span className="text-sm opacity-60">No notifications found in this category.</span>
              </p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-8 px-10 py-4 bg-[#3f6ad8] text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 uppercase tracking-[0.2em] text-sm active:scale-95"
              >
                กลับไปที่ทั้งหมด
              </button>
          </div>
        )}
      </div>

      {/* History / Archive Link Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 px-10 border-t border-gray-100/50">
           <p className="text-gray-400 font-medium text-sm">
              <span className="font-black text-[#3f6ad8]/50 uppercase tracking-widest text-[10px] mr-2">Notice</span> 
              ระบบแสดงข้อมูลย้อนหลังสูงสุดเพียง 30 วันเท่านั้น 
           </p>
           <button className="flex items-center gap-2 text-[#3f6ad8] font-black hover:scale-105 transition-transform uppercase tracking-widest text-xs group">
              ดูประวัติกิจกรรมทั้งหมด 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .group-hover\:shake {
          animation: shake 0.3s infinite linear;
        }
      `}</style>
    </div>
  );
}
