"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Plus, Search, Filter, MoreHorizontal, FileText, CheckCircle2, Activity } from "lucide-react";

const initialRequisitions = [
  {
    id: "PR-2023-001",
    title: "Office Supplies Q4",
    requester: "John Doe",
    department: "Admin",
    amount: "5,000 THB",
    status: "Approved",
    currentStep: "Completed",
    date: "2023-11-10",
  },
  {
    id: "PR-2023-002",
    title: "MacBook Pro M3 (5 Units)",
    requester: "Jane Smith",
    department: "IT",
    amount: "450,000 THB",
    status: "Verified",
    currentStep: "Final Approver",
    date: "2023-11-12",
  },
  {
    id: "PR-2023-003",
    title: "Marketing Campaign Q4",
    requester: "Mike Johnson",
    department: "Marketing",
    amount: "150,000 THB",
    status: "Pending",
    currentStep: "Dept Head",
    date: "2023-11-14",
  },
  {
    id: "PR-2023-004",
    title: "Server Maintenance",
    requester: "Sarah Connor",
    department: "IT",
    amount: "25,000 THB",
    status: "Dept Approved",
    currentStep: "Finance Audit",
    date: "2023-11-15",
  },
  {
    id: "PR-2023-005",
    title: "Office Furniture",
    requester: "Jessica Pearson",
    department: "Admin",
    amount: "80,000 THB",
    status: "Draft",
    currentStep: "Drafting",
    date: "2023-11-16",
  },
  {
    id: "PR-2023-006",
    title: "Software Licenses",
    requester: "Harvey Specter",
    department: "Legal",
    amount: "120,000 THB",
    status: "Rejected",
    currentStep: "Terminated",
    date: "2023-11-18",
  },
];

export default function PurchaseRequisitionsPage() {
  const t = useTranslations('Procurement.purchaseRequisitions');
  const tCommon = useTranslations('Common');
  const router = useRouter();
  const [requisitions, setRequisitions] = useState(initialRequisitions);

  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-kanit">
        <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-blue-100 rounded-lg text-[#3f6ad8]">
                    <FileText className="w-5 h-5"/>
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
          <Link 
            href="/dashboard/procurement/purchase-requisitions/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-lg shadow-blue-500/30 text-sm font-medium text-white bg-[#3f6ad8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors"
          >
            <Plus className="-ml-1 mr-2 h-4 w-4" />
            {t('newRequest')}
          </Link>
        </div>
      </div>

      {/* Search and Table */}
      <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-0 overflow-hidden">
         <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <h5 className="font-bold text-gray-700">{t('allRequisitions')}</h5>
            <div className="relative rounded-md shadow-sm max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-2 bg-gray-50 focus:bg-white transition-all"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
         </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#f8f9fa] font-kanit">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {tCommon('id')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {tCommon('title')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {t('requester')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {tCommon('amount')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {tCommon('status')}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {t('currentStep') || 'Current Step'}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                >
                  {tCommon('date')}
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">{tCommon('actions')}</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 font-kanit">
              {requisitions.map((req) => (
                <tr key={req.id} className="hover:bg-[#fcfdfd] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#3f6ad8]">
                    <Link href={`/dashboard/procurement/purchase-requisitions/${req.id}/status`} className="hover:underline">
                        {req.id}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                    {req.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="font-medium text-gray-700">{req.requester}</div>
                    <div className="text-xs text-gray-400">{req.department}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                    {req.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${
                        req.status === "Approved"
                          ? "bg-green-50 text-green-600 border-green-200"
                          : req.status === "Verified"
                          ? "bg-blue-50 text-blue-600 border-blue-200"
                          : req.status === "Dept Approved"
                          ? "bg-indigo-50 text-indigo-600 border-indigo-200"
                          : req.status === "Pending"
                          ? "bg-amber-50 text-amber-600 border-amber-200"
                          : req.status === "Draft"
                          ? "bg-gray-50 text-gray-600 border-gray-200"
                          : "bg-red-50 text-red-600 border-red-200"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-2">
                        {req.status === "Approved" ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : req.status === "Rejected" ? (
                            <Activity className="w-4 h-4 text-red-400" />
                        ) : (
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                        )}
                        {req.currentStep}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {req.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     <Link 
                       href={`/dashboard/procurement/purchase-requisitions/${req.id}/status`}
                       className="text-gray-400 hover:text-[#3f6ad8] transition-colors p-1 rounded-full hover:bg-blue-50 inline-block"
                     >
                         <MoreHorizontal className="w-5 h-5"/>
                     </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between text-sm text-gray-500 font-kanit">
            <span>{tCommon('showing', { start: 1, end: requisitions.length, total: requisitions.length })}</span>
            <div className="flex gap-1">
                <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-white disabled:opacity-50 transition-colors">{tCommon('previous')}</button>
                <button className="px-3 py-1 border border-[#3f6ad8] rounded-lg bg-[#3f6ad8] text-white shadow-sm font-bold">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-white transition-colors">{tCommon('next')}</button>
            </div>
        </div>
      </div>
    </div>
  );
}
