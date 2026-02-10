"use client";

import { use } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  ArrowLeft, 
  FileText, 
  Building2, 
  Calendar, 
  Banknote, 
  Clock, 
  CheckCircle2, 
  ExternalLink,
  Download,
  AlertCircle
} from "lucide-react";

const initialContracts = [
  {
    id: "CTR-2023-001",
    vendor: "ABC Corp",
    title: "Office Cleaning Service",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    status: "Active",
    value: "120,000 THB",
    details: "Daily office cleaning services for the main headquarters located at 123 Business Ave. Service includes all cleaning supplies, floor waxing, and window cleaning once a month.",
    terms: "Payment within 30 days of invoice receipt. Subject to quarterly performance reviews."
  },
  {
    id: "CTR-2023-002",
    vendor: "Tech Solutions Ltd",
    title: "Software License Maintenance",
    startDate: "2023-06-01",
    endDate: "2024-05-31",
    status: "Active",
    value: "500,000 THB",
    details: "Annual maintenance and support for core ERP and HR systems. Includes 24/7 technical support, security patches, and major version upgrades.",
    terms: "Monthly uptime guarantee of 99.9%. Support response time within 4 hours for critical issues."
  },
  {
    id: "CTR-2023-003",
    vendor: "Security Plus",
    title: "Security Guard Service",
    startDate: "2022-01-01",
    endDate: "2022-12-31",
    status: "Expired",
    value: "200,000 THB",
    details: "On-site security services from 6 PM to 6 AM, Monday through Friday. Includes two security personnel and regular perimeter checks.",
    terms: "Contract ended in 2022. Final payment processed on Jan 15, 2023."
  },
];

export default function ContractDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const t = useTranslations('Procurement.contracts');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const contract = initialContracts.find(c => c.id === id) || initialContracts[0];

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
                  <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-[#3f6ad8] rounded uppercase tracking-wider">{contract.id}</span>
                  <p className="text-xs text-gray-400 font-kanit">Created on Jan 10, 2023</p>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 font-kanit">{contract.title}</h1>
          </div>
        </div>
        
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit">
                <Download className="w-4 h-4" />
                {tCommon('print')}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#3f6ad8] text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 font-kanit">
                <CheckCircle2 className="w-4 h-4" />
                {t('active')}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-0 overflow-hidden">
             <div className="p-6 border-b border-gray-100 bg-gray-50/30">
                <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#3f6ad8]" />
                    {t('form.details')}
                </h2>
             </div>
             <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-blue-50 text-[#3f6ad8] rounded-lg">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{t('vendor')}</p>
                                <p className="text-base font-bold text-gray-700 font-kanit">{contract.vendor}</p>
                                <p className="text-sm text-gray-400 font-kanit">Vendor ID: VND-09882</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                                <Banknote className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{t('value')}</p>
                                <p className="text-xl font-black text-gray-900 font-kanit">{contract.value}</p>
                                <p className="text-sm text-gray-400 font-kanit">Exclusive of VAT</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-orange-50 text-orange-500 rounded-lg">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{t('duration')}</p>
                                <div className="flex items-center gap-2 text-sm font-bold text-gray-700 font-kanit">
                                    <span>{contract.startDate}</span>
                                    <span className="text-gray-300">→</span>
                                    <span>{contract.endDate}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-1 font-kanit">12 Months Renewal</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1 p-2 bg-green-50 text-green-500 rounded-lg">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 font-kanit">{tCommon('status')}</p>
                                <div className="flex items-center gap-2">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${contract.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'} font-kanit`}>
                                        {contract.status === 'Active' ? t('active') : t('expired')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100 space-y-6">
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-3 font-kanit">{t('form.details_label')}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-kanit bg-gray-50 p-4 rounded-xl border border-gray-100 italic">
                            "{contract.details}"
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-800 mb-3 font-kanit">Contract Terms & Conditions</h3>
                        <div className="p-4 rounded-xl border border-blue-50 bg-blue-50/30">
                            <p className="text-sm text-gray-600 font-kanit leading-relaxed">
                                {contract.terms}
                            </p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Timeline / History Section */}
          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 font-kanit">Action History</h2>
                <div className="space-y-6">
                    {[
                        { date: 'Jan 10, 2023', user: 'Admin User', action: 'Contract Created', description: 'Initial contract draft uploaded.' },
                        { date: 'Jan 12, 2023', user: 'Head of Finance', action: 'Approved', description: 'Contract budget verified and approved.' },
                        { date: 'Jan 15, 2023', user: 'System', action: 'Activated', description: 'Contract status changed to Active.' },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm ring-4 ring-blue-50"></div>
                                {i < 2 && <div className="w-0.5 h-full bg-blue-50 mt-1"></div>}
                            </div>
                            <div className="pb-4">
                                <p className="text-xs font-black text-gray-400 font-kanit">{item.date}</p>
                                <p className="text-sm font-bold text-[#3f6ad8] font-kanit">{item.action}</p>
                                <p className="text-xs text-gray-500 font-kanit">By {item.user} — {item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Attachments</h3>
            <div className="space-y-3">
                <div className="group flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-100 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 text-red-500 rounded-lg group-hover:bg-white">
                            <FileText className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-700 group-hover:text-[#3f6ad8] transition-colors font-kanit">Contract_Signed.pdf</p>
                            <p className="text-xs text-gray-400">2.4 MB</p>
                        </div>
                    </div>
                    <Download className="w-4 h-4 text-gray-300 group-hover:text-[#3f6ad8]" />
                </div>
                <div className="group flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:bg-blue-50 hover:border-blue-100 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-[#3f6ad8] rounded-lg group-hover:bg-white">
                            <FileText className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-700 group-hover:text-[#3f6ad8] transition-colors font-kanit">Vendor_Certification.pdf</p>
                            <p className="text-xs text-gray-400">1.1 MB</p>
                        </div>
                    </div>
                    <Download className="w-4 h-4 text-gray-300 group-hover:text-[#3f6ad8]" />
                </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 border border-dashed border-gray-300 rounded-xl text-xs font-bold text-gray-400 hover:text-[#3f6ad8] hover:border-[#3f6ad8] hover:bg-blue-50 transition-all font-kanit">
                <ExternalLink className="w-3 h-3" />
                View All Attachments
            </button>
          </div>

          <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6">
              <h3 className="text-sm font-bold text-amber-800 mb-2 flex items-center gap-2 font-kanit">
                  <AlertCircle className="w-4 h-4" />
                  Upcoming Deadline
              </h3>
              <p className="text-xs text-amber-700 font-kanit mb-4 leading-relaxed">
                  This contract is set to expire in <span className="font-bold underline">45 days</span>. Please initiate renewal process if required.
              </p>
              <button className="w-full py-2 bg-amber-500 text-white rounded-lg text-sm font-bold hover:bg-amber-600 transition-colors shadow-sm font-kanit">
                  Initiate Renewal
              </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border-0 p-6">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-kanit">Management</h3>
                <div className="space-y-2">
                    <button className="w-full py-2.5 bg-gray-50 text-gray-600 rounded-xl text-sm font-bold hover:bg-[#3f6ad8] hover:text-white transition-all font-kanit border border-gray-100">
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
