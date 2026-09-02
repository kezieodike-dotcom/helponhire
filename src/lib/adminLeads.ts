export type AdminLeadType = 'service-request' | 'contact-inquiry';
export type AdminLeadStatus = 'new' | 'contacted' | 'quoted' | 'booked' | 'closed';
export type AdminLeadDeliveryStatus = 'sent' | 'failed';

export type AdminLead = {
  id: string;
  type: AdminLeadType;
  source: string;
  submittedAt: string;
  reference?: string;
  deliveryStatus: AdminLeadDeliveryStatus;
  status: AdminLeadStatus;
  name: string;
  phone?: string;
  email?: string;
  location?: string;
  serviceRequired?: string;
  preferredDate?: string;
  subject?: string;
  message?: string;
  needsDescription?: string;
};

export const ADMIN_LEADS_KEY = 'hoh_admin_client_records';

const hasBrowserStorage = () => typeof window !== 'undefined' && Boolean(window.localStorage);

const normalizeLead = (lead: AdminLead): AdminLead => ({
  ...lead,
  status: lead.status ?? 'new',
  deliveryStatus: lead.deliveryStatus ?? 'sent',
});

export const getAdminLeads = (): AdminLead[] => {
  if (!hasBrowserStorage()) return [];

  try {
    const saved = window.localStorage.getItem(ADMIN_LEADS_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed.map(normalizeLead) : [];
  } catch (error) {
    return [];
  }
};

const setAdminLeads = (leads: AdminLead[]) => {
  if (!hasBrowserStorage()) return;
  window.localStorage.setItem(ADMIN_LEADS_KEY, JSON.stringify(leads));
};

const createLeadId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `hoh-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
};

export const saveAdminLead = (
  lead: Omit<AdminLead, 'id' | 'submittedAt' | 'status'> & Partial<Pick<AdminLead, 'id' | 'submittedAt' | 'status'>>
) => {
  const currentLeads = getAdminLeads();
  const nextLead: AdminLead = {
    ...lead,
    id: lead.id ?? createLeadId(),
    submittedAt: lead.submittedAt ?? new Date().toISOString(),
    status: lead.status ?? 'new',
  };

  setAdminLeads([nextLead, ...currentLeads]);
  return nextLead;
};

export const updateAdminLeadStatus = (id: string, status: AdminLeadStatus) => {
  const leads = getAdminLeads();
  const updatedLeads = leads.map((lead) => (lead.id === id ? { ...lead, status } : lead));
  setAdminLeads(updatedLeads);
  return updatedLeads;
};

export const clearAdminLeads = () => {
  if (!hasBrowserStorage()) return;
  window.localStorage.removeItem(ADMIN_LEADS_KEY);
};

const csvEscape = (value: unknown) => `"${String(value ?? '').replace(/"/g, '""')}"`;

export const adminLeadsToCsv = (leads: AdminLead[]) => {
  const headers: Array<keyof AdminLead> = [
    'submittedAt',
    'reference',
    'type',
    'source',
    'status',
    'deliveryStatus',
    'name',
    'phone',
    'email',
    'location',
    'serviceRequired',
    'preferredDate',
    'subject',
    'message',
    'needsDescription',
  ];

  const rows = leads.map((lead) => headers.map((header) => csvEscape(lead[header])).join(','));
  return [headers.join(','), ...rows].join('\n');
};

export const downloadTextFile = (filename: string, mimeType: string, content: string) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};
