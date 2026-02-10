"use client";

import { 
  BarChart, 
  FileText, 
  Download, 
  Calendar, 
  ArrowRight, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  Wallet, 
  Users, 
  Target,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export default function ReportsPage() {
  const t = useTranslations('Reports');
  const tCommon = useTranslations('Common');

  return (
    <div className="space-y-8 pb-12 text-[#495057]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
         <div>
            <div className="flex items-center gap-3 mb-1">
                 <div className="p-2.5 bg-[#3f6ad8]/10 rounded-xl text-[#3f6ad8] shadow-sm">
                     <BarChart className="w-6 h-6"/>
                 </div>
                 <h1 className="text-2xl font-black text-gray-900 font-kanit tracking-tight">{t('title')}</h1>
            </div>
           <p className="text-sm text-gray-500 pl-14 font-kanit">
             {t('subtitle')}
           </p>
         </div>
         <div className="flex gap-2">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all font-kanit shadow-sm">
                <Calendar className="w-4 h-4 text-gray-400" />
                This Month
            </button>
         </div>
      </div>

      {/* Procurement Report Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#3f6ad8]" />
                 PROCUREMENT SUMMARY (รายงานการจัดซื้อ)
            </h2>
            <button className="text-sm font-bold text-[#3f6ad8] hover:underline font-kanit">View Details</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
                { label: 'Total PR Requests', value: '124', icon: FileText, color: 'blue', change: '+12%', trend: 'up' },
                { label: 'Total PO Issued', value: '89', icon: ShoppingBag, color: 'indigo', change: '+5%', trend: 'up' },
                { label: 'Requests Pending', value: '15', icon: Clock, color: 'amber', change: '-2%', trend: 'down' },
                { label: 'Avg. PO Cycle Time', value: '3.2 Days', icon: TrendingUp, color: 'emerald', change: '-0.5d', trend: 'up' },
            ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                            stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                        }`}>
                            {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {stat.change}
                        </span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-kanit mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-gray-900 font-kanit">{stat.value}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Expense Report Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                <Wallet className="w-5 h-5 text-emerald-600" />
                EXPENSE ANALYSIS (รายงานค่าใช้จ่าย)
            </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-gray-800 font-kanit uppercase tracking-wider">Spending Trends</h3>
                        <p className="text-xs text-gray-400 font-kanit">Last 6 months expenditure breakdown</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="text-[10px] px-2 py-1 bg-gray-100 rounded font-bold text-gray-500 uppercase font-kanit">Monthly</button>
                        <button className="text-[10px] px-2 py-1 rounded font-bold text-gray-400 uppercase font-kanit">Quarterly</button>
                    </div>
                </div>
                <div className="p-6 h-[220px] flex items-end justify-between gap-4">
                    {[
                        { month: 'May', value: 45 },
                        { month: 'Jun', value: 65 },
                        { month: 'Jul', value: 35 },
                        { month: 'Aug', value: 85 },
                        { month: 'Sep', value: 55 },
                        { month: 'Oct', value: 75 },
                    ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                            <div 
                                className="w-full bg-blue-50 rounded-lg relative overflow-hidden transition-all duration-500 group-hover:bg-blue-100"
                                style={{ height: `${bar.value}%` }}
                            >
                                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 font-kanit uppercase tracking-tighter">{bar.month}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
                <h3 className="text-sm font-bold text-gray-800 font-kanit uppercase tracking-wider mb-6">Budget Allocation</h3>
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {[
                        { dept: 'IT & Infra', value: 45, color: '#3f6ad8' },
                        { dept: 'Administration', value: 30, color: '#10b981' },
                        { dept: 'Marketing', value: 15, color: '#f59e0b' },
                        { dept: 'HR & Others', value: 10, color: '#f43f5e' },
                    ].map((item, i) => (
                        <div key={i}>
                            <div className="flex justify-between items-center mb-1.5 px-1">
                                <span className="text-xs font-bold text-gray-600 font-kanit">{item.dept}</span>
                                <span className="text-xs font-black text-gray-900 font-kanit">{item.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden">
                                <div 
                                    className="h-full rounded-full transition-all duration-1000" 
                                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Performance Indicators Section */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between px-2">
            <h2 className="text-lg font-bold text-gray-800 font-kanit flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-500" />
                PERFORMANCE INDICATORS (ตัวชี้วัดประสิทธิภาพ)
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                { 
                  title: 'Approval SLA Compliance', 
                  desc: 'Goal: < 48 hours per step', 
                  value: 92, 
                  icon: CheckCircle2, 
                  color: 'indigo' 
                },
                { 
                  title: 'Budget Compliance', 
                  desc: 'Spending within predefined limits', 
                  value: 88, 
                  icon: TrendingUp, 
                  color: 'emerald' 
                },
                { 
                  title: 'Active Users Ratio', 
                  desc: 'Daily active system users', 
                  value: 76, 
                  icon: Users, 
                  color: 'orange' 
                },
            ].map((kpi, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-2.5 rounded-xl bg-${kpi.color}-50 text-${kpi.color}-600 group-hover:scale-110 transition-transform`}>
                            <kpi.icon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-800 font-kanit">{kpi.title}</p>
                            <p className="text-[10px] text-gray-400 font-kanit">{kpi.desc}</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between font-kanit mb-2 px-1">
                        <span className="text-3xl font-black text-gray-900">{kpi.value}%</span>
                        <span className="text-[10px] text-gray-400 font-black tracking-widest uppercase">Target 85%</span>
                    </div>
                    <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden ring-1 ring-gray-100 p-0.5">
                        <div 
                            className={`h-full rounded-full transition-all duration-1000 bg-${kpi.color}-500 shadow-sm shadow-${kpi.color}-500/20`}
                            style={{ width: `${kpi.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Advanced Generator Banner */}
      <div className="bg-[#3f6ad8] rounded-2xl p-8 shadow-xl shadow-blue-500/20 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
              <FileText className="w-48 h-48" />
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                  <h3 className="text-xl font-bold font-kanit mb-2">{t('customGenerator')}</h3>
                  <p className="text-blue-100 text-sm font-kanit leading-relaxed opacity-80">
                      Need specialized insights? Use our advanced generator to build custom tabular reports with dynamic filters, custom columns, and multiple export formats.
                  </p>
              </div>
              <div className="flex justify-start md:justify-end">
                  <Link href="/dashboard/reports/procurement-print">
                      <button className="px-8 py-3 bg-white text-[#3f6ad8] rounded-xl text-md font-black hover:bg-blue-50 transition-all font-kanit flex items-center gap-2 group shadow-xl shadow-black/10">
                          Access Generator
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  );
}
