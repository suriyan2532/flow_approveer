"use client";

import { use } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Banknote, 
  Clock, 
  CheckCircle2, 
  Download,
  Info,
  History,
  Briefcase
} from "lucide-react";

const initialAdvances = [
  {
    id: "ADV-2023-001",
    requester: "John Doe",
    purpose: "Business Trip to Chiang Mai",
    amount: "5,000 THB",
    status: "Approved",
    expectedClearance: "2023-11-05",
    details: "Airfare, accommodation, and daily allowance for the annual maintenance visit to the northern regional office.",
    department: "Engineering",
  },
  {
    id: "ADV-2023-002",
    requester: "Jane Smith",
    purpose: "Client Entertainment",
    amount: "3,000 THB",
    status: "Pending",
    expectedClearance: "2023-11-01",
    details: "Dinner with VIP clients from Global Tech Solutions to discuss project expansion.",
    department: "Sales",
  },
];

export default function AdvancePaymentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations('Finance.advancePayments');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const item = initialAdvances.find(a => a.id === id) || initialAdvances[0];

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
                  <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-600 rounded uppercase tracking-wider">{item.id}</span>
                  <p className="text-xs text-gray-400 font-kanit">Expected Clearance: {item.expectedClearance}</p>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 font-kanit">{item.purpose}</h1>
          </div>
        </div>
        
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit">
                <Download className="w-4 h-4" />
                {tCommon('print')}
            </button>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-kanit border ${
                item.status === 'Approved' 
                ? 'bg-green-50 text-green-600 border-green-200' 
                : 'bg-amber-50 text-amber-600 border-amber-200'
            }`}>
                {item.status === 'Approved' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {item.status}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border-0 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50/30">
                <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Request Information
                </h2>
             </div>
             <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('requester')}</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{item.requester}</p>
                                <p className="text-sm text-gray-400 font-kanit">Dept: {item.department}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Banknote className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('amount')}</p>
                                <p className="text-xl font-black text-gray-900 font-kanit">{item.amount}</p>
                                <p className="text-xs text-gray-400 font-kanit mt-1">Advance payment for business expenses</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">Purpose</p>
                                <p className="text-base font-bold text-gray-700 font-kanit leading-tight">{item.purpose}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">Due Date for Clearance</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{item.expectedClearance}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 font-kanit">Description & Logic</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-kanit bg-gray-50/50 p-4 rounded-xl border border-dashed border-gray-200 whitespace-pre-wrap">
                        {item.details}
                    </p>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 font-kanit flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Workflow History
              </h2>
              <div className="space-y-6">
                  {[
                      { date: '2023-10-20', user: item.requester, action: 'Request Submitted', status: 'Completed' },
                      { date: '2023-10-22', user: 'Finance Manager', action: 'Approved', status: item.status === 'Approved' ? 'Completed' : 'Pending' },
                      { date: '-', user: 'Accountant', action: 'Payment Processed', status: 'Pending' },
                  ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ring-4 ${step.status === 'Completed' ? 'bg-blue-500 ring-blue-50' : 'bg-gray-200 ring-gray-50'}`}></div>
                              {i < 2 && <div className={`w-0.5 h-full mt-1 ${step.status === 'Completed' ? 'bg-blue-100' : 'bg-gray-100'}`}></div>}
                          </div>
                          <div className="pb-4">
                              <p className="text-xs font-black text-gray-400 font-kanit">{step.date}</p>
                              <p className={`text-sm font-bold font-kanit ${step.status === 'Completed' ? 'text-blue-600' : 'text-gray-400'}`}>{step.action}</p>
                              <p className="text-xs text-gray-500 font-kanit">Process by {step.user}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>

        <div className="space-y-6">
             <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Actions</h3>
                <div className="space-y-2">
                    <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all font-kanit shadow-lg shadow-blue-500/20">
                        {tCommon('approve')}
                    </button>
                    <button className="w-full py-2.5 bg-white text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all font-kanit border border-gray-200">
                        {tCommon('edit')}
                    </button>
                    <div className="pt-4 mt-4 border-t border-gray-100">
                        <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all font-kanit border border-red-100">
                            Reject Request
                        </button>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
