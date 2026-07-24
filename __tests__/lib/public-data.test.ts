import { getSiteSettings, getPublishedBlogs, getPublishedCaseStudies, getPublishedProjects, getActiveServices, getActivePricingPlans } from '@/lib/public-data';
import { prisma } from '@/lib/prisma';

jest.mock('@/lib/prisma', () => ({
  prisma: {
    siteSettings: { findUnique: jest.fn() },
    blogPost: { findMany: jest.fn() },
    caseStudy: { findMany: jest.fn() },
    project: { findMany: jest.fn() },
    service: { findMany: jest.fn() },
    pricingPlan: { findMany: jest.fn() },
  },
}));

describe('Public Data fetching', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getSiteSettings fetches singleton settings', async () => {
    const mockSettings = { id: 'singleton', agencyName: 'Test Agency' };
    (prisma.siteSettings.findUnique as jest.Mock).mockResolvedValue(mockSettings);

    const result = await getSiteSettings();

    expect(result).toEqual(mockSettings);
    expect(prisma.siteSettings.findUnique).toHaveBeenCalledWith({
      where: { id: 'singleton' },
    });
  });

  it('getPublishedBlogs fetches only published blogs', async () => {
    const mockBlogs = [{ id: '1', title: 'Test Blog', status: 'PUBLISHED' }];
    (prisma.blogPost.findMany as jest.Mock).mockResolvedValue(mockBlogs);

    const result = await getPublishedBlogs();

    expect(result).toEqual(mockBlogs);
    expect(prisma.blogPost.findMany).toHaveBeenCalledWith({
      where: { status: 'PUBLISHED' },
      orderBy: { publishDate: 'desc' },
    });
  });

  it('getActiveServices fetches only active services', async () => {
    const mockServices = [{ id: '1', name: 'Web Dev', isActive: true }];
    (prisma.service.findMany as jest.Mock).mockResolvedValue(mockServices);

    const result = await getActiveServices();

    expect(result).toEqual(mockServices);
    expect(prisma.service.findMany).toHaveBeenCalledWith({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
    });
  });
});
