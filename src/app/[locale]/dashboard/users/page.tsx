"use client";

import { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, Users } from "lucide-react";
import { useTranslations } from "next-intl";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null); // Use proper type in production

  const handleAddUser = () => {
    setCurrentUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: any) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newUser = {
      id: currentUser ? currentUser.id : users.length + 1,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      status: formData.get("status") as string,
    };

    if (currentUser) {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? newUser : user))
      );
    } else {
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 text-[#495057]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
           <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                    <Users className="w-5 h-5"/>
                </div>
                <h1 className="text-xl font-bold text-[#3f6ad8]">{t('title')}</h1>
           </div>
          <p className="text-sm text-gray-500 pl-11">
            {t('subtitle')}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
            <button
            onClick={handleAddUser}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-lg shadow-blue-500/30 text-sm font-medium text-white bg-[#3f6ad8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-colors"
            >
            <Plus className="-ml-1 mr-2 h-4 w-4" />
            {t('addNewUser')}
            </button>
        </div>
      </div>

       <div className="bg-white rounded-xl shadow-[0_0.46875rem_2.1875rem_rgba(4,9,20,0.03),0_0.9375rem_1.40625rem_rgba(4,9,20,0.03),0_0.25rem_0.53125rem_rgba(4,9,20,0.05),0_0.125rem_0.1875rem_rgba(4,9,20,0.03)] border-0 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
           <h5 className="font-bold text-gray-700">{t('allUsers')}</h5>
           <div className="relative rounded-md shadow-sm max-w-xs">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full pl-10 sm:text-sm border-gray-200 rounded-lg py-2 bg-gray-50 focus:bg-white transition-all"
                  placeholder={t('searchPlaceholder')}
                />
              </div>
        </div>
        <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-[#f8f9fa]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('name')}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('email')}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{t('role')}</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">{tCommon('status')}</th>
                    <th scope="col" className="relative px-6 py-3"><span className="sr-only">{tCommon('actions')}</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-[#fcfdfd] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full shadow-sm"
                              src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-gray-700">{user.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                         <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                           {user.role}
                         </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${
                            user.status === "Active"
                              ? "bg-green-50 text-green-600 border-green-200"
                              : "bg-red-50 text-red-600 border-red-200"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="text-[#3f6ad8] hover:text-blue-900 mr-4 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-500 hover:text-red-900 font-semibold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={() => setIsModalOpen(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-[#3f6ad8] px-4 py-3 sm:px-6">
                   <h3 className="text-lg leading-6 font-bold text-white" id="modal-title">
                    {currentUser ? t("editUser") : t("addNewUser")}
                  </h3>
              </div>
              <form onSubmit={handleSaveUser}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                  <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">{t('name')}</label>
                        <input type="text" name="name" id="name" defaultValue={currentUser?.name} required className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-gray-50 focus:bg-white transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">{t('email')}</label>
                        <input type="email" name="email" id="email" defaultValue={currentUser?.email} required className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-gray-50 focus:bg-white transition-colors" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">{t('role')}</label>
                        <select name="role" id="role" defaultValue={currentUser?.role || "User"} className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-gray-50 focus:bg-white transition-colors">
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-1">{tCommon('status')}</label>
                        <select name="status" id="status" defaultValue={currentUser?.status || "Active"} className="focus:ring-[#3f6ad8] focus:border-[#3f6ad8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-2.5 border bg-gray-50 focus:bg-white transition-colors">
                        <option value="Active">{tDash('active')}</option>
                        <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-100">
                  <button type="submit" className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-[#3f6ad8] text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] sm:ml-3 sm:w-auto sm:text-sm transition-colors">
                    {tCommon('save')}
                  </button>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors">
                    {tCommon('cancel')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
