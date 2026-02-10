"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowLeft, Save, Send, FileText, Banknote, Calendar, Plus, Trash2, Receipt, AlertCircle, Info } from "lucide-react";

export default function CreateClearancePage() {
  const t = useTranslations('Finance.clearance');
  const tCommon = useTranslations('Common');
  const router = useRouter();

  const [expenses, setExpenses] = useState([
    { description: "", amount: "" }
  ]);
  
  const [formData, setFormData] = useState({
    advanceRef: "",
    notes: "",
  });

  const addExpense = () => {
    setExpenses([...expenses, { description: "", amount: "" }]);
  };

  const removeExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const updateExpense = (index: number, field: string, value: string) => {
    const newExpenses = [...expenses];
    (newExpenses[index] as any)[field] = value;
    setExpenses(newExpenses);
  };

  const totalExpense = expenses.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
  const advanceAmount = 5000; // Mocked advance amount for ADV-2023-001
  const balance = advanceAmount - totalExpense;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Clearance request submitted successfully!");
    router.push("/dashboard/finance/clearance");
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

      <form onSubmit={handleSubmit} className="max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form - Left 2 Columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2 font-kanit">
                <FileText className="w-4 h-4" />
                {t('form.details')}
              </h2>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <Receipt className="w-4 h-4 text-gray-400" />
                  {t('form.advanceReference')}
                </label>
                <select 
                  required
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none font-kanit cursor-pointer"
                  value={formData.advanceRef}
                  onChange={(e) => setFormData({...formData, advanceRef: e.target.value})}
                >
                  <option value="">{t('form.selectAdvance')}</option>
                  <option value="ADV-2023-001">ADV-2023-001 - Business Trip (5,000 THB)</option>
                  <option value="ADV-2023-005">ADV-2023-005 - Client Dinner (2,500 THB)</option>
                </select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                    <Banknote className="w-4 h-4 text-gray-400" />
                    {t('form.expenses')}
                    </label>
                    <button 
                        type="button"
                        onClick={addExpense}
                        className="text-xs font-bold text-[#3f6ad8] hover:underline flex items-center gap-1 font-kanit"
                    >
                        <Plus className="w-3 h-3" />
                        {t('form.addExpense')}
                    </button>
                </div>

                <div className="space-y-3">
                    {expenses.map((expense, index) => (
                        <div key={index} className="flex gap-3 items-start animate-in fade-in slide-in-from-left-2 duration-200">
                            <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="sm:col-span-2">
                                    <input 
                                        type="text"
                                        placeholder={t('form.description')}
                                        required
                                        className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none font-kanit"
                                        value={expense.description}
                                        onChange={(e) => updateExpense(index, 'description', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="relative">
                                        <input 
                                            type="number"
                                            placeholder={t('form.amount')}
                                            required
                                            className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 pl-3 pr-10 bg-gray-50 focus:bg-white transition-all outline-none font-bold text-gray-700 font-kanit"
                                            value={expense.amount}
                                            onChange={(e) => updateExpense(index, 'amount', e.target.value)}
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none font-kanit text-[10px] text-gray-400">
                                            THB
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {expenses.length > 1 && (
                                <button 
                                    type="button"
                                    onClick={() => removeExpense(index)}
                                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-4">
                 <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-kanit">
                  <Receipt className="w-4 h-4 text-gray-400" />
                  {t('form.receipts')}
                </label>
                <div className="border-2 border-dashed border-gray-100 rounded-xl p-8 text-center hover:border-blue-200 transition-colors bg-gray-50/50 cursor-pointer group">
                  <div className="p-3 bg-white w-fit mx-auto rounded-full shadow-sm mb-3 group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm font-bold text-gray-600 font-kanit">{t('form.uploadReceipts')}</p>
                  <p className="text-xs text-gray-400 mt-1 font-kanit">PDF, JPG, PNG (Max 10MB)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest font-kanit">Summary</h3>
               
               <div className="space-y-4 font-kanit">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Advance Amount</span>
                    <span className="font-bold text-gray-700">{advanceAmount.toLocaleString()} THB</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{t('form.totalExpense')}</span>
                    <span className="font-bold text-red-600">-{totalExpense.toLocaleString()} THB</span>
                  </div>
                  <div className="h-px bg-gray-100"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-700">{t('form.balance')}</span>
                    <div className="text-right">
                        <span className={`text-lg font-black ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                           {balance.toLocaleString()}
                        </span>
                        <span className="text-xs font-bold text-gray-400 ml-1 uppercase">THB</span>
                    </div>
                  </div>
               </div>

                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 flex gap-3 text-blue-700 text-xs font-kanit">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>Remaining balance must be returned to the finance department within 3 working days.</p>
                </div>
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
