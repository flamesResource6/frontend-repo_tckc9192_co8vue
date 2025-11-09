import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">ProCV Builder</h1>
            <p className="text-xs text-gray-500">Craft a standout resume in minutes</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <span>Live preview · Print-ready</span>
        </div>
      </div>
    </header>
  );
}
