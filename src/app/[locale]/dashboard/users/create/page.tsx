"use client";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { ArrowLeft, Save, UserPlus } from "lucide-react";

export default function CreateUserPage() {
  const t = useTranslations('Users');
  const tCommon = useTranslations('Common');
  const tDash = useTranslations('Dashboard');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send data to API here
    // For prototype, just navigate back
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
            <span className="p-1.5 rounded-lg bg-blue-50 text-[#3f6ad8]"><UserPlus className="w-6 h-6" /></span>
            {t('addNewUser')}
          </h1>
          <p className="text-gray-500 font-kanit text-sm mt-0.5">เพิ่มผู้ใช้งานใหม่เข้าสู่ระบบ</p>
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
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm"
                          placeholder="Ex. John Doe"
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
                          required
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm"
                          placeholder="Ex. john@example.com"
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
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm appearance-none cursor-pointer"
                        >
                           <option value="User">User</option>
                           <option value="Admin">Admin</option>
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
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#3f6ad8] focus:ring-4 focus:ring-[#3f6ad8]/10 transition-all outline-none font-kanit text-sm appearance-none cursor-pointer"
                        >
                           <option value="Active">{tDash('active')}</option>
                           <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="password" className="text-sm font-bold text-gray-700 font-kanit">
                           รหัสผ่านเริ่มต้น (Default Password) <span className="text-red-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="password" 
                          name="password" 
                          defaultValue="Dnd1234!"
                          readOnly
                          className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-500 font-mono text-sm cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-400 font-kanit">* ผู้ใช้งานจะต้องเปลี่ยนรหัสผ่านเมื่อเข้าสู่ระบบครั้งแรก</p>
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
