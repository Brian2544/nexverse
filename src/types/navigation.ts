export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: 'About Us',
    path: '/about',
    children: [
      { title: 'Our Vision', path: '/about/vision' },
      { title: 'Our Mission', path: '/about/mission' },
      { title: 'Our Core Values', path: '/about/values' },
    ],
  },
  {
    title: 'Consulting Services',
    path: '/services',
    children: [
      { title: 'Strategy Consulting', path: '/services/strategy' },
      { title: 'Technology Consulting', path: '/services/technology' },
      { title: 'Business Consulting', path: '/services/business' },
    ],
  },
  {
    title: 'Corporate Solutions',
    path: '/solutions',
    children: [
      { title: 'IT Infrastructure', path: '/solutions/infrastructure' },
      { title: 'Web Design & Development', path: '/solutions/web-development' },
      { title: 'Information Security', path: '/solutions/security' },
      { title: 'Business Applications', path: '/solutions/applications' },
      { title: 'IT Service Management', path: '/solutions/service-management' },
    ],
  },
  {
    title: 'Corporate Training & Coaching',
    path: '/training',
    children: [
      { title: 'Strategy Planning & Execution', path: '/training/strategy' },
      { title: 'Governance of Enterprise IT', path: '/training/governance' },
      { title: 'Digital Transformation', path: '/training/digital' },
      { title: 'Project Management', path: '/training/project-management' },
      { title: 'Data Protection & Compliance', path: '/training/compliance' },
    ],
  },
]; 