"use client";

import { useState } from "react";
import { Search, Plus, Users, UserCheck, UserX, Trash2, Edit } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const initialUsers = [
  {
    id: 1,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    role: "User",
    status: "Inactive",
  },
];

export default function UsersPage() {
  const t = useTranslations('Users');
  const tCommon = useTranslations('Common');
  const tDash = useTranslations('Dashboard');
  const [users, setUsers] = useState(initialUsers);

  // Soft Delete Handler
  const handleDeleteUser = (id: number) => {
    MySwal.fire({
        title: 'คุณแน่ใจหรือไม่?',
        text: "คุณต้องการปิดการใช้งานผู้ใช้นี้ใช่หรือไม่? (Soft Delete)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3f6ad8',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ใช่, ปิดการใช้งาน!',
        cancelButtonText: 'ยกเลิก',
        customClass: {
            popup: 'font-kanit rounded-3xl',
            title: 'font-kanit',
            htmlContainer: 'font-kanit',
            confirmButton: 'font-kanit rounded-xl',
            cancelButton: 'font-kanit rounded-xl'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            setUsers(users.map(user => 
                user.id === id ? { ...user, status: 'Inactive' } : user
            ));
            
            MySwal.fire({
                title: 'เรียบร้อย!',
                text: 'ผู้ใช้งานถูกปิดการใช้งานแล้ว',
                icon: 'success',
                confirmButtonColor: '#3f6ad8',
                customClass: {
                    popup: 'font-kanit rounded-3xl',
                    title: 'font-kanit',
                    htmlContainer: 'font-kanit',
                    confirmButton: 'font-kanit rounded-xl'
                }
            })
        }
    })
  };

  return (
    <div className="space-y-8 text-[#495057] font-kanit pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
         <div>
           <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600 border border-indigo-100 shadow-sm">
                    <Users className="w-6 h-6"/>
                </div>
                <div>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                        {t('title')}
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#3f6ad8] text-xs font-bold border border-blue-100">
                            {users.length} Users
                        </span>
                    </h1>
                </div>
           </div>
          <p className="text-gray-500 text-sm pl-14 max-w-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex gap-3">
             <Link
                href="/dashboard/users/create"
                className="inline-flex items-center px-6 py-3 rounded-xl shadow-lg shadow-blue-500/30 text-sm font-bold text-white bg-[#3f6ad8] hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition-all group"
            >
                <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform" />
                {t('addNewUser')}
            </Link>
        </div>
      </div>

       <div className="bg-white rounded-[1.5rem] shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03)] border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <h5 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#3f6ad8] rounded-full"></span>
                {t('allUsers')}
           </h5>
           <div className="relative group w-full md:w-72">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-[#3f6ad8] transition-colors" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-4 focus:ring-[#3f6ad8]/10 focus:border-[#3f6ad8] focus:bg-white transition-all outline-none"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
        </div>
        <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th scope="col" className="px-8 py-5 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{t('name')}</th>
                    <th scope="col" className="px-6 py-5 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{t('email')}</th>
                    <th scope="col" className="px-6 py-5 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{t('role')}</th>
                    <th scope="col" className="px-6 py-5 text-left text-xs font-black text-gray-500 uppercase tracking-widest">{tCommon('status')}</th>
                    <th scope="col" className="relative px-8 py-5 text-right text-xs font-black text-gray-500 uppercase tracking-widest">{tCommon('actions')}</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                      <td className="px-8 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-11 w-11 relative">
                            <img
                              className="h-11 w-11 rounded-full shadow-sm border-2 border-white"
                              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                              alt=""
                            />
                            {user.status === 'Active' && (
                                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-900 group-hover:text-[#3f6ad8] transition-colors">{user.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">ID: #{user.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-600">{user.email}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                         <span className={`px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-lg border shadow-sm ${
                             user.role === 'Admin' 
                             ? 'bg-purple-50 text-purple-700 border-purple-100' 
                             : 'bg-gray-50 text-gray-600 border-gray-200'
                         }`}>
                           {user.role}
                         </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span
                          className={`px-3 py-1.5 inline-flex items-center gap-1.5 text-xs leading-5 font-bold rounded-full border ${
                            user.status === "Active"
                              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                              : "bg-red-50 text-red-600 border-red-100"
                          }`}
                        >
                          {user.status === "Active" ? <UserCheck className="w-3.5 h-3.5" /> : <UserX className="w-3.5 h-3.5" />}
                          {user.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-3 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Link
                            href={`/dashboard/users/${user.id}/edit`}
                            className="p-2 rounded-lg text-gray-400 hover:text-[#3f6ad8] hover:bg-blue-50 transition-all"
                            title="Edit User"
                            >
                                <Edit className="w-5 h-5" />
                            </Link>
                            <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                            title="Delete User"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      </div>
    </div>
  );
}
