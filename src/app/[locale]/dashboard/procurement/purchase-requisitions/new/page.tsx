"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { ArrowLeft, Save, Send, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function NewRequisitionPage() {
  const t = useTranslations("Procurement.workflow.newRequest");
  const commonT = useTranslations("Common");
  const router = useRouter();

  const [items, setItems] = useState([{ id: 1, name: "", category: "", qty: 1, price: 0 }]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: "", category: "", qty: 1, price: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-500" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 font-medium transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            {t('saveDraft')}
          </button>
          <button className="px-4 py-2 bg-[#3f6ad8] text-white rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 font-medium transition-colors flex items-center gap-2">
            <Send className="w-4 h-4" />
            {t('submit')}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3f6ad8] rounded-full"></span>
              {t('itemDetails')}
            </h2>
            
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-end border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <div className="col-span-5">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">{t('item')}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder={t('itemPlaceholder')}
                    />
                  </div>
                  <div className="col-span-3">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">{t('category')}</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none cursor-pointer">
                      <option>{useTranslations("Dashboard")('chartCategories.itEquipment')}</option>
                      <option>{useTranslations("Dashboard")('chartCategories.officeSupplies')}</option>
                      <option>{useTranslations("Dashboard")('chartCategories.furniture')}</option>
                    </select>
                  </div>
                  <div className="col-span-1">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">{t('quantity')}</label>
                    <input type="number" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" defaultValue={1} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">{t('unitPrice')}</label>
                    <input type="number" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" placeholder="0.00" />
                  </div>
                  <div className="col-span-1 flex justify-center pb-2">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={addItem}
                className="mt-4 flex items-center gap-2 text-sm font-bold text-[#3f6ad8] hover:text-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                {t('addAnother')}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3f6ad8] rounded-full"></span>
              {t('justification')}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5">{t('purpose')}</label>
                <textarea 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all min-h-[120px]"
                  placeholder={t('purposePlaceholder')}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03)] p-6 border border-gray-100 sticky top-6">
            <h2 className="text-lg font-bold text-gray-700 mb-6 underline decoration-[#3f6ad8] decoration-2 underline-offset-8 decoration-opacity-30">{t('summary')}</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t('subtotal')}</span>
                <span className="font-bold text-gray-700">$ {calculateTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{t('vat')}</span>
                <span className="font-bold text-gray-700">$ {(calculateTotal() * 0.07).toLocaleString()}</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-base font-bold text-gray-800">{t('total')}</span>
                <span className="text-xl font-black text-[#3f6ad8]">$ {(calculateTotal() * 1.07).toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-xs text-blue-600 font-medium leading-relaxed italic">
                    {t('workflowNote')}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
