export type SiteMapGroup = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export const productSitemap: SiteMapGroup = {
  title: 'Product',
  links: [
    {
      label: 'Analysis',
      href: '/analysis',
    },
    {
      label: 'Repository',
      href: '/repository',
    },
    {
      label: 'People',
      href: '/people',
    },
    {
      label: 'Enterprise',
      href: '/enterprise',
    },
    {
      label: 'Integrations',
      href: '/integrations',
    },
    {
      label: 'Customers',
      href: '/customers',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Status',
      href: '/status',
    },
  ],
};

export const learnSiteMap: SiteMapGroup = {
  title: 'Learn',
  links: [
    {
      label: 'Watch a demo',
      href: '/watch-a-demo',
    },
    {
      label: 'join a live demo',
      href: '/join-a-live-demo',
    },
    {
      label: 'Help center',
      href: '/help-center',
    },
    {
      label: 'Guides',
      href: '/guides',
    },
    {
      label: 'Method in Madness',
      href: '/method-in-madness',
    },
    {
      label: 'Security & privacy',
      href: '/security-and-privacy',
    },
    {
      label: 'Privacy policy',
      href: '/privacy-policy',
    },
    {
      label: 'Legal',
      href: '/legal',
    },
  ],
};

export const connectSiteMap: SiteMapGroup = {
  title: 'Connect',
  links: [
    {
      label: 'Inside Dovetail',
      href: '/inside-dovetail',
    },
    {
      label: 'Community',
      href: '/community',
    },
    {
      label: 'Company',
      href: '/company',
    },
    {
      label: 'Careers (12)',
      href: '/careers',
    },
    {
      label: 'Contact us',
      href: '/contact-us',
    },
  ],
};

export const roleSiteMap: SiteMapGroup = {
  title: 'Role',
  links: [
    {
      label: 'Product Manager',
      href: '/product-manager',
    },
    {
      label: 'Designer',
      href: '/designer',
    },
    {
      label: 'Researcher',
      href: '/researcher',
    },
  ],
};

export const organizationSiteMap: SiteMapGroup = {
  title: 'Organization',
  links: [
    {
      label: 'Solo researcher',
      href: '/solo-researcher',
    },
    {
      label: 'Product Team',
      href: '/product-team',
    },
  ],
};

export const solutionSiteMap: SiteMapGroup = {
  title: 'Solution',
  links: [
    {
      label: 'User interview analysis',
      href: '/user-interview-analysis',
    },
    {
      label: 'Net Promoter Score analysis',
      href: '/net-promoter-score-analysis',
    },
    {
      label: 'Support analysis',
      href: '/support-analysis',
    },
    {
      label: 'Remote research',
      href: '/remote-research',
    },
    {
      label: 'Survey analysis',
      href: '/survey-analysis',
    },
    {
      label: 'Usability testing analysis',
      href: '/usability-testing-analysis',
    },
  ],
};
