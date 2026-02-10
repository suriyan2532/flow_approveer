
import { useState, useEffect, useRef } from 'react';
import { Search, FileText, Users, ShoppingCart, CreditCard, ChevronRight } from 'lucide-react';
import { useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";

// Mock Data Source (Aggregated from various pages for demonstration)
const MOCK_DATA = [
    // PRs
    { id: 'PR-2023-001', type: 'Purchase Requisition', title: 'Office Supplies Q4', url: '/dashboard/procurement/purchase-requisitions/PR-2023-001/status' },
    { id: 'PR-2023-002', type: 'Purchase Requisition', title: 'MacBook Pro M3 (5 Units)', url: '/dashboard/procurement/purchase-requisitions/PR-2023-002/status' },
    { id: 'PR-2023-003', type: 'Purchase Requisition', title: 'Marketing Campaign Q4', url: '/dashboard/procurement/purchase-requisitions/PR-2023-003/status' },
    
    // Contracts
    { id: 'CNT-2023-001', type: 'Contract', title: 'IT Service Agreement', url: '/dashboard/procurement/contracts/CNT-2023-001' },
    { id: 'CNT-2023-002', type: 'Contract', title: 'Office Lease 2024', url: '/dashboard/procurement/contracts/CNT-2023-002' },

    // Employees (Mock)
    { id: 'EMP-001', type: 'Employee', title: 'John Doe (Engineering)', url: '/dashboard/users' },
    { id: 'EMP-002', type: 'Employee', title: 'Jane Smith (Sales)', url: '/dashboard/users' },
];

export default function GlobalSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof MOCK_DATA>([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (query.length > 1) {
            const lowerQuery = query.toLowerCase();
            const filtered = MOCK_DATA.filter(item => 
                item.title.toLowerCase().includes(lowerQuery) || 
                item.id.toLowerCase().includes(lowerQuery) ||
                item.type.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
            setIsOpen(true);
        } else {
            setResults([]);
            setIsOpen(false);
        }
    }, [query]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'Purchase Requisition': return <ShoppingCart className="w-4 h-4 text-blue-500" />;
            case 'Contract': return <FileText className="w-4 h-4 text-green-500" />;
            case 'Employee': return <Users className="w-4 h-4 text-purple-500" />;
            default: return <Search className="w-4 h-4 text-gray-400" />;
        }
    };

    return (
        <div ref={wrapperRef} className="relative hidden md:block w-64 lg:w-96">
            <div className="relative">
                <input
                    type="text"
                    className="w-full bg-[#f1f4f6] border-none rounded-full py-2 pl-10 pr-4 text-sm text-gray-700 focus:ring-2 focus:ring-[#3f6ad8]/50 focus:bg-white transition-all shadow-inner"
                    placeholder="Search all data..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => { if(query.length > 1) setIsOpen(true); }}
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
            </div>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    {results.length > 0 ? (
                        <ul>
                            <li className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100">
                                Global Search Results
                            </li>
                            {results.map((result) => (
                                <li key={result.id}>
                                    <Link 
                                        href={result.url}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-0 group"
                                    >
                                        <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                                            {getIcon(result.type)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-gray-700 truncate group-hover:text-[#3f6ad8]">{result.title}</p>
                                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                                <span>{result.id}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span>{result.type}</span>
                                            </p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#3f6ad8]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-8 text-center text-gray-400">
                            <Search className="w-8 h-8 mx-auto mb-2 opacity-20" />
                            <p className="text-sm">No results found for "{query}"</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
