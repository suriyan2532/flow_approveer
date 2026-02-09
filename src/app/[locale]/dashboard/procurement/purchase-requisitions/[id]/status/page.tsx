"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2, Clock, User, DollarSign, Activity, ChevronRight, FileText } from "lucide-react";

export default function RequisitionStatusPage({ params }: { params: { id: string } }) {
  const t = useTranslations("Procurement.workflow.tracking");
  const reqT = useTranslations("Procurement.purchaseRequisitions");
  const router = useRouter();

  const steps = [
    { key: "created", label: t('stepCreated'), status: "complete", date: "Feb 10, 2026", time: "09:00 AM", user: "John Doe" },
    { key: "dept", label: t('stepDept'), status: "active", approver: "Sarah Connor (Dept Head)", limit: "$ 5,000" },
    { key: "finance", label: t('stepFinance'), status: "pending", approver: "Mike Ross (CFO)", limit: "$ 50,000" },
    { key: "final", label: t('stepFinal'), status: "pending", approver: "Jessica Pearson (CEO)", limit: "Unlimited" },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <div>
            <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
            <p className="text-sm text-gray-400">PR #REQ-2026-001 • MacBook Pro M3 (5 Units)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Status Stepper - Left Column */}
        <div className="lg:col-span-1">
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -mr-12 -mt-12"></div>
                
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 relative">{t('currentStatus')}</h2>
                
                <div className="space-y-0 relative">
                    <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                    
                    {steps.map((step, index) => (
                        <div key={step.key} className={`relative pl-10 pb-10 last:pb-0`}>
                            {step.status === "complete" ? (
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 border-2 border-white shadow-sm z-10">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                            ) : step.status === "active" ? (
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white border-4 border-blue-100 shadow-md z-10 animate-pulse">
                                    <Clock className="w-5 h-5" />
                                </div>
                            ) : (
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border-2 border-white shadow-sm z-10">
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                            )}
                            
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold ${step.status === 'active' ? 'text-blue-600' : 'text-gray-700'}`}>{step.label}</span>
                                {step.status === "complete" && (
                                    <span className="text-xs text-green-500 font-medium">{step.date} • {step.time}</span>
                                )}
                                {step.status === "active" && (
                                    <span className="text-xs text-blue-400 italic">{t('processing')}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Content Area - Right 3 Columns */}
        <div className="lg:col-span-3 space-y-6">
             {/* Info Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-500">
                        <User className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">{t('waitingFor')}</p>
                        <h3 className="text-base font-bold text-gray-700">Sarah Connor</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{t('deptHead')} • {t('itDept')}</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-lg text-green-500">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">{t('approvalLimit')}</p>
                        <h3 className="text-lg font-black text-green-600">$ 5,000.00</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{t('limitNote')}</p>
                    </div>
                </div>
             </div>

             {/* Document Details Overlay */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30 flex justify-between items-center">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('history')}</h2>
                    <button className="text-xs font-bold text-[#3f6ad8] hover:underline flex items-center gap-1">
                        {t('viewFull')} <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
                <div className="p-6 space-y-6">
                   {[
                       {action: t('commentAdded'), user: "John Doe", text: "Urgent request for the new engineering hires.", time: "2 hours ago"},
                       {action: t('docUpdated'), user: "John Doe", text: "Added tech specs for M3 chips.", time: "3 hours ago"},
                       {action: t('draftSaved'), user: "John Doe", text: "Initial draft created.", time: "5 hours ago"}
                   ].map((item, idx) => (
                       <div key={idx} className="flex gap-4">
                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                               <Activity className="w-4 h-4 text-gray-400" />
                           </div>
                           <div>
                               <div className="flex items-center gap-2">
                                   <span className="text-xs font-bold text-gray-700">{item.user}</span>
                                   <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 font-bold uppercase">{item.action}</span>
                                   <span className="text-[10px] text-gray-300">{item.time}</span>
                               </div>
                               <p className="text-sm text-gray-500 mt-1 leading-relaxed">"{item.text}"</p>
                           </div>
                       </div>
                   ))}
                </div>
             </div>

             {/* Bottom CTA */}
             <div className="flex justify-end gap-3">
                 <button className="px-6 py-2.5 bg-gray-50 text-gray-600 rounded-xl border border-gray-200 hover:bg-white font-bold text-sm transition-all shadow-sm">
                     {t('sendReminder')}
                 </button>
                 <button className="px-6 py-2.5 bg-[#3f6ad8] text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                     <FileText className="w-4 h-4" />
                     {t('downloadPdf')}
                 </button>
             </div>
        </div>
      </div>
    </div>
  );
}
