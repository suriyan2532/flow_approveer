"use client";

import { useTranslations } from "next-intl";
import { Search, Check, X, Car, User, MapPin, Calendar, Clock, AlertCircle } from "lucide-react";

const mockApprovals = [
  {
    id: "VR-2026-002",
    vehicleType: "Van (Commuter)",
    destination: "Production Site",
    purpose: "Team Visit",
    date: "Feb 15, 2026",
    time: "08:00 - 17:00",
    requester: "John Doe",
    department: "Engineering",
    passengers: 8
  },
  {
    id: "VR-2026-004",
    vehicleType: "Sedan (Honda Civic)",
    destination: "Client Office B",
    purpose: "Contract Signing",
    date: "Feb 14, 2026",
    time: "13:00 - 16:00",
    requester: "Sarah Smith",
    department: "Sales",
    passengers: 2
  }
];

export default function VehicleApprovalsPage() {
  const t = useTranslations("Vehicles");
  const tCommon = useTranslations("Common");

  return (
    <div className="space-y-6 text-[#495057]">
      <div>
         <div className="flex items-center gap-2 mb-1">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                  <Check className="w-5 h-5"/>
              </div>
              <h1 className="text-xl font-bold text-[#3f6ad8]">{t('approvals')}</h1>
         </div>
        <p className="text-sm text-gray-500 pl-11">
          Review and manage pending vehicle requests.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
         <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/30">
            <h5 className="font-bold text-gray-700">Pending Approvals ({mockApprovals.length})</h5>
            <div className="flex gap-2">
                <div className="relative rounded-md shadow-sm max-w-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-1.5 bg-white transition-all outline-none"
                      placeholder={tCommon('search')}
                    />
                </div>
            </div>
         </div>

         <div className="divide-y divide-gray-100">
            {mockApprovals.map((req) => (
                <div key={req.id} className="p-6 hover:bg-gray-50/50 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="space-y-4 flex-1">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-[#3f6ad8] bg-blue-50 px-2 py-1 rounded">{req.id}</span>
                                <h3 className="font-bold text-gray-800">{req.vehicleType}</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="flex items-start gap-2">
                                    <User className="w-4 h-4 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Requester</p>
                                        <p className="text-sm text-gray-700 font-medium">{req.requester}</p>
                                        <p className="text-xs text-gray-400">{req.department}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">{t('destination')}</p>
                                        <p className="text-sm text-gray-700 font-medium">{req.destination}</p>
                                        <p className="text-xs text-gray-400">{req.purpose}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Calendar className="w-4 h-4 text-gray-400 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Schedule</p>
                                        <p className="text-sm text-gray-700 font-medium">{req.date}</p>
                                        <div className="flex items-center gap-1 text-xs text-gray-400">
                                            <Clock className="w-3 h-3" />
                                            {req.time}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 self-end lg:self-center">
                            <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-bold text-sm">
                                <X className="w-4 h-4" />
                                {tCommon('delete')}
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold text-sm shadow-md shadow-green-500/20">
                                <Check className="w-4 h-4" />
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
            ))}
         </div>

         {mockApprovals.length === 0 && (
            <div className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <p className="text-gray-400 font-medium">No pending approvals found.</p>
            </div>
         )}
      </div>
    </div>
  );
}
