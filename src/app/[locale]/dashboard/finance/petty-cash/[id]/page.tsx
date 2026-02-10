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
  Receipt,
  History,
  Tag
} from "lucide-react";

const initialPettyCash = [
  {
    id: "PC-2023-001",
    requester: "John Doe",
    description: "Office Snack & Drinks",
    amount: "500 THB",
    status: "Reimbursed",
    date: "2023-10-25",
    details: "Budget for weekly snacks and coffee for the admin department. Purchased from Seven-Eleven.",
    category: "Office Supplies",
  },
  {
    id: "PC-2023-002",
    requester: "Jane Smith",
    description: "Taxi Fare for Client Meeting",
    amount: "350 THB",
    status: "Pending",
    date: "2023-10-26",
    details: "Transportation cost (Grab Taxi) from headquarters to ABC Corp for the annual contract review meeting.",
    category: "Travel",
  },
  {
    id: "PC-2023-003",
    requester: "Mike Johnson",
    description: "Printing Supplies",
    amount: "1,200 THB",
    status: "Pending",
    date: "2023-10-27",
    details: "Emergency procurement of toner cartridge and A4 paper for the marketing department printer.",
    category: "Office Supplies",
  },
];

export default function PettyCashDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations('Finance.pettyCash');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const item = initialPettyCash.find(i => i.id === id) || initialPettyCash[0];

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
                  <p className="text-xs text-gray-400 font-kanit">Request Date: {item.date}</p>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 font-kanit">{item.description}</h1>
          </div>
        </div>
        
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit">
                <Download className="w-4 h-4" />
                {tCommon('print')}
            </button>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold font-kanit border ${
                item.status === 'Reimbursed' 
                ? 'bg-green-50 text-green-600 border-green-200' 
                : 'bg-amber-50 text-amber-600 border-amber-200'
            }`}>
                {item.status === 'Reimbursed' ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {item.status}
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Essential Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border-0 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50/30">
                <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-green-600" />
                    {t('form.details')}
                </h2>
             </div>
             <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-green-50 text-green-600 rounded-lg">
                                <User className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('requester')}</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{item.requester}</p>
                                <p className="text-sm text-gray-400 font-kanit">Department: Administration</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-green-50 text-green-600 rounded-lg">
                                <Banknote className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('amount')}</p>
                                <p className="text-xl font-black text-gray-900 font-kanit">{item.amount}</p>
                                <p className="text-sm text-gray-400 font-kanit">Including VAT</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-green-50 text-green-600 rounded-lg">
                                <Tag className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{t('category') || 'Category'}</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{item.category}</p>
                                <p className="text-sm text-gray-400 font-kanit">Code: {item.category === 'Travel' ? 'TRV-01' : 'OFF-02'}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-green-50 text-green-600 rounded-lg">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('date')}</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{item.date}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 font-kanit">{t('description')}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-kanit bg-gray-50 p-4 rounded-xl border border-gray-100">
                        {item.details}
                    </p>
                </div>
             </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 font-kanit flex items-center gap-2">
                  <History className="w-4 h-4" />
                  Request Timeline
              </h2>
              <div className="space-y-6">
                  {[
                      { date: item.date, user: item.requester, action: 'Request Submitted', status: 'Completed' },
                      { date: '2023-10-27', user: 'Head of Dept', action: 'Approved', status: 'Completed' },
                      { date: '2023-10-30', user: 'Finance Admin', action: 'Reimbursed', status: item.status === 'Reimbursed' ? 'Completed' : 'Pending' },
                  ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                              <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ring-4 ${step.status === 'Completed' ? 'bg-green-500 ring-green-50' : 'bg-gray-200 ring-gray-50'}`}></div>
                              {i < 2 && <div className={`w-0.5 h-full mt-1 ${step.status === 'Completed' ? 'bg-green-100' : 'bg-gray-100'}`}></div>}
                          </div>
                          <div className="pb-4">
                              <p className="text-xs font-black text-gray-400 font-kanit">{step.date}</p>
                              <p className={`text-sm font-bold font-kanit ${step.status === 'Completed' ? 'text-green-600' : 'text-gray-400'}`}>{step.action}</p>
                              <p className="text-xs text-gray-500 font-kanit">Process by {step.user}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
        </div>

        {/* Right Column: Attachments & Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">{t('receipt')}</h3>
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center group relative cursor-pointer">
                <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3011&auto=format&fit=crop" 
                    alt="Receipt" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
                    <p className="bg-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg font-kanit">Preview Receipt</p>
                </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit">
                <Download className="w-4 h-4" />
                Download Receipt
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Management</h3>
                <div className="space-y-2">
                    <button className="w-full py-2.5 bg-gray-50 text-gray-600 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all font-kanit border border-gray-100">
                        {tCommon('edit')}
                    </button>
                    <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-bold hover:bg-red-600 hover:text-white transition-all font-kanit border border-red-100">
                        {tCommon('delete')}
                    </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
