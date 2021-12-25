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
