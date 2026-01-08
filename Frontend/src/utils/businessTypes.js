export const businessTypes = [
  { value: 'corporate-professional', label: 'Corporate & Professional Services', icon: 'business' },
  { value: 'it-tech-digital', label: 'IT, Tech & Digital Services', icon: 'computer' },
  { value: 'creative-media', label: 'Creative & Media', icon: 'palette' },
  { value: 'freelancer-solopreneur', label: 'Freelancers & Solopreneurs', icon: 'person' },
  { value: 'healthcare-medical', label: 'Healthcare & Medical', icon: 'local_hospital' },
  { value: 'real-estate-construction', label: 'Real Estate & Construction', icon: 'home_work' },
  { value: 'retail-sales-trading', label: 'Retail, Sales & Trading', icon: 'storefront' },
  { value: 'hospitality-food-travel', label: 'Hospitality, Food & Travel', icon: 'restaurant' },
  { value: 'logistics-manufacturing', label: 'Logistics & Manufacturing', icon: 'precision_manufacturing' },
  { value: 'local-services-trades', label: 'Local Services & Skilled Trades', icon: 'handyman' },
  { value: 'education-training', label: 'Education & Training', icon: 'school' },
  { value: 'entertainment-lifestyle', label: 'Entertainment & Lifestyle', icon: 'celebration' },
  { value: 'ngo-social', label: 'NGOs & Social Organizations', icon: 'volunteer_activism' }
];

// Get business type by value
export const getBusinessType = (value) => {
  return businessTypes.find(type => type.value === value);
};
