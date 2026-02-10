"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowLeft, Save, Send, Car, Calendar, Clock, MapPin, Users, FileText } from "lucide-react";

export default function VehicleRequestPage() {
  const t = useTranslations("Vehicles");
  const tCommon = useTranslations("Common");
  const router = useRouter();

  const [formData, setFormData] = useState({
    vehicleType: "",
    destination: "",
    purpose: "",
    passengers: 1,
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Request submitted successfully!");
    router.push("/dashboard/vehicles/history");
  };

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
            <h1 className="text-2xl font-bold text-[#3f6ad8]">{t('request')}</h1>
            <p className="text-sm text-gray-500">{t('subtitle')}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Form - Left 2 Columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {t('newRequest')}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Car className="w-4 h-4 text-gray-400" />
                    {t('vehicleType')}
                  </label>
                  <select 
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2.5 bg-gray-50 focus:bg-white transition-all outline-none"
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="sedan">Sedan (4 Seats)</option>
                    <option value="suv">SUV (7 Seats)</option>
                    <option value="van">Van (12 Seats)</option>
                    <option value="pickup">Pickup Truck</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    {t('passengers')}
                  </label>
                  <input 
                    type="number"
                    min="1"
                    required
                    className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                    value={formData.passengers}
                    onChange={(e) => setFormData({...formData, passengers: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {t('destination')}
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Branch Office, Client Meeting"
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  {t('purpose')}
                </label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Describe the purpose of this trip..."
                  className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none resize-none"
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                ></textarea>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xs font-bold text-[#3f6ad8] uppercase tracking-widest">{t('startTime')}</p>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input 
                        type="date"
                        required
                        className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      />
                    </div>
                    <div className="w-32">
                      <input 
                        type="time"
                        required
                        className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                        value={formData.startTime}
                        onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-bold text-[#3f6ad8] uppercase tracking-widest">{t('endTime')}</p>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input 
                        type="date"
                        required
                        className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                        value={formData.endDate}
                        onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      />
                    </div>
                    <div className="w-32">
                      <input 
                        type="time"
                        required
                        className="w-full border-gray-200 rounded-lg focus:ring-[#3f6ad8] focus:border-[#3f6ad8] text-sm py-2 bg-gray-50 focus:bg-white transition-all outline-none"
                        value={formData.endTime}
                        onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            <div className="bg-[#3f6ad8] text-white rounded-xl shadow-lg shadow-blue-500/20 p-6">
              <h3 className="text-lg font-bold mb-2">Request Status</h3>
              <p className="text-blue-100 text-sm mb-6">Your request will be sent to the HR manager for approval.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  <span className="text-sm font-medium">Pending Review</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold text-gray-700 mb-4 uppercase tracking-widest">Actions</h3>
              <div className="space-y-3">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#3f6ad8] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10"
                >
                  <Send className="w-4 h-4" />
                  {t('request')}
                </button>
                <button 
                  type="button"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-600 py-2.5 rounded-lg font-bold text-sm border border-gray-100 hover:bg-white transition-all"
                >
                  <Save className="w-4 h-4 text-gray-400" />
                  {tCommon('save')}
                </button>
              </div>
              <p className="text-[10px] text-gray-400 mt-4 text-center leading-relaxed italic">
                * Please ensure all details are correct before submitting.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
