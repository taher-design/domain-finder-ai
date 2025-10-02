import type { Resource } from './types';

export const TLD_OPTIONS = ['.com', '.ai', '.io'];

export const US_CITIES = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA',
  'Austin, TX',
  'Jacksonville, FL',
  'Fort Worth, TX',
  'Columbus, OH',
  'Charlotte, NC',
  'San Francisco, CA',
  'Indianapolis, IN',
  'Seattle, WA',
  'Denver, CO',
  'Washington, DC',
  'Boston, MA',
  'El Paso, TX',
  'Nashville, TN',
  'Detroit, MI',
  'Oklahoma City, OK',
  'Portland, OR',
  'Las Vegas, NV',
  'Memphis, TN',
  'Louisville, KY',
  'Baltimore, MD',
  'Milwaukee, WI',
  'Albuquerque, NM',
  'Tucson, AZ',
  'Fresno, CA',
  'Sacramento, CA',
  'Kansas City, MO',
  'Atlanta, GA',
  'Miami, FL',
  'Raleigh, NC',
  'Omaha, NE',
];


export const REGISTRARS: Resource[] = [
  { name: 'GoDaddy', url: 'https://www.godaddy.com/domains/domain-name-search', description: 'One of the world\'s most popular domain registrars.' },
  { name: 'Namecheap', url: 'https://www.namecheap.com/domains/registration/results.aspx', description: 'Known for competitive pricing and good customer service.' },
  { name: 'Google Domains', url: 'https://domains.google.com/registrar/search', description: 'Simple and straightforward domain registration from Google.' },
  { name: 'Porkbun', url: 'https://porkbun.com/tld', description: 'Offers great prices and a wide range of TLDs.' },
  { name: 'Hover', url: 'https://www.hover.com/domains', description: 'Focuses on making it easy to buy and manage domains.' },
];

export const ANALYSIS_TOOLS: Resource[] = [
  { name: 'EstiBot', url: 'https://www.estibot.com/', description: 'A leading tool for domain name appraisal.' },
  { name: 'DomainTools', url: 'https://whois.domaintools.com/', description: 'Provides detailed information about any domain.' },
  { name: 'Ahrefs', url: 'https://ahrefs.com/website-authority-checker', description: 'Check website authority and analyze backlinks.' },
  { name: 'Moz Domain Analysis', url: 'https://analytics.moz.com/pro/link-explorer/home', description: 'For analyzing domain and page authority.' },
];

export const DROPPED_DOMAINS_SITES: Resource[] = [
    { name: 'ExpiredDomains.net', url: 'https://www.expireddomains.net/', description: 'A massive database of expired and deleted domains.' },
    { name: 'GoDaddy Auctions', url: 'https://auctions.godaddy.com/', description: 'Auctions for expired and high-value domains.' },
    { name: 'DropCatch', url: 'https://www.dropcatch.com/', description: 'Specializes in "catching" valuable domains as they drop.' },
];
