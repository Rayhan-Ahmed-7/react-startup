import { ChevronRight } from 'lucide-react';
import type { Section } from './type';
import clsx from 'clsx';

interface SidebarProps {
    sections: Section[];
    activeSection: string;
    onSectionClick: (id: string) => void;
}

export function Sidebar({ sections, activeSection, onSectionClick }: SidebarProps) {
    return (
        <aside className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0 overflow-y-auto">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-8">Documentation</h1>
                <nav className="space-y-1">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                            className={clsx(
                                'w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200',
                                activeSection === section.id
                                    ? 'bg-indigo-50 text-indigo-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                            )}
                        >
                            <span className="flex-1">{section.title}</span>
                            <ChevronRight
                                className={clsx(
                                    'w-4 h-4 transition-transform duration-200',
                                    activeSection === section.id ? 'rotate-90' : ''
                                )}
                            />
                        </button>
                    ))}
                </nav>
            </div>
        </aside>)
}