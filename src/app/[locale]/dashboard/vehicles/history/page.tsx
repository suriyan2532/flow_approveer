"use client";

import { useTranslations } from "next-intl";
import { Search, Filter, MoreHorizontal, Car, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Link } from "@/i18n/routing";

const mockHistory = [
  {
    id: "VR-2026-001",
    vehicleType: "Sedan (Toyota Camry)",
    destination: "Branch Office A",
    purpose: "Client Meeting",
    date: "Feb 12, 2026",
    time: "09:00 - 12:00",
    status: "Approved",
    requester: "John Doe"
  },
  {
    id: "VR-2026-002",
    vehicleType: "Van (Commuter)",
    destination: "Production Site",
    purpose: "Team Visit",
    date: "Feb 15, 2026",
    time: "08:00 - 17:00",
    status: "Pending",
    requester: "John Doe"
  },
  {
    id: "VR-2026-003",
    vehicleType: "SUV (Fortuner)",
    destination: "Main Office",
    purpose: "Directorship Meeting",
    date: "Feb 08, 2026",
    time: "10:00 - 14:00",
    status: "Approved",
    requester: "John Doe"
  }
];

export default function VehicleHistoryPage() {
  const t = useTranslations("Vehicles");
  const tCommon = useTranslations("Common");

  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-blue-100 rounded-lg text-[#3f6ad8]">
                    <Clock className="w-5 h-5"/>
                </div>
                <h1 className="text-xl font-bold text-[#3f6ad8]">{t('history')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors">
            <Filter className="-ml-1 mr-2 h-4 w-4 text-gray-400" />
            {tCommon('filter')}
          </button>
          <Link 
            href="/dashboard/vehicles/request"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-lg shadow-blue-500/30 text-sm font-medium text-white bg-[#3f6ad8] hover:bg-blue-700 transition-colors"
          >
            {t('newRequest')}
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-0 overflow-hidden">
         <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h5 className="font-bold text-gray-700">{t('history')}</h5>
            <div className="relative rounded-md shadow-sm max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-2 bg-gray-50 focus:bg-white transition-all"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
         </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('id')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('vehicleType')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('destination')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('date')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('status')}</th>
                <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {mockHistory.map((item) => (
                <tr key={item.id} className="hover:bg-[#fcfdfd] transition-colors text-sm">
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-[#3f6ad8]">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-700">{item.vehicleType}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600">{item.destination}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-700 font-medium">{item.date}</div>
                    <div className="text-xs text-gray-400">{item.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${
                      item.status === 'Approved' ? 'bg-green-50 text-green-600 border-green-200' :
                      item.status === 'Pending' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-red-50 text-red-600 border-red-200'
                    }`}>
                        {item.status === 'Approved' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {item.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                        {item.status === 'Rejected' && <XCircle className="w-3 h-3 mr-1" />}
                        {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-400 hover:text-[#3f6ad8] p-1 rounded-full hover:bg-blue-50">
                      <MoreHorizontal className="w-5 h-5"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
