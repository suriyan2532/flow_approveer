"use client";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { ArrowLeft, Save, UserCog } from "lucide-react";
import React, { use } from "react";

export default function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const t = useTranslations('Users');
  const tCommon = useTranslations('Common');
  const tDash = useTranslations('Dashboard');
  const router = useRouter();
  
  // Unwrap params using React.use()
  const { id } = use(params);

  // Mock data fetching based on ID
  const user = {
    id,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Admin",
    status: "Active"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send PUT request to API here
    router.push('/dashboard/users');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/users" className="p-2 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-[#3f6ad8] hover:border-[#3f6ad8] transition-all shadow-sm">
           <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-gray-900 font-kanit tracking-tight flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600"><UserCog className="w-6 h-6" /></span>
            {t('editUser')} <span className="text-gray-400 font-medium text-lg">#{id}</span>
          </h1>
          <p className="text-gray-500 font-kanit text-sm mt-0.5">แก้ไขข้อมูลผู้ใช้งาน</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-[1.5rem] border border-gray-100 shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03)] overflow-hidden">
         <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Personal Info Section */}
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#3f6ad8] rounded-full"></span>
                    ข้อมูลส่วนตัว (Personal Information)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-gray-700 font-kanit">
                           {t('name')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          defaultValue={user.name}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-gray-700 font-kanit">
                           {t('email')} <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          defaultValue={user.email}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Account Settings Section */}
            <div className="space-y-6 pt-2">
                <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    การตั้งค่าบัญชี (Account Settings)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-bold text-gray-700 font-kanit">
                           {t('role')} <span className="text-red-500">*</span>
                        </label>
                        <select 
                          id="role" 
                          name="role"
                          defaultValue={user.role} 
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm appearance-none cursor-pointer"
                        >
                           <option value="Admin">Admin</option>
                           <option value="User">User</option>
                           <option value="Manager">Manager</option>
                           <option value="Approver">Approver</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="status" className="text-sm font-bold text-gray-700 font-kanit">
                           {tCommon('status')} <span className="text-red-500">*</span>
                        </label>
                        <select 
                          id="status" 
                          name="status" 
                          defaultValue={user.status}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm appearance-none cursor-pointer"
                        >
                           <option value="Active">{tDash('active')}</option>
                           <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-end gap-3">
                <Link 
                  href="/dashboard/users"
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all font-kanit text-sm"
                >
                   {tCommon('cancel')}
                </Link>
                <button 
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#3f6ad8] text-white font-bold hover:border-[#3f6ad8] hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all font-kanit text-sm flex items-center gap-2"
                >
                   <Save className="w-4 h-4" />
                   {tCommon('save')}
                </button>
            </div>
         </form>
      </div>
    </div>
  );
}
