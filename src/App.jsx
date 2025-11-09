import React, { useRef, useState } from 'react';
import Header from './components/Header';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import ActionsBar from './components/ActionsBar';

function App() {
  const [data, setData] = useState({});
  const previewRef = useRef(null);

  const handleDownload = async () => {
    // Fallback: trigger print dialog – users can save as PDF from browser
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <CVForm onChange={setData} />
          </div>
          <div className="md:w-1/2 space-y-3">
            <ActionsBar onDownload={handleDownload} />
            <div ref={previewRef} className="print:bg-white">
              <CVPreview data={data} />
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          header, .btn, .btn-ghost, .no-print { display: none !important; }
          main { padding: 0 !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
