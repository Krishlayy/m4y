import { submitContactInquiry, submitLead } from '@/lib/public-actions';
import { prisma } from '@/lib/prisma';

jest.mock('@/lib/prisma', () => ({
  prisma: {
    contactInquiry: {
      create: jest.fn(),
    },
    lead: {
      create: jest.fn(),
    },
  },
}));

describe('Public Actions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  describe('submitContactInquiry', () => {
    it('successfully submits a valid contact inquiry', async () => {
      const formData = new FormData();
      formData.append('name', 'John Doe');
      formData.append('email', 'john@example.com');
      formData.append('company', 'Acme Corp');
      formData.append('budget', '10k-50k');
      formData.append('message', 'We need a new website.');

      (prisma.contactInquiry.create as jest.Mock).mockResolvedValue({ id: '123' });

      const result = await submitContactInquiry(formData);

      expect(result).toEqual({ success: true });
      expect(prisma.contactInquiry.create).toHaveBeenCalledWith({
        data: {
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Inquiry from Acme Corp (10k-50k)',
          message: 'We need a new website.',
        },
      });
    });

    it('fails when required fields are missing', async () => {
      const formData = new FormData();
      // Missing name and message

      const result = await submitContactInquiry(formData);

      expect(result).toEqual({ success: false, error: 'Failed to submit inquiry' });
      expect(prisma.contactInquiry.create).not.toHaveBeenCalled();
    });
  });

  describe('submitLead', () => {
    it('successfully submits a valid lead', async () => {
      const formData = new FormData();
      formData.append('name', 'Jane Smith');
      formData.append('email', 'jane@example.com');
      formData.append('company', 'Tech Inc');
      formData.append('revenue', '1M-5M');
      formData.append('goal', 'Increase sales');

      (prisma.lead.create as jest.Mock).mockResolvedValue({ id: '456' });

      const result = await submitLead(formData);

      expect(result).toEqual({ success: true });
      expect(prisma.lead.create).toHaveBeenCalledWith({
        data: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          company: 'Tech Inc',
          budget: '1M-5M',
          message: 'Primary Goal: Increase sales',
          source: 'Book Call Form',
          status: 'NEW',
        },
      });
    });

    it('fails when email is invalid', async () => {
      const formData = new FormData();
      formData.append('name', 'Jane Smith');
      formData.append('email', 'not-an-email');
      formData.append('goal', 'Increase sales');

      const result = await submitLead(formData);

      expect(result).toEqual({ success: false, error: 'Failed to submit lead' });
      expect(prisma.lead.create).not.toHaveBeenCalled();
    });
  });
});
