"use client";

import { useState } from "react";
import { Plus, Search, Filter, CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";

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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            {tCommon('filter')}
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            {t('newRequest')}
          </button>
        </div>
      </div>

       <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
           <div className="relative rounded-md shadow-sm max-w-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{tCommon('id')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('refAdvance')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{tCommon('requester')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('totalExpense')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('returnAmount')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{tCommon('status')}</th>
                 <th scope="col" className="relative px-6 py-3"><span className="sr-only">{tCommon('actions')}</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clearances.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.advanceRef}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.requester}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.totalExpense}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">{item.returnAmount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full items-center ${item.status === 'Cleared' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                       {item.status === 'Cleared' && <CheckCircle className="w-3 h-3 mr-1"/>}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-blue-600 hover:text-blue-900">{tCommon('view')}</a>
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
