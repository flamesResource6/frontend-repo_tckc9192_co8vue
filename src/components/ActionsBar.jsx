import React from 'react';
import { Download, Printer } from 'lucide-react';

export default function ActionsBar({ onDownload }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex items-center justify-between gap-3">
      <div className="text-sm text-gray-500">Tip: Use concise bullet points and quantify impact where possible.</div>
      <div className="flex items-center gap-2">
        <button onClick={handlePrint} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">
          <Printer className="h-4 w-4" /> Print
        </button>
        <button onClick={onDownload} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm hover:bg-indigo-700">
          <Download className="h-4 w-4" /> Download PDF
        </button>
      </div>
    </div>
  );
}
