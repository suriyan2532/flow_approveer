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
import { Users, DollarSign, Activity, Calendar, ArrowUpRight, ArrowDownRight, MoreHorizontal, FileText, Car } from "lucide-react";
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
    <div className="space-y-6 text-[#495057] font-kanit">
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
        {/* Card 1: Total POs */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-[#3f6ad8] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('totalPurchaseOrders')}</p>
              <h3 className="text-2xl font-bold text-[#3f6ad8]">124</h3>
            </div>
             <div className="p-3 bg-[#e0f3ff] rounded-full text-[#3f6ad8]">
                <FileText className="w-6 h-6" />
             </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> +12%
             </span>
             <span className="text-gray-400 ml-2">{t('sinceLastMonth')}</span>
          </div>
        </div>

        {/* Card 2: Budget Spending */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-green-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('budgetSpending')}</p>
              <h3 className="text-2xl font-bold text-green-600">฿ 2.4M</h3>
            </div>
             <div className="p-3 bg-green-50 rounded-full text-green-600">
                <DollarSign className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> +5%
             </span>
             <span className="text-gray-400 ml-2">{t('vsBudget')}</span>
          </div>
        </div>

        {/* Card 3: Pending Approvals */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-amber-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('pendingApprovals')}</p>
              <h3 className="text-2xl font-bold text-amber-500">8</h3>
            </div>
             <div className="p-3 bg-amber-50 rounded-full text-amber-500">
                <Activity className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-red-500 font-bold flex items-center bg-red-50 px-2 py-0.5 rounded-full">
                 <ArrowDownRight className="w-3 h-3 mr-1"/> -2
             </span>
             <span className="text-gray-400 ml-2">{t('sinceYesterday')}</span>
          </div>
        </div>

        {/* Card 4: Vehicle Bookings */}
        <div className="bg-white rounded-xl p-5 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-l-4 border-indigo-500 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{t('todaysVehicleBookings')}</p>
              <h3 className="text-2xl font-bold text-indigo-500">5</h3>
            </div>
             <div className="p-3 bg-indigo-50 rounded-full text-indigo-500">
                <Car className="w-6 h-6" />
             </div>
          </div>
           <div className="mt-4 flex items-center text-sm">
             <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
                 <ArrowUpRight className="w-3 h-3 mr-1"/> {t('fixed')} 2
             </span>
             <span className="text-gray-400 ml-2">{t('activeTrips')}</span>
          </div>
        </div>
      </div>

      {/* Row 2: Monthly Trends (Line) + Expense Distribution (Donut) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] p-6">
          <div className="flex items-center justify-between mb-6">
               <h2 className="text-lg font-bold text-gray-700">{t('monthlySpendingOverview')}</h2>
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
          <h2 className="text-lg font-bold text-gray-700 mb-6">{t('expenseByDepartment')}</h2>
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

       {/* Recent Orders Table */}
       <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-700">{t('recentPurchaseOrders')}</h2>
           <div className="flex gap-2">
               <button className="text-xs font-semibold text-[#3f6ad8] bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full transition-colors">{t('pending')}</button>
               <button className="text-xs font-semibold text-gray-500 bg-gray-50 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors">{t('approved')}</button>
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.poId')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.requesterDept')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.amount')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.status')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.date')}</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">{t('table.actions')}</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {[
                  { id: "PO-2023-001", requester: "John Doe", dept: "Engineering", amount: "45,000 THB", status: "Approved", date: "2023-11-01" },
                  { id: "PO-2023-002", requester: "Jane Smith", dept: "Sales", amount: "12,500 THB", status: "Pending", date: "2023-11-03" },
                  { id: "PO-2023-003", requester: "Robert Brown", dept: "Ops", amount: "89,000 THB", status: "Rejected", date: "2023-11-05" },
                  { id: "PO-2023-004", requester: "Alice Wong", dept: "Finance", amount: "15,000 THB", status: "Approved", date: "2023-11-08" },
              ].map((po) => (
                <tr key={po.id} className="hover:bg-[#fcfdfd] transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-[#3f6ad8]">{po.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-700">{po.requester}</span>
                        <span className="text-xs text-gray-400">{po.dept}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-700">
                    {po.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        po.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                        po.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                        'bg-red-100 text-red-700'
                    }`}>
                      {po.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {po.date}
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
            <button className="text-sm font-medium text-[#3f6ad8] hover:text-blue-700">{t('viewAllActivity')}</button>
        </div>
      </div>
    </div>
  );
}
