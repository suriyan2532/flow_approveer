"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2, Clock, User, DollarSign, Activity, ChevronRight, FileText } from "lucide-react";
import { useParams } from "next/navigation";

export default function RequisitionStatusPage() {
  const params = useParams();
  const id = params?.id as string;
  const t = useTranslations("Procurement.workflow.tracking");
  const reqT = useTranslations("Procurement.purchaseRequisitions");
  const tCommon = useTranslations("Common");
  const router = useRouter();

  const steps = [
    { key: "created", label: t('stepCreated'), status: "complete", date: "Feb 10, 2026", time: "09:00 AM", user: "John Doe" },
    { key: "dept", label: t('stepDept'), status: "active", approver: "Sarah Connor (Dept Head)", limit: "5,000 THB" },
    { key: "finance", label: t('stepFinance'), status: "pending", approver: "Mike Ross (CFO)", limit: "50,000 THB" },
    { key: "final", label: t('stepFinal'), status: "pending", approver: "Jessica Pearson (CEO)", limit: "Unlimited" },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>
          <div>
              <h1 className="text-2xl font-bold text-[#3f6ad8] font-kanit">{t('title')}</h1>
              <p className="text-sm text-gray-500 font-kanit">PR #{id} • Office Supplies Q4</p>
          </div>
        </div>
        <div className="flex gap-2 font-kanit">
             <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold border border-amber-100 flex items-center gap-1.5">
                 <Clock className="w-3.5 h-3.5" />
                 รออนุมัติ
             </span>
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
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white border-4 border-amber-100 shadow-md z-10 animate-pulse">
                                    <Clock className="w-5 h-5" />
                                </div>
                            ) : (
                                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border-2 border-white shadow-sm z-10">
                                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                </div>
                            )}
                            
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold ${step.status === 'active' ? 'text-amber-600' : 'text-gray-700'}`}>{step.label}</span>
                                {step.status === "complete" && (
                                    <span className="text-xs text-green-500 font-medium">{step.date} • {step.time}</span>
                                )}
                                {step.status === "active" && (
                                    <span className="text-xs text-amber-500 italic">กำลังรอการพิจารณา...</span>
                                )}
                                {step.status === "pending" && (step.approver || step.limit) && (
                                    <div className="mt-1 flex flex-col gap-0.5 opacity-60">
                                        {step.approver && <span className="text-[10px] text-gray-400 flex items-center gap-1"><User className="w-2.5 h-2.5" /> {step.approver}</span>}
                                        {step.limit && <span className="text-[10px] text-gray-400 flex items-center gap-1"><DollarSign className="w-2.5 h-2.5" /> Limit: {step.limit}</span>}
                                    </div>
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
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-kanit">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-4 ring-2 ring-amber-500/10">
                    <div className="p-3 bg-amber-50 rounded-lg text-amber-500">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">{tCommon('status')}</p>
                        <h3 className="text-base font-bold text-amber-600 italic">รออนุมัติ (Pending Approval)</h3>
                        <p className="text-xs text-gray-400 mt-0.5">ปัจจุบันอยู่ที่: <b>หัวหน้าแผนกอนุมัติ</b></p>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-4">
                    <div className="p-3 bg-[#f0f4ff] rounded-lg text-[#3f6ad8]">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase mb-1">{t('approvalLimit')}</p>
                        <h3 className="text-lg font-black text-[#3f6ad8]">45,000.00</h3>
                        <p className="text-xs text-gray-400 mt-0.5">THB (PR Amount for Verification)</p>
                    </div>
                </div>
             </div>

             {/* Document Details Wrapper */}
             <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden font-kanit">
                <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/20 flex justify-between items-center">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{t('history')}</h2>
                    <button className="text-xs font-bold text-[#3f6ad8] hover:underline flex items-center gap-1">
                        {t('viewFull')} <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
                <div className="p-6 space-y-6">
                   {[
                       {action: t('stepCreated'), user: "John Doe", text: "ร้องขออุปกรณ์สำนักงานสำหรับ Q4", time: "8 hours ago"}
                   ].map((item, idx) => (
                       <div key={idx} className="flex gap-4">
                           <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                               <Activity className="w-4 h-4 text-gray-400" />
                           </div>
                           <div>
                               <div className="flex items-center gap-2">
                                   <span className="text-xs font-bold text-gray-700">{item.user}</span>
                                   <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-gray-100 text-gray-400`}>{item.action}</span>
                                   <span className="text-[10px] text-gray-300">{item.time}</span>
                               </div>
                               <p className="text-sm text-gray-500 mt-1 leading-relaxed">"{item.text}"</p>
                           </div>
                       </div>
                   ))}
                </div>
             </div>

             {/* Approval Actions Panel */}
             <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 font-kanit shadow-lg shadow-blue-500/5">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-lg font-black text-[#3f6ad8] uppercase tracking-tight italic">Approval Action Required</h4>
                        <p className="text-xs text-gray-500">กรุณาตรวจสอบเอกสารและเลือกดำเนินการ</p>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-auto px-8 py-3 bg-white text-rose-600 rounded-xl font-black border-2 border-rose-100 hover:bg-rose-50 hover:border-rose-200 transition-all shadow-sm uppercase tracking-wider text-sm">
                            ไม่อนุมัติ (Reject)
                        </button>
                        <button className="flex-1 md:flex-auto px-10 py-3 bg-[#3f6ad8] text-white rounded-xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            อนุมัติ (Approve)
                        </button>
                    </div>
                </div>
             </div>

             {/* Secondary Actions */}
             <div className="flex justify-end gap-3 font-kanit text-sm pt-4 border-t border-gray-100">
                  <button className="px-5 py-2 text-gray-400 hover:text-gray-600 font-bold transition-all flex items-center gap-2">
                     <FileText className="w-4 h-4" />
                     {t('downloadPdf')}
                  </button>
                  <button className="px-5 py-2 text-gray-400 hover:text-gray-600 font-bold transition-all">
                      {tCommon('print')}
                  </button>
             </div>
        </div>
      </div>
    </div>
  );
}
