"use client";

import { use } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  ArrowLeft, 
  FileText, 
  User, 
  Calendar, 
  Banknote, 
  Clock, 
  CheckCircle2, 
  Download,
  Info,
  History,
  ClipboardList,
  ChevronRight,
  ShieldCheck,
  Receipt
} from "lucide-react";

const initialClearances = [
  {
    id: "CLR-2023-001",
    advanceRef: "ADV-2023-001",
    requester: "John Doe",
    totalExpense: "4,800 THB",
    returnAmount: "200 THB",
    status: "Cleared",
    date: "2023-11-06",
    details: "Expense clearance for the business trip to Chiang Mai. Adjusted according to actual spending on fuel and local transport.",
    department: "Engineering",
    items: [
        { desc: "Fuel (Shell Station)", amount: "1,200 THB", date: "2023-11-01" },
        { desc: "Hotel Accommodation (3 Nights)", amount: "2,500 THB", date: "2023-11-03" },
        { desc: "Daily Allowance", amount: "1,100 THB", date: "2023-11-04" },
    ]
  },
  {
    id: "CLR-2023-002",
    advanceRef: "ADV-2023-002",
    requester: "Jane Smith",
    totalExpense: "0 THB",
    returnAmount: "0 THB",
    status: "Draft",
    date: "2023-11-02",
    details: "Draft for client entertainment expense clearance. Pending final receipts from the restaurant.",
    department: "Sales",
    items: []
  },
];

export default function ClearanceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations('Finance.clearance');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const item = initialClearances.find(c => c.id === id) || initialClearances[0];

  return (
    <div className="space-y-6 pb-12 text-[#495057]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-white rounded-full transition-colors shadow-sm border border-gray-100 bg-white/50"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>
          <div>
              <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 bg-green-100 text-green-600 rounded uppercase tracking-wider">{item.id}</span>
                  <p className="text-xs text-gray-400 font-kanit">Clearance Date: {item.date}</p>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 font-kanit">Expense Clearance</h1>
          </div>
        </div>
        
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit">
                <Download className="w-4 h-4" />
                {tCommon('print')}
            </button>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-kanit border ${
                item.status === 'Cleared' 
                ? 'bg-green-50 text-green-600 border-green-200' 
                : 'bg-gray-50 text-gray-600 border-gray-200'
            }`}>
                {item.status === 'Cleared' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {item.status}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Info */}
          <div className="bg-white rounded-2xl shadow-sm border-0 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
               <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-kanit">{tCommon('requester')}</p>
                    <p className="text-base font-bold text-gray-800 font-kanit">{item.requester}</p>
                    <p className="text-xs text-gray-500 font-kanit">{item.department}</p>
               </div>
               <div className="space-y-1 md:pl-6 pt-4 md:pt-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-kanit">Advance Ref.</p>
                    <button className="text-base font-bold text-blue-600 font-kanit hover:underline flex items-center gap-1">
                        {item.advanceRef}
                        <ChevronRight className="w-3 h-3" />
                    </button>
                    <p className="text-xs text-gray-500 font-kanit">Linked Advance Document</p>
               </div>
               <div className="space-y-1 md:pl-6 pt-4 md:pt-0">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-kanit">Total Expense</p>
                    <p className="text-xl font-black text-gray-900 font-kanit">{item.totalExpense}</p>
                    <p className="text-xs text-green-600 font-bold font-kanit">Return: {item.returnAmount}</p>
               </div>
          </div>

          {/* Details Table */}
          <div className="bg-white rounded-2xl shadow-sm border-0 overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-sm font-bold text-gray-800 font-kanit flex items-center gap-2 uppercase tracking-widest">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                    Expense Breakdown
                </h2>
                <p className="text-xs text-gray-400 font-kanit">{item.items.length} items recorded</p>
             </div>
             <div className="p-0">
                <table className="min-w-full divide-y divide-gray-100">
                    <thead className="bg-gray-50/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase font-kanit">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase font-kanit">Description</th>
                            <th className="px-6 py-3 text-right text-xs font-bold text-gray-400 uppercase font-kanit">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {item.items.length > 0 ? item.items.map((ex, i) => (
                            <tr key={i} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 text-sm text-gray-500 font-kanit">{ex.date}</td>
                                <td className="px-6 py-4 text-sm font-bold text-gray-700 font-kanit">{ex.desc}</td>
                                <td className="px-6 py-4 text-sm font-black text-gray-900 text-right font-kanit">{ex.amount}</td>
                            </tr>
                        )) : (
                            <tr><td colSpan={3} className="px-6 py-12 text-center text-sm text-gray-400 font-kanit italic">No items recorded in this clearance.</td></tr>
                        )}
                    </tbody>
                </table>
             </div>
             <div className="p-6 bg-gray-50/30 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2 font-kanit">Remarks</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-kanit">{item.details}</p>
             </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 font-kanit flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Clearance Steps
              </h2>
              <div className="space-y-6">
                  {[
                      { date: item.date, user: item.requester, action: 'Clearance Submitted', status: 'Completed' },
                      { date: '2023-11-08', user: 'Audit Team', action: 'Expense Audited', status: item.status === 'Cleared' ? 'Completed' : 'Pending' },
                      { date: '2023-11-10', user: 'Finance', action: 'Finalized', status: item.status === 'Cleared' ? 'Completed' : 'Pending' },
                  ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ring-4 ${step.status === 'Completed' ? 'bg-green-500 ring-green-50' : 'bg-gray-200 ring-gray-50'}`}></div>
                              {i < 2 && <div className={`w-0.5 h-full mt-1 ${step.status === 'Completed' ? 'bg-green-100' : 'bg-gray-100'}`}></div>}
                          </div>
                          <div className="pb-4">
                              <p className="text-xs font-black text-gray-400 font-kanit">{step.date}</p>
                              <p className={`text-sm font-bold font-kanit ${step.status === 'Completed' ? 'text-green-600' : 'text-gray-400'}`}>{step.action}</p>
                              <p className="text-xs text-gray-500 font-kanit">User: {step.user}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>

        <div className="space-y-6">
             <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Management</h3>
                <div className="space-y-2">
                    <button className="w-full py-2.5 bg-white text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all font-kanit border border-gray-200 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        Audit Verification
                    </button>
                    <button className="w-full py-2.5 bg-white text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all font-kanit border border-gray-200">
                        {tCommon('edit')}
                    </button>
                    <div className="pt-4 mt-4 border-t border-gray-100">
                        <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all font-kanit border border-red-100">
                            {tCommon('delete')}
                        </button>
                    </div>
                </div>
             </div>

             <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Attachments</h3>
                <div className="space-y-3">
                    <div className="p-3 border border-gray-100 rounded-xl flex items-center gap-3 bg-gray-50/50">
                        <Receipt className="w-8 h-8 text-gray-400" />
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-gray-700 truncate font-kanit">Receipt_Pack.zip</p>
                            <p className="text-[10px] text-gray-400 font-kanit">4.2 MB • ZIP File</p>
                        </div>
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                            <Download className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
}
