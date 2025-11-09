import React from 'react';

export default function CVPreview({ data }) {
  const skills = (data.skills || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden print:shadow-none">
      <div className="p-6 border-b bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-900">{data.name || 'Your Name'}</h2>
        <p className="text-gray-600">{data.title || 'Professional Title'}</p>
        <div className="text-sm text-gray-500 mt-1">{[data.email, data.phone].filter(Boolean).join(' · ')}</div>
      </div>

      <div className="p-6 space-y-6">
        {data.summary && (
          <section>
            <h3 className="section-title">Summary</h3>
            <p className="text-gray-700 leading-relaxed">{data.summary}</p>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h3 className="section-title">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {Array.isArray(data.experience) && data.experience.filter(e => e.company || e.role || e.details).length > 0 && (
          <section>
            <h3 className="section-title">Experience</h3>
            <div className="space-y-4">
              {data.experience.map((exp, i) => (
                <div key={i} className="border-b last:border-0 pb-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">{exp.role || 'Role'} · <span className="text-gray-700">{exp.company || 'Company'}</span></p>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  {exp.details && <p className="text-gray-700 mt-1 whitespace-pre-line">{exp.details}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {Array.isArray(data.education) && data.education.filter(e => e.school || e.degree).length > 0 && (
          <section>
            <h3 className="section-title">Education</h3>
            <div className="space-y-3">
              {data.education.map((ed, i) => (
                <div key={i} className="flex items-center justify-between">
                  <p className="text-gray-900"><span className="font-medium">{ed.degree || 'Degree'}</span> · {ed.school || 'School'}</p>
                  <span className="text-sm text-gray-500">{ed.period}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <style jsx>{`
        .section-title { @apply text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2; }
      `}</style>
    </div>
  );
}
