"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { Users, DollarSign, Activity, Calendar, ArrowUpRight, ArrowDownRight, MoreHorizontal, FileText } from "lucide-react";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const COLORS = ["#3f6ad8", "#3ac47d", "#f7b924", "#d92550", "#16aaff"];

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  const trendsData = [
    { name: t('months.jan'), budget: 4000, actual: 4400 },
    { name: t('months.feb'), budget: 3000, actual: 3200 },
    { name: t('months.mar'), budget: 5000, actual: 4800 },
    { name: t('months.apr'), budget: 2780, actual: 3908 },
    { name: t('months.may'), budget: 1890, actual: 4800 },
    { name: t('months.jun'), budget: 2390, actual: 3800 },
    { name: t('months.jul'), budget: 3490, actual: 4300 },
  ];

  const procurementData = [
    { name: t('chartCategories.officeSupplies'), value: 400, fill: "#3f6ad8" },
    { name: t('chartCategories.itEquipment'), value: 300, fill: "#3ac47d" },
    { name: t('chartCategories.furniture'), value: 200, fill: "#f7b924" },
    { name: t('chartCategories.maintenance'), value: 278, fill: "#d92550" },
    { name: t('chartCategories.software'), value: 189, fill: "#16aaff" },
  ];

  const financeData = [
    { name: t('chartCategories.salaries'), value: 45 },
    { name: t('chartCategories.operations'), value: 25 },
    { name: t('chartCategories.marketing'), value: 15 },
    { name: t('chartCategories.research'), value: 10 },
    { name: t('chartCategories.other'), value: 5 },
  ];

  const timelineItems = [
    { title: t('timelineItems.meeting'), time: "10:00 am", color: "bg-blue-500" },
    { title: t('timelineItems.launched'), time: "12:15 pm", color: "bg-green-500" },
    { title: t('timelineItems.codeReview'), time: "02:30 pm", color: "bg-amber-500" },
    { title: t('timelineItems.customerCall'), time: "04:45 pm", color: "bg-red-500" }
  ];

  return (
    <div className="space-y-6 text-[#495057]">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-blue-100 rounded-lg text-[#3f6ad8]">
                    <Activity className="w-5 h-5"/>
                </div>
               <h1 className="text-xl font-bold text-[#3f6ad8]">{t('title')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            {t('description')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-2 items-center"> 
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg shadow-sm hover:bg-gray-50 text-sm font-medium transition-colors">
                {t('export')}
            </button>
          <button className="px-4 py-2 bg-[#3f6ad8] text-white rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-700 text-sm font-medium transition-colors flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {t('last30Days')}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-[#3f6ad8] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('totalUsers')}</p>
              <h3 className="text-2xl font-bold text-[#3f6ad8]">1,896</h3>
            </div>
             <div className="p-3 bg-[#e0f3ff] rounded-full text-[#3f6ad8]">
                <Users className="w-6 h-6" />
             </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> +14%
             </span>
             <span className="text-gray-400 ml-2">{t('sinceLastMonth')}</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-green-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('revenue')}</p>
              <h3 className="text-2xl font-bold text-green-600">$ 14.2k</h3>
            </div>
             <div className="p-3 bg-green-50 rounded-full text-green-600">
                <DollarSign className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> +35%
             </span>
             <span className="text-gray-400 ml-2">{t('sinceLastMonth')}</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-amber-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('pendingOrders')}</p>
              <h3 className="text-2xl font-bold text-amber-500">64</h3>
            </div>
             <div className="p-3 bg-amber-50 rounded-full text-amber-500">
                <Activity className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-red-500 font-bold flex items-center bg-red-50 px-2 py-0.5 rounded-full">
                 <ArrowDownRight className="w-3 h-3 mr-1"/> -2%
             </span>
             <span className="text-gray-400 ml-2">{t('sinceYesterday')}</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-red-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('issues')}</p>
              <h3 className="text-2xl font-bold text-red-500">12</h3>
            </div>
             <div className="p-3 bg-red-50 rounded-full text-red-500">
                <FileText className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> {t('fixed')} 5
             </span>
             <span className="text-gray-400 ml-2">{t('waitingForReview')}</span>
          </div>
        </div>
      </div>

      {/* Row 2: Monthly Trends (Line) + Expense Distribution (Donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] p-6">
          <div className="flex items-center justify-between mb-6">
               <h2 className="text-lg font-bold text-gray-700">{t('monthlyTrends')}</h2>
               <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#3f6ad8]"></div>{t('budget')}</div>
                  <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500"></div>{t('actual')}</div>
               </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e9ecef" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#adb5bd', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#adb5bd', fontSize: 12}} />
                <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}
                />
                <Line type="monotone" dataKey="budget" stroke="#3f6ad8" strokeWidth={3} dot={{r: 4, fill: '#3f6ad8', strokeWidth: 2, stroke: '#fff'}} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="actual" stroke="#3ac47d" strokeWidth={3} dot={{r: 4, fill: '#3ac47d', strokeWidth: 2, stroke: '#fff'}} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-6">{t('financeDistribution')}</h2>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={financeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {financeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
              {financeData.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full`} style={{backgroundColor: COLORS[idx % COLORS.length]}}></div>
                          <span className="text-gray-600">{item.name}</span>
                      </div>
                      <span className="font-bold text-gray-700">{item.value}%</span>
                  </div>
              ))}
          </div>
        </div>
      </div>

      {/* Row 3: Procurement Status (Bar) + Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] p-6">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-lg font-bold text-gray-700">{t('procurementTitle')}</h2>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={procurementData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e9ecef" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#adb5bd', fontSize: 11}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#adb5bd', fontSize: 12}} />
                <Tooltip />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {procurementData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                     ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] p-6">
          <h2 className="text-lg font-bold text-gray-700 mb-6">{t('timeline')}</h2>
          <div className="flow-root relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100"></div>
            <ul className="space-y-6">
              {timelineItems.map((item, idx) => (
                <li key={idx} className="relative pl-10">
                  <span className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm -ml-1.5 ${item.color}`}></span>
                  <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
             <button className="w-full mt-6 py-2 text-sm text-[#3f6ad8] font-medium hover:bg-blue-50 rounded-lg transition-colors">
                 {t('viewAllActivity')}
             </button>
          </div>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-700">{t('activeUsers')}</h2>
           <div className="flex gap-2">
               <button className="text-xs font-semibold text-[#3f6ad8] bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">{t('pending')}</button>
               <button className="text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors">{t('approved')}</button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.name')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.status')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.role')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.actions')}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {[1, 2, 3, 4].map((user) => (
                <tr key={user} className="hover:bg-[#fcfdfd] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full shadow-sm"
                          src={`https://ui-avatars.com/api/?name=User+${user}&background=random`}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-700">{t('table.name')} {user}</div>
                        <div className="text-xs text-gray-400">user{user}@company.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                      {t('active')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {t('table.administrator')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     <button className="text-gray-400 hover:text-[#3f6ad8] transition-colors">
                         <MoreHorizontal className="w-5 h-5"/>
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/30 flex items-center justify-center">
            <button className="text-sm font-medium text-[#3f6ad8] hover:text-blue-700">{t('viewAllUsers')}</button>
        </div>
      </div>
    </div>
  );
}
