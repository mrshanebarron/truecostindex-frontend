// Canadian provinces and cities
export const provinces = [
  {
    name: 'Ontario',
    abbr: 'ON',
    cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London', 'Brampton', 'Markham', 'Vaughan', 'Kitchener', 'Windsor']
  },
  {
    name: 'British Columbia',
    abbr: 'BC',
    cities: ['Vancouver', 'Victoria', 'Burnaby', 'Surrey', 'Richmond', 'Kelowna', 'Abbotsford', 'Coquitlam']
  },
  {
    name: 'Alberta',
    abbr: 'AB',
    cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert', 'Medicine Hat']
  },
  {
    name: 'Quebec',
    abbr: 'QC',
    cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke']
  },
  {
    name: 'Manitoba',
    abbr: 'MB',
    cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson']
  },
  {
    name: 'Saskatchewan',
    abbr: 'SK',
    cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw']
  },
  {
    name: 'Nova Scotia',
    abbr: 'NS',
    cities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro']
  },
  {
    name: 'New Brunswick',
    abbr: 'NB',
    cities: ['Fredericton', 'Saint John', 'Moncton', 'Dieppe']
  },
  {
    name: 'Newfoundland and Labrador',
    abbr: 'NL',
    cities: ["St. John's", 'Mount Pearl', 'Corner Brook']
  },
  {
    name: 'Prince Edward Island',
    abbr: 'PE',
    cities: ['Charlottetown', 'Summerside']
  }
];

export const serviceCategories = [
  'Plumbing',
  'HVAC',
  'Electrical',
  'Roofing',
  'Dental Work',
  'Auto Repair',
  'Oil Change',
  'Tire Service',
  'Haircut',
  'House Cleaning',
  'Lawn Care',
  'Moving Services'
];

export function getCitiesForProvince(provinceName: string): string[] {
  const province = provinces.find(p => p.name === provinceName);
  return province?.cities || [];
}
