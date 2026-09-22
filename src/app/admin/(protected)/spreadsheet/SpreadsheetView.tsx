"use client";

import { useState } from "react";
import { Download, Search, FileSpreadsheet, Copy, Check, ExternalLink, RefreshCw } from "lucide-react";

interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  status: string;
  source: string;
  message: string;
  date: string;
}

export default function SpreadsheetView({ initialLeads }: { initialLeads: LeadItem[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const filtered = initialLeads.filter((item) => {
    const q = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.message.toLowerCase().includes(q)
    );
  });

  const googleSheetsFormula = `=IMPORTDATA("${typeof window !== "undefined" ? window.location.origin : "https://marketing4you.in"}/api/leads/sheet")`;

  const copyFormula = () => {
    navigator.clipboard.writeText(googleSheetsFormula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6 font-sans">
      {/* Excel Title & Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border-4 border-black p-6 shadow-[6px_6px_0_#000]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#107C41] text-white flex items-center justify-center border-2 border-black shadow-[3px_3px_0_#000]">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">
                Leads Spreadsheet
              </h1>
              <span className="px-2 py-0.5 bg-[#107C41] text-white text-xs font-black uppercase tracking-wider">
                Excel Ready
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-black/60">
              All website inquiries, strategy call bookings, and leads synced in real time.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/api/leads/sheet?download=true"
            download
            className="inline-flex items-center gap-2 bg-[#107C41] text-white px-4 py-2.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            <Download className="w-4 h-4" />
            Download Excel (.csv)
          </a>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-[#FFD700] text-black px-4 py-2.5 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            Live Google Sheets Sync
          </button>
        </div>
      </div>

      {/* Quick Search & Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
          <input
            type="text"
            placeholder="Search leads by name, email, phone, company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border-4 border-black font-bold text-sm focus:outline-none focus:shadow-[4px_4px_0_#FF5500]"
          />
        </div>

        <div className="bg-white border-4 border-black p-3 text-center shadow-[4px_4px_0_#000]">
          <span className="text-xs font-black uppercase tracking-wider text-black/60 block">Total Records</span>
          <span className="text-2xl font-black">{initialLeads.length}</span>
        </div>

        <div className="bg-[#FFD700] border-4 border-black p-3 text-center shadow-[4px_4px_0_#000]">
          <span className="text-xs font-black uppercase tracking-wider text-black block">Matching Filter</span>
          <span className="text-2xl font-black">{filtered.length}</span>
        </div>
      </div>

      {/* Spreadsheet Grid (Excel Styled) */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_#000] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px] text-sm">
          <thead>
            {/* Column coordinate row (A, B, C...) */}
            <tr className="bg-gray-100 border-b border-gray-300 text-[11px] font-bold text-gray-500 uppercase">
              <th className="p-2 border-r border-gray-300 text-center w-12 bg-gray-200">#</th>
              <th className="p-2 border-r border-gray-300">A · Date</th>
              <th className="p-2 border-r border-gray-300">B · Name</th>
              <th className="p-2 border-r border-gray-300">C · Email</th>
              <th className="p-2 border-r border-gray-300">D · Phone / WhatsApp</th>
              <th className="p-2 border-r border-gray-300">E · Company</th>
              <th className="p-2 border-r border-gray-300">F · Budget / Industry</th>
              <th className="p-2 border-r border-gray-300">G · Status</th>
              <th className="p-2">H · Message / Goal</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="p-12 text-center font-bold text-gray-500">
                  No records match your search.
                </td>
              </tr>
            ) : (
              filtered.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-gray-200 hover:bg-green-50/50 transition-colors font-mono"
                >
                  <td className="p-3 text-center bg-gray-50 border-r border-gray-300 font-bold text-xs text-gray-500">
                    {index + 1}
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans whitespace-nowrap text-xs font-bold text-black/70">
                    {item.date}
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans font-black text-black">
                    {item.name}
                  </td>
                  <td className="p-3 border-r border-gray-200 text-xs font-bold text-blue-600">
                    <a href={`mailto:${item.email}`} className="hover:underline">{item.email}</a>
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans whitespace-nowrap text-xs font-bold">
                    {item.phone && item.phone !== "N/A" ? (
                      <a
                        href={`https://wa.me/${item.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-black"
                      >
                        💬 {item.phone}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans font-bold text-xs">
                    {item.company}
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans text-xs font-bold">
                    <span className="px-2 py-0.5 bg-gray-100 border border-black/20 inline-block">
                      {item.budget}
                    </span>
                  </td>
                  <td className="p-3 border-r border-gray-200 font-sans">
                    <span className="px-2.5 py-1 bg-black text-white text-[11px] font-black uppercase tracking-wider inline-block">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 font-sans text-xs text-black/80 max-w-xs truncate" title={item.message}>
                    {item.message}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Live Google Sheets Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black max-w-xl w-full p-8 shadow-[12px_12px_0_#FFD700] relative">
            <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-[#107C41]" />
              Live Google Sheets Sync
            </h3>

            <p className="text-sm font-bold text-black/80 mb-6 leading-relaxed">
              You can view all leads automatically in Google Sheets on your phone or laptop with a single formula:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3 bg-gray-100 border-2 border-black font-mono text-xs break-all relative">
                <code>{googleSheetsFormula}</code>
              </div>

              <button
                onClick={copyFormula}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#107C41] text-white px-4 py-3 font-black text-sm uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FFD700]" /> Formula Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy Formula
                  </>
                )}
              </button>
            </div>

            <ol className="text-xs font-bold text-black/70 space-y-2 list-decimal list-inside mb-8">
              <li>Open a blank Google Sheet (<a href="https://sheets.new" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">sheets.new</a>).</li>
              <li>Click on cell <strong>A1</strong>.</li>
              <li>Paste the formula above and press Enter.</li>
              <li>Google Sheets will instantly load and auto-sync all leads!</li>
            </ol>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-black text-white px-4 py-2.5 font-black text-sm uppercase tracking-wider border-2 border-black hover:bg-[#FF5500] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
