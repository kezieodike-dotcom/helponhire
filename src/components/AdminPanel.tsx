import React, { useMemo, useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  Users,
} from 'lucide-react';
import {
  adminLeadsToCsv,
  clearAdminLeads,
  downloadTextFile,
  getAdminLeads,
  updateAdminLeadStatus,
  type AdminLead,
  type AdminLeadStatus,
  type AdminLeadType,
} from '../lib/adminLeads';

const leadTypes: Array<'all' | AdminLeadType> = ['all', 'service-request', 'contact-inquiry'];
const leadStatuses: Array<'all' | AdminLeadStatus> = ['all', 'new', 'contacted', 'quoted', 'booked', 'closed'];

const statusLabels: Record<AdminLeadStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  quoted: 'Quoted',
  booked: 'Booked',
  closed: 'Closed',
};

const typeLabels: Record<AdminLeadType, string> = {
  'service-request': 'Service request',
  'contact-inquiry': 'Contact inquiry',
};

export const AdminPanel: React.FC = () => {
  const [leads, setLeads] = useState<AdminLead[]>(() => getAdminLeads());
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | AdminLeadType>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | AdminLeadStatus>('all');

  const filteredLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesType = typeFilter === 'all' || lead.type === typeFilter;
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      const haystack = [
        lead.name,
        lead.phone,
        lead.email,
        lead.location,
        lead.reference,
        lead.serviceRequired,
        lead.preferredDate,
        lead.subject,
        lead.message,
        lead.needsDescription,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return matchesType && matchesStatus && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [leads, query, statusFilter, typeFilter]);

  const metrics = useMemo(() => {
    const serviceRequests = leads.filter((lead) => lead.type === 'service-request').length;
    const contactInquiries = leads.filter((lead) => lead.type === 'contact-inquiry').length;
    const newLeads = leads.filter((lead) => lead.status === 'new').length;
    const bookedLeads = leads.filter((lead) => lead.status === 'booked').length;

    return { serviceRequests, contactInquiries, newLeads, bookedLeads };
  }, [leads]);

  const refreshLeads = () => setLeads(getAdminLeads());

  const handleStatusChange = (id: string, status: AdminLeadStatus) => {
    setLeads(updateAdminLeadStatus(id, status));
  };

  const handleDownloadCsv = () => {
    downloadTextFile('help-on-hire-client-records.csv', 'text/csv;charset=utf-8', adminLeadsToCsv(filteredLeads));
  };

  const handleDownloadJson = () => {
    downloadTextFile(
      'help-on-hire-client-records.json',
      'application/json;charset=utf-8',
      JSON.stringify(filteredLeads, null, 2)
    );
  };

  const handleClearRecords = () => {
    if (!window.confirm('Clear all client records saved in this browser?')) return;
    clearAdminLeads();
    setLeads([]);
  };

  return (
    <div className="min-h-screen bg-[#F5F7F4] px-4 py-8 text-[#08221c] sm:px-6 lg:px-8" id="admin-panel-view">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-zinc-200 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#12A33B]">
              <ShieldCheck className="h-4 w-4" />
              Admin Monitoring
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Client Records</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
              Review service requests and contact inquiries, track follow-up status, and download client details.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button onClick={refreshLeads} className="admin-action-button bg-white text-[#08221c]">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
            <button onClick={handleDownloadCsv} className="admin-action-button bg-[#08221c] text-white">
              <Download className="h-4 w-4" />
              CSV
            </button>
            <button onClick={handleDownloadJson} className="admin-action-button bg-[#12A33B] text-white">
              <FileText className="h-4 w-4" />
              JSON
            </button>
          </div>
        </header>

        <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <MetricCard label="Total clients" value={leads.length} icon={<Users className="h-5 w-5" />} />
          <MetricCard label="Service requests" value={metrics.serviceRequests} icon={<ClipboardList className="h-5 w-5" />} />
          <MetricCard label="Contact inquiries" value={metrics.contactInquiries} icon={<Mail className="h-5 w-5" />} />
          <MetricCard label="Booked" value={metrics.bookedLeads} icon={<CheckCircle2 className="h-5 w-5" />} />
        </section>

        <section className="mt-7 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_190px_190px_auto]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search name, phone, email, location, service, or message"
                className="h-12 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-base text-zinc-900 outline-none transition focus:border-[#12A33B] focus:ring-2 focus:ring-[#12A33B]/15"
              />
            </label>
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value as 'all' | AdminLeadType)}
              className="admin-select"
              aria-label="Filter by record type"
            >
              {leadTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All types' : typeLabels[type]}
                </option>
              ))}
            </select>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value as 'all' | AdminLeadStatus)}
              className="admin-select"
              aria-label="Filter by status"
            >
              {leadStatuses.map((status) => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All statuses' : statusLabels[status]}
                </option>
              ))}
            </select>
            <button onClick={handleClearRecords} className="admin-action-button justify-center bg-rose-50 text-rose-700 hover:bg-rose-100">
              <Trash2 className="h-4 w-4" />
              Clear
            </button>
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Client List</h2>
              <p className="mt-1 text-sm text-zinc-500">{filteredLeads.length} visible records</p>
            </div>
            <span className="rounded-full bg-[#EAF6ED] px-3 py-1 text-sm font-semibold text-[#08732A]">{metrics.newLeads} new</span>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="px-5 py-16 text-center">
              <ClipboardList className="mx-auto h-10 w-10 text-zinc-300" />
              <h3 className="mt-4 text-lg font-semibold">No client records yet</h3>
              <p className="mx-auto mt-2 max-w-md text-base leading-7 text-zinc-500">
                Submitted service requests and contact inquiries will appear here.
              </p>
            </div>
          ) : (
            <>
              <div className="hidden overflow-x-auto lg:block">
                <table className="min-w-full divide-y divide-zinc-200 text-left">
                  <thead className="bg-zinc-50 text-xs uppercase tracking-wider text-zinc-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Client</th>
                      <th className="px-4 py-3 font-semibold">Request</th>
                      <th className="px-4 py-3 font-semibold">Location</th>
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {filteredLeads.map((lead) => (
                      <LeadTableRow key={lead.id} lead={lead} onStatusChange={handleStatusChange} />
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 gap-4 p-4 lg:hidden">
                {filteredLeads.map((lead) => (
                  <LeadMobileCard key={lead.id} lead={lead} onStatusChange={handleStatusChange} />
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-medium text-zinc-500">{label}</span>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF6ED] text-[#12A33B]">{icon}</span>
    </div>
    <div className="mt-4 text-3xl font-semibold tracking-tight">{value}</div>
  </div>
);

const LeadTableRow: React.FC<{
  lead: AdminLead;
  onStatusChange: (id: string, status: AdminLeadStatus) => void;
}> = ({ lead, onStatusChange }) => (
  <tr className="align-top text-sm text-zinc-700">
    <td className="px-4 py-4">
      <ClientIdentity lead={lead} />
    </td>
    <td className="max-w-sm px-4 py-4">
      <LeadSummary lead={lead} />
    </td>
    <td className="px-4 py-4">
      <IconLine icon={<MapPin className="h-4 w-4" />} value={lead.location || 'Not provided'} />
    </td>
    <td className="px-4 py-4">
      <IconLine icon={<Calendar className="h-4 w-4" />} value={formatDate(lead.submittedAt)} />
    </td>
    <td className="px-4 py-4">
      <StatusSelect lead={lead} onStatusChange={onStatusChange} />
    </td>
  </tr>
);

const LeadMobileCard: React.FC<{
  lead: AdminLead;
  onStatusChange: (id: string, status: AdminLeadStatus) => void;
}> = ({ lead, onStatusChange }) => (
  <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
    <div className="flex items-start justify-between gap-3">
      <ClientIdentity lead={lead} />
      <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
        {typeLabels[lead.type]}
      </span>
    </div>
    <div className="mt-4 space-y-3">
      <LeadSummary lead={lead} />
      <IconLine icon={<MapPin className="h-4 w-4" />} value={lead.location || 'Not provided'} />
      <IconLine icon={<Calendar className="h-4 w-4" />} value={formatDate(lead.submittedAt)} />
      <StatusSelect lead={lead} onStatusChange={onStatusChange} />
    </div>
  </article>
);

const ClientIdentity: React.FC<{ lead: AdminLead }> = ({ lead }) => (
  <div>
    <div className="text-base font-semibold text-[#08221c]">{lead.name}</div>
    <div className="mt-2 space-y-1">
      <IconLine icon={<Phone className="h-4 w-4" />} value={lead.phone || 'No phone'} />
      <IconLine icon={<Mail className="h-4 w-4" />} value={lead.email || 'No email'} />
    </div>
  </div>
);

const LeadSummary: React.FC<{ lead: AdminLead }> = ({ lead }) => (
  <div>
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-[#EAF6ED] px-2.5 py-1 text-xs font-semibold text-[#08732A]">{typeLabels[lead.type]}</span>
      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${lead.deliveryStatus === 'sent' ? 'bg-sky-50 text-sky-700' : 'bg-amber-50 text-amber-700'}`}>
        Email {lead.deliveryStatus}
      </span>
    </div>
    {lead.reference && <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">{lead.reference}</div>}
    <p className="mt-2 text-base leading-7 text-zinc-700">
      {lead.serviceRequired || lead.subject || 'General inquiry'}
      {lead.preferredDate ? `, ${lead.preferredDate}` : ''}
    </p>
    <p className="mt-1 line-clamp-3 text-sm leading-6 text-zinc-500">{lead.needsDescription || lead.message || 'No message provided.'}</p>
  </div>
);

const IconLine: React.FC<{ icon: React.ReactNode; value: string }> = ({ icon, value }) => (
  <div className="flex items-center gap-2 text-sm leading-6 text-zinc-600">
    <span className="shrink-0 text-[#12A33B]">{icon}</span>
    <span className="break-words">{value}</span>
  </div>
);

const StatusSelect: React.FC<{
  lead: AdminLead;
  onStatusChange: (id: string, status: AdminLeadStatus) => void;
}> = ({ lead, onStatusChange }) => (
  <select
    value={lead.status}
    onChange={(event) => onStatusChange(lead.id, event.target.value as AdminLeadStatus)}
    className="admin-select min-w-[150px] bg-zinc-50"
    aria-label={`Update status for ${lead.name}`}
  >
    {leadStatuses
      .filter((status): status is AdminLeadStatus => status !== 'all')
      .map((status) => (
        <option key={status} value={status}>
          {statusLabels[status]}
        </option>
      ))}
  </select>
);

const formatDate = (dateValue: string) =>
  new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateValue));
