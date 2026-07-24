import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

// Mock next-auth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('AdminSidebar', () => {
  const mockSetIsOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (usePathname as jest.Mock).mockReturnValue('/admin/dashboard');
  });

  it('renders navigation links', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null, status: 'unauthenticated' });

    render(<AdminSidebar isOpen={true} setIsOpen={mockSetIsOpen} />);

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Leads')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('highlights the active link', () => {
    (usePathname as jest.Mock).mockReturnValue('/admin/leads');
    (useSession as jest.Mock).mockReturnValue({ data: null });

    render(<AdminSidebar isOpen={true} setIsOpen={mockSetIsOpen} />);

    const leadsLink = screen.getByText('Leads').closest('a');
    expect(leadsLink).toHaveClass('bg-black text-white');

    const dashboardLink = screen.getByText('Dashboard').closest('a');
    expect(dashboardLink).not.toHaveClass('bg-black text-white');
  });

  it('calls setIsOpen(false) when clicking overlay', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
    
    // We need to render the mobile overlay, so we check its existence or behavior
    // The overlay is rendered when isOpen=true
    const { container } = render(<AdminSidebar isOpen={true} setIsOpen={mockSetIsOpen} />);
    
    // Find the overlay by its class
    const overlay = container.querySelector('.fixed.inset-0.bg-black\\/50');
    expect(overlay).toBeInTheDocument();
    
    if (overlay) {
      fireEvent.click(overlay);
      expect(mockSetIsOpen).toHaveBeenCalledWith(false);
    }
  });

  it('renders LogoutButton when user is authenticated', () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: 'Admin' } },
      status: 'authenticated',
    });

    render(<AdminSidebar isOpen={true} setIsOpen={mockSetIsOpen} />);

    // Just check if Logout is in the document (we don't mock LogoutButton so it renders normally)
    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
  });
});
