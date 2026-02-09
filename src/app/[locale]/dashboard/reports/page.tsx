"use client";

import { BarChart, FileText, Download, Calendar, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReportsPage() {
  const t = useTranslations('Reports');
  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                    <BarChart className="w-5 h-5"/>
                </div>
                <h1 className="text-xl font-bold text-[#3f6ad8]">{t('title')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Report Card 1 */}
        <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border border-gray-100/50 hover:border-[#3f6ad8]/30 transition-all duration-300 hover:shadow-lg group">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full group-hover:bg-[#3f6ad8] transition-colors duration-300">
                <FileText className="h-6 w-6 text-[#3f6ad8] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate mb-1">
                    {t('monthlySummary')}
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-700">
                      {t('procurementReport')}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-[#3f6ad8] bg-blue-50 hover:bg-[#3f6ad8] hover:text-white transition-colors">
                     <Download className="w-4 h-4 mr-2" />
                     {t('downloadCsv')}
                </button>
            </div>
          </div>
        </div>

        {/* Report Card 2 */}
        <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border border-gray-100/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg group">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-50 p-3 rounded-full group-hover:bg-green-600 transition-colors duration-300">
                <FileText className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate mb-1">
                    {t('ytdAnalysis')}
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-700">
                      {t('expenseReport')}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
             <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-green-700 bg-green-50 hover:bg-green-600 hover:text-white transition-colors">
                     <Download className="w-4 h-4 mr-2" />
                     {t('downloadPdf')}
                </button>
            </div>
          </div>
        </div>

        {/* Report Card 3 */}
         <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border border-gray-100/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg group">
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                <BarChart className="h-6 w-6 text-amber-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate mb-1">
                    {t('kpiDashboard')}
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-700">
                       {t('performanceMetrics')}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
             <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-amber-700 bg-amber-50 hover:bg-amber-500 hover:text-white transition-colors">
                     <Download className="w-4 h-4 mr-2" />
                     {t('exportFull')}
                </button>
            </div>
          </div>
        </div>
      </div>

       <div className="bg-white shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] rounded-xl p-6 border border-gray-100">
           <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-gray-700">{t('customGenerator')}</h3>
                <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded">{t('advancedMode')}</span>
           </div>
           
           <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
               <div className="sm:col-span-3">
                   <label htmlFor="report-type" className="block text-sm font-semibold text-gray-700 mb-1">{t('reportType')}</label>
                   <select id="report-type" name="report-type" className="block w-full text-base border-gray-200 focus:outline-none focus:ring-[#3f6ad8] focus:border-[#3f6ad8] sm:text-sm rounded-lg border p-2.5 bg-gray-50 focus:bg-white transition-colors">
                       <option>{t('procurementReport')}</option>
                       <option>{t('expenseReport')}</option>
                       <option>User Activity Logs</option>
                   </select>
               </div>

               <div className="sm:col-span-3">
                   <label htmlFor="date-range" className="block text-sm font-semibold text-gray-700 mb-1">{t('dateRange')}</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        </div>
                        <input type="text" name="date-range" id="date-range" className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:bg-white transition-colors" placeholder={t('selectDates')} />
                    </div>
               </div>

                <div className="sm:col-span-6 flex justify-end pt-4">
                    <button type="submit" className="ml-3 inline-flex items-center justify-center py-2.5 px-6 border border-transparent shadow-lg shadow-blue-500/30 text-sm font-medium rounded-lg text-white bg-[#3f6ad8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors">
                        {t('generate')} <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
           </div>
       </div>
    </div>
  );
}
