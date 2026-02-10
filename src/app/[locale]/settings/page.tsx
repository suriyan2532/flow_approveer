"use client";

import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Mail, 
  Smartphone, 
  Moon, 
  Eye, 
  Database, 
  Workflow,
  CheckCircle2,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import DashboardLayoutWrapper from "@/components/DashboardLayoutWrapper";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const menuItems = [
    { id: "general", label: "General System", icon: Settings },
    { id: "account", label: "Account & Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security & Privacy", icon: Shield },
    { id: "localization", label: "Localization", icon: Globe },
    { id: "workflow", label: "Workflow Config", icon: Workflow },
    { id: "database", label: "Backup & Data", icon: Database },
  ];

  return (
    <DashboardLayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-8">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                        <Settings className="w-7 h-7" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 tracking-tight font-kanit italic uppercase">System Settings</h1>
                </div>
                <p className="text-sm text-gray-500 font-kanit pl-1 pl-14">
                    Manage your system configuration, preferences, and security settings in one place.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">
                    <CheckCircle2 className="w-3 h-3" />
                    System Healthy
                </span>
                <span className="text-[10px] font-bold text-gray-400 font-kanit">Version 2.4.0-build.82</span>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Menu */}
            <div className="lg:col-span-3 space-y-2">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 font-kanit group ${
                            activeTab === item.id 
                            ? "bg-white text-blue-600 shadow-xl shadow-blue-500/5 ring-1 ring-blue-50" 
                            : "text-gray-500 hover:bg-white hover:text-blue-600"
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${activeTab === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`} />
                            <span className="text-sm font-bold uppercase tracking-tight">{item.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeTab === item.id ? 'opacity-100 translate-x-1' : 'opacity-0'}`} />
                    </button>
                ))}
            </div>

            {/* Main Settings Content */}
            <div className="lg:col-span-9 space-y-6">
                
                {/* General Settings Section */}
                {activeTab === "general" && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-8">
                            <div>
                                <h2 className="text-xl font-black text-gray-800 font-kanit mb-1">Company Identity</h2>
                                <p className="text-xs text-gray-400 font-kanit">Change your organization's public profile and branding.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1 font-kanit">Organization Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue="Deep N Dev Co., Ltd."
                                        className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all font-kanit"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1 font-kanit">System Slug</label>
                                    <input 
                                        type="text" 
                                        defaultValue="dnd-flow-v2"
                                        className="w-full bg-gray-50 border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-800 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all font-kanit"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-4">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1 font-kanit">System Logo</label>
                                    <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 group hover:border-blue-400 transition-colors cursor-pointer">
                                        <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                                                <Smartphone className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-gray-800 font-kanit mb-1 flex items-center gap-2">
                                                Upload New Logo 
                                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </p>
                                            <p className="text-xs text-gray-400 font-kanit">PNG, JPG or SVG. Max size 2MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                             <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-xl font-black text-gray-800 font-kanit mb-1 underline decoration-blue-500 decoration-4 underline-offset-4">Preferences</h2>
                                    <p className="text-xs text-gray-400 font-kanit">Configuration for system interface and behavior.</p>
                                </div>
                             </div>

                             <div className="space-y-4">
                                {[
                                    { title: 'Dark Mode', desc: 'Auto-adjust colors for night usage', icon: Moon, active: false },
                                    { title: 'Low Data Mode', desc: 'Disable heavy animations and images', icon: Eye, active: true },
                                    { title: 'Auto Save', desc: 'Automatically save drafts every 30 seconds', icon: Database, active: true },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-white rounded-xl text-gray-600 shadow-sm">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-gray-800 font-kanit uppercase tracking-tight">{item.title}</p>
                                                <p className="text-[10px] text-gray-400 font-kanit font-bold">{item.desc}</p>
                                            </div>
                                        </div>
                                        <button className={`w-12 h-6 rounded-full transition-all relative ${item.active ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.active ? 'left-7' : 'left-1'}`}></div>
                                        </button>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                )}

                {/* Other categories placeholder */}
                {activeTab !== "general" && (
                    <div className="bg-white rounded-3xl p-16 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 scale-animation">
                            <Settings className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 font-kanit uppercase tracking-tight italic mb-2">Category Under Construction</h3>
                        <p className="text-sm text-gray-400 font-kanit max-w-sm font-bold">
                            We are currently implementing the <span className="text-blue-600 font-black">"{activeTab}"</span> controls. 
                            Check back in the next system update.
                        </p>
                    </div>
                )}

                {/* Save Changes Floating Action */}
                <div className="fixed bottom-12 right-12 z-50 print:hidden scale-up-center">
                    <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-black shadow-2xl hover:bg-gray-800 transition-all group border-4 border-white">
                        <CheckCircle2 className="w-6 h-6 text-green-400 group-hover:scale-125 transition-transform" />
                        SAVE ALL CHANGES
                    </button>
                </div>
            </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scale-animation { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .scale-animation { animation: scale-animation 3s infinite ease-in-out; }
        .scale-up-center { animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both; }
        @keyframes scale-up-center { 0% { transform: scale(0.5); } 100% { transform: scale(1); } }
      `}</style>
    </DashboardLayoutWrapper>
  );
}
