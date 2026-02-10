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
  ChevronRight
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
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 font-kanit tracking-tight flex items-center gap-3 italic uppercase">
            <Bell className="w-8 h-8 text-[#3f6ad8]" />
            {t('title')}
          </h1>
          <p className="text-gray-500 font-kanit font-medium text-sm mt-1">จัดการทุกกิจกรรมและการอนุมัติที่สำคัญของคุณ</p>
        </div>
        <div className="flex gap-2">
          <button className="px-5 py-2.5 bg-gray-50 text-gray-600 rounded-xl font-bold border border-gray-100 hover:bg-white transition-all text-sm flex items-center gap-2">
            <Check className="w-4 h-4" />
            {t('clearAll')}
          </button>
          <button className="px-5 py-2.5 bg-rose-50 text-rose-600 rounded-xl font-bold border border-rose-100 hover:bg-rose-100 transition-all text-sm flex items-center gap-2">
            <Trash2 className="w-4 h-4" />
            ลบทั้งหมด
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
         <div className="bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex-1 flex overflow-x-auto custom-scrollbar">
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
                  className={`px-6 py-2 rounded-xl text-sm font-bold font-kanit whitespace-nowrap transition-all ${
                      filter === cat.id 
                      ? "bg-[#3f6ad8] text-white shadow-lg shadow-blue-500/20 scale-105" 
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {cat.label}
                </button>
            ))}
         </div>
         <div className="relative group">
            <input 
              type="text" 
              placeholder={tCommon('search')}
              className="w-full md:w-64 pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-gray-100 shadow-sm font-kanit text-sm focus:ring-2 focus:ring-[#3f6ad8]/20 focus:border-[#3f6ad8] transition-all outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#3f6ad8] transition-colors" />
         </div>
      </div>

      {/* Notification List */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {filteredNotifications.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {filteredNotifications.map((notif) => (
              <Link
                key={notif.id}
                href={notif.link}
                className={`flex flex-col sm:flex-row sm:items-center gap-4 p-6 hover:bg-gray-50 transition-all group relative ${notif.isUnread ? 'bg-blue-50/10' : ''}`}
              >
                {notif.isUnread && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3f6ad8]"></div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center border-2 shadow-sm transition-transform group-hover:scale-110 ${getIconBg(notif.type)}`}>
                  {getIcon(notif.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                    <h3 className={`text-base font-black font-kanit truncate ${notif.isUnread ? 'text-[#3f6ad8]' : 'text-gray-900'}`}>
                      {t(notif.titleKey)}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {notif.time}</span>
                      <span>•</span>
                      <span>{notif.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-kanit leading-relaxed line-clamp-2">
                     {t(notif.descKey)}
                  </p>
                </div>

                <div className="flex-shrink-0 flex items-center self-end sm:self-center">
                  <div className="p-2 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#3f6ad8] group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center px-6">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
                  <Bell className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-black text-gray-900 font-kanit">ไม่พบการแจ้งเตือน</h3>
              <p className="text-gray-500 font-kanit mt-1 max-w-xs">ยังไม่มีกิจกรรมใหม่ๆ ในหมวดหมู่นี้สำหรับคุณในขณะนี้</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-6 px-8 py-3 bg-[#3f6ad8] text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 uppercase tracking-widest text-sm"
              >
                กลับไปที่ทั้งหมด
              </button>
          </div>
        )}
      </div>

      {/* History / Archive Link */}
      <div className="text-center pb-8 pt-4">
           <p className="text-gray-400 font-kanit text-sm">
              แสดงย้อนหลังเพียง 30 วันเท่านั้น 
              <button className="ml-2 text-[#3f6ad8] font-bold hover:underline">ดูประวัติทั้งหมด</button>
           </p>
      </div>
    </div>
  );
}
