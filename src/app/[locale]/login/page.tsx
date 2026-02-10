"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Logo from "@/components/Logo";
import { useState } from "react";

export default function LoginPage() {
  const t = useTranslations('Login');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt", { username, password, rememberMe });
    // TODO: Implement actual login logic
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img 
          src="https://www.ifscapthai.com/wp-content/uploads/2024/08/2-66beeac86002f.webp" 
          alt="Product Documents"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center lg:text-left">
             <div className="flex justify-end mb-4">
                <LanguageSwitcher />
             </div>
             <div className="lg:hidden flex justify-center mb-6">
                <Logo />
             </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex justify-center mb-8">
                <Logo />
             </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  {t('usernameLabel')}
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    placeholder={t('usernamePlaceholder')}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#3f6ad8] focus:border-[#3f6ad8] sm:text-sm"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {t('passwordLabel')}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder={t('passwordPlaceholder')}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#3f6ad8] focus:border-[#3f6ad8] sm:text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                  <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      {t('forgotPassword')}
                  </button>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md shadow-blue-500/20 text-sm font-medium text-white bg-[#3f6ad8] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3f6ad8] transition-all"
                >
                  {t('submitButton')}
                </button>
              </div>
              
              <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 mb-4">
                      {t('noAccount')} <Link href="/register" className="text-blue-600 hover:text-blue-500">{t('registerLink')}</Link>
                  </p>
                  <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700 underline">
                    {t('skipToDashboard')}
                  </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
