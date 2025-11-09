import React, { useState } from 'react';

const initialState = {
  name: '',
  title: '',
  email: '',
  phone: '',
  summary: '',
  skills: '',
  experience: [{ company: '', role: '', period: '', details: '' }],
  education: [{ school: '', degree: '', period: '' }],
};

export default function CVForm({ onChange }) {
  const [form, setForm] = useState(initialState);

  const update = (field, value) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onChange?.(updated);
  };

  const updateArray = (section, index, field, value) => {
    const updatedArr = form[section].map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    const updated = { ...form, [section]: updatedArr };
    setForm(updated);
    onChange?.(updated);
  };

  const addItem = (section, template) => {
    const updated = { ...form, [section]: [...form[section], template] };
    setForm(updated);
    onChange?.(updated);
  };

  const removeItem = (section, index) => {
    const updated = { ...form, [section]: form[section].filter((_, i) => i !== index) };
    setForm(updated);
    onChange?.(updated);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Basics</h2>
          <input className="input" placeholder="Full name" value={form.name} onChange={e => update('name', e.target.value)} />
          <input className="input" placeholder="Professional title" value={form.title} onChange={e => update('title', e.target.value)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="input" placeholder="Email" value={form.email} onChange={e => update('email', e.target.value)} />
            <input className="input" placeholder="Phone" value={form.phone} onChange={e => update('phone', e.target.value)} />
          </div>
          <textarea className="input min-h-[96px]" placeholder="Professional summary" value={form.summary} onChange={e => update('summary', e.target.value)} />
          <input className="input" placeholder="Skills (comma separated)" value={form.skills} onChange={e => update('skills', e.target.value)} />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Experience</h3>
              <button className="btn" onClick={() => addItem('experience', { company: '', role: '', period: '', details: '' })}>Add</button>
            </div>
            {form.experience.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="input" placeholder="Company" value={exp.company} onChange={e => updateArray('experience', idx, 'company', e.target.value)} />
                <input className="input" placeholder="Role" value={exp.role} onChange={e => updateArray('experience', idx, 'role', e.target.value)} />
                <div className="flex gap-2">
                  <input className="input" placeholder="Period" value={exp.period} onChange={e => updateArray('experience', idx, 'period', e.target.value)} />
                  <button className="btn-ghost" onClick={() => removeItem('experience', idx)}>✕</button>
                </div>
                <textarea className="input sm:col-span-3" placeholder="Key achievements, responsibilities" value={exp.details} onChange={e => updateArray('experience', idx, 'details', e.target.value)} />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Education</h3>
              <button className="btn" onClick={() => addItem('education', { school: '', degree: '', period: '' })}>Add</button>
            </div>
            {form.education.map((ed, idx) => (
              <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input className="input" placeholder="School" value={ed.school} onChange={e => updateArray('education', idx, 'school', e.target.value)} />
                <input className="input" placeholder="Degree" value={ed.degree} onChange={e => updateArray('education', idx, 'degree', e.target.value)} />
                <div className="flex gap-2">
                  <input className="input" placeholder="Period" value={ed.period} onChange={e => updateArray('education', idx, 'period', e.target.value)} />
                  <button className="btn-ghost" onClick={() => removeItem('education', idx)}>✕</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .input { @apply w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white; }
        .btn { @apply inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white text-sm px-3 py-2 hover:bg-indigo-700; }
        .btn-ghost { @apply inline-flex items-center justify-center rounded-lg border border-gray-300 text-gray-600 px-2 hover:bg-gray-50; }
      `}</style>
    </div>
  );
}
