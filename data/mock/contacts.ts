export interface Contact {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  type: 'normal' | 'exclusive';
  isUnlocked?: boolean;
}

export const MOCK_CONTACTS: Contact[] = [
  {
    id: 'c1',
    companyName: 'Nike',
    industry: 'Sports & Apparel',
    location: 'Beaverton, OR',
    contactName: 'Sarah Jenkins',
    designation: 'Sr. Influencer Relations Manager',
    email: 'sarah.jenkins@nike.com',
    phone: '+1 (503) 555-0122',
    type: 'normal',
  },
  {
    id: 'c2',
    companyName: 'Samsung Mobile',
    industry: 'Technology',
    location: 'Seoul / NYC',
    contactName: 'Kevin Oh',
    designation: 'Director of Creator Partnerships',
    email: 'k.oh@samsung.com',
    phone: '+1 (212) 555-9831',
    type: 'normal',
  },
  {
    id: 'c3',
    companyName: 'Spotify',
    industry: 'Entertainment',
    location: 'Stockholm / NYC',
    contactName: 'Emma Lindstrom',
    designation: 'Head of Artist & Creator Marketing',
    email: 'emmal@spotify.com',
    phone: '+1 (917) 555-5432',
    type: 'exclusive',
  },
  {
    id: 'c4',
    companyName: 'Red Bull',
    industry: 'Media & Beverage',
    location: 'Salzburg / Santa Monica',
    contactName: 'Marcus Weber',
    designation: 'Global Head of Content Strategy',
    email: 'marcus.weber@redbull.com',
    phone: '+43 662 555-1212',
    type: 'normal',
  },
  {
    id: 'c5',
    companyName: 'Lululemon',
    industry: 'Athleisure',
    location: 'Vancouver, BC',
    contactName: 'Chloe Chen',
    designation: 'Influencer Marketing Lead',
    email: 'cchen@lululemon.com',
    phone: '+1 (604) 555-0988',
    type: 'normal',
  },
  {
    id: 'c6',
    companyName: 'Adobe',
    industry: 'Software',
    location: 'San Jose, CA',
    contactName: 'Michael Rossi',
    designation: 'Creator Relations Manager',
    email: 'rossi@adobe.com',
    phone: '+1 (408) 555-3211',
    type: 'exclusive',
  },
];
