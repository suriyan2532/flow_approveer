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
    <div className="min-h-screen flex items-center justify-center bg-[#F4F7FE] p-4 font-kanit">
      <div className="flex w-full max-w-[1200px] h-[800px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
        
        {/* Left Side - Image */}
        <div className="hidden lg:block w-1/2 relative h-full">
           <img 
            src="https://www.ifscapthai.com/wp-content/uploads/2024/08/2-66beeac86002f.webp" 
            alt="Product Documents"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div> 
           {/* Overlay Content on Image (Optional branding) */}
           <div className="absolute top-8 left-8">
              <Logo isWhite={true} />
           </div>
           
           <div className="absolute bottom-12 left-12 right-12 text-white p-8 bg-black/10 backdrop-blur-md rounded-3xl border border-white/10">
              <p className="text-3xl font-bold leading-tight">
              “ระบบที่มีประสิทธิภาพ คือจุดเริ่มต้นของความสำเร็จในการบริหารงาน”
              </p>
              <div className="mt-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                    D
                 </div>
                 <div>
                    <h4 className="font-bold">DeepNDev Team</h4>
                    <p className="text-white/70 text-sm">Developer</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative bg-white">
           <div className="absolute top-8 right-8">
              <LanguageSwitcher />
           </div>

           <div className="w-full max-w-[450px] space-y-8">
              <div className="text-center">
                 {/* Mobile Logo */}
                 <div className="lg:hidden flex justify-center mb-6">
                    <Logo />
                 </div>
                 
                 <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-2">
                    ยินดีต้อนรับเข้าสู่ระบบ
                 </h2>
                 <h3 className="text-xl lg:text-2xl font-bold text-[#3f6ad8]">
                    ระบบจัดซื้อจัดจ้างและการเงิน
                 </h3>
                 <p className="text-gray-400 mt-2 text-base">
                    Procurement and Finance System
                 </p>
              </div>

              <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-bold text-gray-700 ml-1">
                    {t('usernameLabel')}
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    placeholder="name@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f6ad8]/10 focus:border-[#3f6ad8] focus:bg-white transition-all duration-200"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-bold text-gray-700 ml-1">
                    {t('passwordLabel')}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3f6ad8]/10 focus:border-[#3f6ad8] focus:bg-white transition-all duration-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                   <div className="flex items-center">
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#3f6ad8] checked:right-0 checked:border-[#3f6ad8]"/>
                          <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer checked:bg-[#3f6ad8]"></label>
                      </div>
                      <label htmlFor="toggle" className="text-sm text-gray-500 font-bold cursor-pointer">Remember me</label>
                   </div>
                   <button type="button" className="text-sm font-bold text-[#3f6ad8] hover:text-blue-700 transition-colors">
                      {t('forgotPassword')}
                   </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#3f6ad8] hover:bg-blue-700 text-white font-bold text-lg shadow-[0_10px_20px_rgba(63,106,216,0.15)] hover:shadow-[0_10px_25px_rgba(63,106,216,0.25)] transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {t('submitButton')}
                </button>
                
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-300 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div className="text-center space-y-4">
                   <Link href="/dashboard" className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-600 font-bold transition-all duration-200 group">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      {t('skipToDashboard')}
                   </Link>
                   
                   <p className="text-gray-400 text-sm">
                      {t('noAccount')} <Link href="/register" className="text-[#3f6ad8] font-bold hover:underline ml-1">{t('registerLink')}</Link>
                   </p>
                </div>

              </form>
           </div>
        </div>
      </div>
      
      {/* Custom Styles for Toggle Switch matching reference */}
      <style jsx global>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #3f6ad8;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #3f6ad8;
        }
        .toggle-checkbox {
            right: 0;
            transition: all 0.3s;
        }
      `}</style>
    </div>
  );
}
