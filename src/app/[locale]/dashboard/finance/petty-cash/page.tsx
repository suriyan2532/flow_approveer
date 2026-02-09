"use client";

import { useState } from "react";
import { Plus, Search, Filter, Banknote, MoreHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

const initialPettyCash = [
  {
    id: "PC-2023-001",
    requester: "John Doe",
    description: "Office Snack & Drinks",
    amount: "500 THB",
    status: "Reimbursed",
    date: "2023-10-25",
  },
  {
    id: "PC-2023-002",
    requester: "Jane Smith",
    description: "Taxi Fare for Client Meeting",
    amount: "350 THB",
    status: "Pending",
    date: "2023-10-26",
  },
  {
    id: "PC-2023-003",
    requester: "Mike Johnson",
    description: "Printing Supplies",
    amount: "1,200 THB",
    status: "Pending",
    date: "2023-10-27",
  },
];

export default function PettyCashPage() {
  const t = useTranslations('Finance.pettyCash');
  const tCommon = useTranslations('Common');
  const [items, setItems] = useState(initialPettyCash);

  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <Banknote className="w-5 h-5"/>
                </div>
                <h1 className="text-xl font-bold text-[#3f6ad8]">{t('title')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors">
            <Filter className="-ml-1 mr-2 h-4 w-4 text-gray-400" />
            {tCommon('filter')}
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-lg shadow-green-500/30 text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-colors">
            <Plus className="-ml-1 mr-2 h-4 w-4" />
            {t('newRequest')}
          </button>
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
                  name="search"
                  id="search"
                  className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-2 bg-gray-50 focus:bg-white transition-all"
                  placeholder={tCommon('search')}
                />
              </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#f8f9fa]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('id')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('requester')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('description')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('amount')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('status')}</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('date')}</th>
                 <th scope="col" className="relative px-6 py-3"><span className="sr-only">{tCommon('actions')}</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-[#fcfdfd] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#3f6ad8]">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{item.requester}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${item.status === 'Reimbursed' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-amber-50 text-amber-600 border-amber-200'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.date}</td>
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
