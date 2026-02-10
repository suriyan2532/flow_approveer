"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowLeft, Save, Send, FileText, Building2, Calendar, Banknote, Upload } from "lucide-react";

export default function CreateContractPage() {
  const t = useTranslations('Procurement.contracts');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const [formData, setFormData] = useState({
    vendor: "",
    title: "",
    startDate: "",
    endDate: "",
    value: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Contract created successfully!");
    router.push("/dashboard/procurement/contracts");
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
                  <Building2 className="w-4 h-4 text-gray-400" />
                  {t('form.vendor')}
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. ABC Corp"
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                  value={formData.vendor}
                  onChange={(e) => setFormData({...formData, vendor: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('form.contractTitle')}
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Office Cleaning Service 2024"
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {t('form.startDate')}
                  </label>
                  <input 
                    type="date"
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {t('form.endDate')}
                  </label>
                  <input 
                    type="date"
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <Banknote className="w-4 h-4 text-gray-400" />
                  {t('form.value')}
                </label>
                <div className="relative">
                  <input 
                    type="number"
                    required
                    placeholder="0.00"
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 pl-3 pr-12 bg-gray-50 focus:bg-white transition-all outline-none font-bold text-gray-700 font-kanit"
                    value={formData.value}
                    onChange={(e) => setFormData({...formData, value: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">THB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('form.details_label')}
                </label>
                <textarea 
                  rows={4}
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none resize-none font-kanit"
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <Upload className="w-4 h-4 text-gray-400" />
                  {t('form.upload')}
                </label>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#3f6ad8] transition-colors" />
                    <p className="text-sm text-gray-600 font-kanit">
                      Click or drag file to upload
                    </p>
                    <p className="text-xs text-gray-500 font-kanit">
                      PDF, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            <div className="bg-[#3f6ad8] text-white rounded-xl shadow-lg shadow-blue-500/20 p-6">
              <h3 className="text-lg font-bold mb-2 font-kanit">Contract Policy</h3>
              <p className="text-blue-100 text-sm mb-4 font-kanit">
                Please ensure all contract terms are reviewed by the legal department before saving.
              </p>
              <ul className="text-xs text-blue-100 space-y-1 list-disc list-inside opacity-80 font-kanit">
                <li>Verify vendor details</li>
                <li>Check start and end dates</li>
                <li>Ensure value includes VAT</li>
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
                  {tCommon('cancel')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
