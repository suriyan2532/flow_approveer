"use client";

import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Car, MapPin, Clock, Calendar as CalendarIcon, Info } from "lucide-react";

export default function VehicleCalendarPage() {
  const t = useTranslations("Vehicles");

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const vehicles = [
    { id: 1, name: "Sedan (Toyota Camry)", plate: "กข 1234", status: "Occupied" },
    { id: 2, name: "SUV (Fortuner)", plate: "ขก 5678", status: "Available" },
    { id: 3, name: "Van (Commuter)", plate: "คน 9911", status: "Occupied" },
    { id: 4, name: "Pickup (Hilux Revo)", plate: "รร 4321", status: "Available" },
  ];

  const bookings = [
    { vehicleId: 1, day: 2, start: "09:00", end: "12:00", purpose: "Client Meeting" },
    { vehicleId: 3, day: 4, start: "08:00", end: "17:00", purpose: "Site Visit" },
    { vehicleId: 1, day: 5, start: "13:00", end: "16:00", purpose: "Office Event" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-blue-100 rounded-lg text-[#3f6ad8]">
                    <CalendarIcon className="w-5 h-5"/>
                </div>
                <h1 className="text-xl font-bold text-[#3f6ad8]">{t('calendar')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            Weekly schedule and vehicle availability overview.
          </p>
        </div>
        
        <div className="flex items-center bg-white rounded-lg shadow-sm border border-gray-100 p-1">
            <button className="p-2 hover:bg-gray-50 rounded-md text-gray-400">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-4 font-bold text-gray-700 text-sm">Feb 9 - Feb 15, 2026</span>
            <button className="p-2 hover:bg-gray-50 rounded-md text-gray-400">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Vehicles List */}
        <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Fleet Status
                </h2>
                <div className="space-y-3">
                    {vehicles.map(v => (
                        <div key={v.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="flex justify-between items-start mb-1">
                                <span className="text-xs font-bold text-gray-700">{v.name}</span>
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                                    v.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                                }`}>
                                    {v.status === 'Available' ? t('available') : t('occupied')}
                                </span>
                            </div>
                            <p className="text-[10px] text-gray-400 font-medium">{v.plate}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-[#3f6ad8] text-white rounded-xl shadow-lg shadow-blue-500/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                    <Info className="w-5 h-5 text-blue-200" />
                    <h3 className="font-bold">Summary</h3>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-blue-100">Total Vehicles</span>
                        <span className="font-bold">4</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-blue-100">Active Bookings</span>
                        <span className="font-bold">3</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Calendar Grid */}
        <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
                    {weekdays.map(day => (
                        <div key={day} className="py-3 px-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest border-r border-gray-100 last:border-r-0">
                            {day}
                        </div>
                    ))}
                </div>
                
                <div className="grid grid-cols-7 h-[500px]">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className={`p-2 border-r border-gray-100 last:border-r-0 relative group hover:bg-gray-50/30 transition-colors ${[5, 6].includes(i) ? 'bg-gray-50/10' : ''}`}>
                            <span className="text-xs font-bold text-gray-300 mb-2 block">{9 + i}</span>
                            
                            <div className="space-y-2">
                                {bookings.filter(b => b.day === i + 1).map((booking, idx) => (
                                    <div key={idx} className="p-2 bg-blue-50 border-l-4 border-[#3f6ad8] rounded shadow-sm">
                                        <p className="text-[10px] font-bold text-[#3f6ad8] truncate">{booking.purpose}</p>
                                        <div className="flex items-center gap-1 text-[9px] text-blue-400 mt-1">
                                            <Clock className="w-2.5 h-2.5" />
                                            {booking.start} - {booking.end}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="absolute top-2 right-2 p-1 bg-white border border-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-[#3f6ad8] shadow-sm">
                                <PlusIcon className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  )
}
