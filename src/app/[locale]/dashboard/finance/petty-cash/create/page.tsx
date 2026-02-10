"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowLeft, Save, Send, FileText, Banknote, Calendar, Tag, Upload } from "lucide-react";

export default function PettyCashCreatePage() {
  const t = useTranslations("Finance.pettyCash");
  const tCommon = useTranslations("Common");
  const router = useRouter();

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split('T')[0],
    category: "",
    receipt: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Petty Cash request submitted successfully!");
    router.push("/dashboard/finance/petty-cash");
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
            <h1 className="text-2xl font-bold text-[#3f6ad8]">{t('newRequest')}</h1>
            <p className="text-sm text-gray-500">{t('form.title')}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Form - Left 2 Columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {t('form.details')}
              </h2>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('description')}
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder={t('form.enterDescription')}
                  className="w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-gray-400" />
                    {t('amount')}
                  </label>
                  <div className="relative">
                    <input 
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      placeholder="0.00"
                      className="w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm py-2 pl-3 pr-12 bg-gray-50 focus:bg-white transition-all outline-none font-bold text-gray-700"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">THB</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {t('date')}
                  </label>
                  <input 
                    type="date"
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {t('category')}
                </label>
                <select 
                  required
                  className="w-full border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500 text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="">{t('form.selectCategory')}</option>
                  <option value="travel">Travel / Transportation</option>
                  <option value="food">Food & Allowance</option>
                  <option value="supplies">Office Supplies</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <Upload className="w-4 h-4 text-gray-400" />
                  {t('receipt')}
                </label>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-green-500 transition-colors" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            <div className="bg-green-600 text-white rounded-xl shadow-lg shadow-green-500/20 p-6">
              <h3 className="text-lg font-bold mb-2">{t('form.instruction.title')}</h3>
              <p className="text-green-100 text-sm mb-4">
                {t('form.instruction.subtitle')}
              </p>
              <ul className="text-xs text-green-100 space-y-1 list-disc list-inside opacity-80">
                <li>{t('form.instruction.list.upload')}</li>
                <li>{t('form.instruction.list.categorize')}</li>
                <li>{t('form.instruction.list.submit')}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Actions</h3>
              <div className="space-y-3">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition-all shadow-md shadow-green-500/10"
                >
                  <Send className="w-4 h-4" />
                  {t('submit')}
                </button>
                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-600 py-2.5 rounded-lg font-bold text-sm border border-gray-100 hover:bg-white transition-all"
                >
                  <Save className="w-4 h-4 text-gray-400" />
                  {t('saveDraft')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
