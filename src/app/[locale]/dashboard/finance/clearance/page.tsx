"use client";

import { useState } from "react";
import { Plus, Search, Filter, CheckCircle, AlertCircle, MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const initialClearances = [
  {
    id: "CLR-2023-001",
    advanceRef: "ADV-2023-001",
    requester: "John Doe",
    totalExpense: "4,800 THB",
    returnAmount: "200 THB",
    status: "Cleared",
    date: "2023-11-06",
  },
  {
    id: "CLR-2023-002",
    advanceRef: "ADV-2023-002",
    requester: "Jane Smith",
    totalExpense: "0 THB",
    returnAmount: "0 THB",
    status: "Draft",
    date: "2023-11-02",
  },
];

export default function ClearancePage() {
  const t = useTranslations('Finance.clearance');
  const tCommon = useTranslations('Common');
  const [clearances, setClearances] = useState(initialClearances);

  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#3f6ad8] font-kanit">{t('title')}</h1>
          <p className="mt-1 text-sm text-gray-500 font-kanit">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors font-kanit">
            <Filter className="-ml-1 mr-2 h-4 w-4 text-gray-400" />
            {tCommon('filter')}
          </button>
          <Link href="/dashboard/finance/clearance/create">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-lg shadow-blue-500/30 text-sm font-medium text-white bg-[#3f6ad8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors font-kanit">
              <Plus className="-ml-1 mr-2 h-4 w-4" />
              {t('newRequest')}
            </button>
          </Link>
        </div>
      </div>

       <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
           <div className="relative rounded-md shadow-sm max-w-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-2 bg-gray-50 focus:bg-white transition-all font-kanit"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 font-kanit">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('id')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('refAdvance')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('requester')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('totalExpense')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('returnAmount')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('status')}</th>
                 <th scope="col" className="relative px-6 py-3"><span className="sr-only">{tCommon('actions')}</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {clearances.map((item) => (
                <tr key={item.id} className="hover:bg-[#fcfdfd] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#3f6ad8]">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.advanceRef}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">{item.requester}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">{item.totalExpense}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">{item.returnAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border items-center ${
                      item.status === 'Cleared' 
                        ? 'bg-green-50 text-green-600 border-green-200' 
                        : 'bg-gray-50 text-gray-600 border-gray-200'
                    }`}>
                       {item.status === 'Cleared' && <CheckCircle className="w-3 h-3 mr-1"/>}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-[#3f6ad8] transition-colors p-1 rounded-full hover:bg-blue-50">
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
