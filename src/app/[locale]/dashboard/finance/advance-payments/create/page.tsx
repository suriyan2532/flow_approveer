"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowLeft, Save, Send, FileText, Banknote, Calendar, AlertCircle } from "lucide-react";

export default function CreateAdvancePaymentPage() {
  const t = useTranslations('Finance.advancePayments');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const [formData, setFormData] = useState({
    purpose: "",
    amount: "",
    clearanceDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Advance Payment request submitted successfully!");
    router.push("/dashboard/finance/advance-payments");
  };

  return (
    <div className="space-y-6 pb-12 text-[#495057]">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-500" />
        </button>
        <div>
            <h1 className="text-2xl font-bold text-[#3f6ad8] font-kanit">{t('form.title')}</h1>
            <p className="text-sm text-gray-500 font-kanit">{t('subtitle')}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Form - Left 2 Columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 font-kanit">
                <FileText className="w-4 h-4" />
                {t('form.details')}
              </h2>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('form.purpose')}
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Business Trip to Chiang Mai"
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                    <Banknote className="w-4 h-4 text-gray-400" />
                    {t('form.amount')}
                  </label>
                  <div className="relative">
                    <input 
                      type="number"
                      required
                      placeholder="0.00"
                      className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 pl-3 pr-12 bg-gray-50 focus:bg-white transition-all outline-none font-bold text-gray-700 font-kanit"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none font-kanit text-xs text-gray-400">
                      THB
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {t('form.clearanceDate')}
                  </label>
                  <input 
                    type="date"
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                    value={formData.clearanceDate}
                    onChange={(e) => setFormData({...formData, clearanceDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('form.notes')}
                </label>
                <textarea 
                  rows={4}
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none resize-none font-kanit"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            <div className="bg-amber-500 text-white rounded-xl shadow-lg shadow-amber-500/20 p-6">
              <h3 className="text-lg font-bold mb-2 font-kanit flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-100" />
                Advance Policy
              </h3>
              <p className="text-amber-50 text-sm mb-4 font-kanit">
                Please ensure all advance requests are justified and within your entitlement.
              </p>
              <ul className="text-xs text-amber-50 space-y-1 list-disc list-inside opacity-80 font-kanit">
                <li>Submit at least 3 days in advance</li>
                <li>Clear funds within 5 days of trip end</li>
                <li>Unused funds must be returned</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest font-kanit">Actions</h3>
              <div className="space-y-3">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#3f6ad8] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10 font-kanit"
                >
                  <Send className="w-4 h-4" />
                  {t('form.submit')}
                </button>
                <button 
                  type="button"
                  onClick={() => router.back()}
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-600 py-2.5 rounded-lg font-bold text-sm border border-gray-100 hover:bg-white transition-all font-kanit"
                >
                  <ArrowLeft className="w-4 h-4 text-gray-400" />
                  {t('form.back')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
