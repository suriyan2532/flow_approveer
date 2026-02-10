"use client";

import { Printer, ArrowLeft, Download, FileText, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useRouter } from "@/i18n/routing";

export default function ProcurementPrintPage() {
  const router = useRouter();

  const mockData = [
    { id: "PR-2023-001", date: "2023-11-01", requester: "John Doe", dept: "Engineering", desc: "Server Maintenance Kit", amount: "45,000 THB", status: "Approved" },
    { id: "PR-2023-002", date: "2023-11-03", requester: "Jane Smith", dept: "Sales", desc: "Client Gift Hampers", amount: "12,500 THB", status: "Ordered" },
    { id: "PR-2023-003", date: "2023-11-05", requester: "Robert Brown", dept: "Ops", desc: "Warehouse Shelving", amount: "89,000 THB", status: "Delivered" },
    { id: "PR-2023-004", date: "2023-11-08", requester: "Alice Wong", dept: "Fin", desc: "Annual Audit Service", amount: "150,000 THB", status: "Pending" },
    { id: "PR-2023-005", date: "2023-11-10", requester: "John Doe", dept: "Engineering", desc: "Laptop Replacement", amount: "55,000 THB", status: "Approved" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white p-4 sm:p-8 font-kanit">
      {/* Action Bar - Hidden on Print */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold bg-white text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                <Download className="w-4 h-4" />
                Export PDF
            </button>
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-2 bg-[#3f6ad8] rounded-lg text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <Printer className="w-4 h-4" />
              Print Report
            </button>
        </div>
      </div>

      {/* Report Document */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl print:shadow-none p-8 sm:p-12 rounded-3xl print:rounded-none border border-gray-100 print:border-none">
        
        {/* Report Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-gray-900 pb-8 mb-8 gap-6">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#3f6ad8] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-none mb-2 italic">DEEP N DEV</h1>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Enterprise Procurement Management</p>
                </div>
            </div>
            <div className="text-right sm:text-right w-full sm:w-auto">
                <h2 className="text-xl font-black text-[#3f6ad8] uppercase tracking-wider mb-2">Procurement Summary</h2>
                <div className="space-y-1">
                    <p className="text-sm text-gray-500 font-bold">Report ID: <span className="text-gray-900">REP-PRO-202311-001</span></p>
                    <p className="text-sm text-gray-500 font-bold">Date Range: <span className="text-gray-900">Nov 01 - Nov 30, 2023</span></p>
                    <p className="text-sm text-gray-500 font-bold">Export Date: <span className="text-gray-900">Feb 10, 2026</span></p>
                </div>
            </div>
        </div>

        {/* Executive Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
                { label: 'Total PR Volume', value: '124 Requests', icon: FileText, color: 'blue' },
                { label: 'Total Committed Budget', value: '1.2M THB', icon: ShoppingBag, color: 'emerald' },
                { label: 'Avg. Fulfillment Rate', value: '94.5%', icon: CheckCircle2, color: 'indigo' },
            ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 flex flex-col gap-2">
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xl font-black text-gray-900">{stat.value}</p>
                </div>
            ))}
        </div>

        {/* Detailed Table */}
        <div className="mb-16">
            <h3 className="text-lg font-black text-gray-800 mb-4 border-l-4 border-[#3f6ad8] pl-3 uppercase tracking-wide">Detailed Procurement Log</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-900 text-white">
                            <th className="p-4 text-xs font-black uppercase tracking-widest">PR ID</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest">Date</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest">Requester / Dept</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest">Description</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest text-right">Amount</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {mockData.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-sm font-black text-blue-600">{row.id}</td>
                                <td className="p-4 text-xs font-bold text-gray-500 whitespace-nowrap">{row.date}</td>
                                <td className="p-4">
                                    <p className="text-sm font-bold text-gray-800">{row.requester}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">{row.dept}</p>
                                </td>
                                <td className="p-4 text-sm text-gray-600 leading-tight">{row.desc}</td>
                                <td className="p-4 text-sm font-black text-gray-900 text-right">{row.amount}</td>
                                <td className="p-4 text-center">
                                    <span className="text-[10px] font-black px-2 py-1 rounded bg-gray-100 text-gray-600 uppercase border border-gray-200">
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* Approval Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-200">
            {[
                { role: 'Generated By', name: 'System Administrator' },
                { role: 'Verified By', name: 'Finance Manager' },
                { role: 'Approved By', name: 'Director of Procurement' },
            ].map((sig, i) => (
                <div key={i} className="text-center">
                    <div className="h-16 mb-4 flex items-end justify-center">
                        {/* Placeholder for signature */}
                        <div className="w-full h-px bg-gray-300 border-dashed border-t"></div>
                    </div>
                    <p className="text-sm font-black text-gray-900 mb-1">{sig.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{sig.role}</p>
                </div>
            ))}
        </div>

        {/* Print Disclaimer */}
        <div className="mt-20 pt-8 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em]">
                Internal Document • Deep N Dev Co., Ltd. • Confidential
            </p>
        </div>
      </div>
    </div>
  );
}
