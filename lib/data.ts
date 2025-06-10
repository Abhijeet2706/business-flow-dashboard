// Mock data for dashboard charts
export const revenueData = [
  { month: 'Jan', revenue: 45000, target: 50000 },
  { month: 'Feb', revenue: 52000, target: 55000 },
  { month: 'Mar', revenue: 48000, target: 52000 },
  { month: 'Apr', revenue: 61000, target: 58000 },
  { month: 'May', revenue: 55000, target: 60000 },
  { month: 'Jun', revenue: 67000, target: 65000 },
  { month: 'Jul', revenue: 72000, target: 70000 },
  { month: 'Aug', revenue: 69000, target: 72000 },
  { month: 'Sep', revenue: 78000, target: 75000 },
  { month: 'Oct', revenue: 85000, target: 80000 },
  { month: 'Nov', revenue: 91000, target: 88000 },
  { month: 'Dec', revenue: 94000, target: 95000 },
];

export const trafficData = [
  { date: '2024-01', visits: 12400, pageviews: 35600, bounceRate: 42 },
  { date: '2024-02', visits: 15600, pageviews: 42800, bounceRate: 38 },
  { date: '2024-03', visits: 14200, pageviews: 39100, bounceRate: 41 },
  { date: '2024-04', visits: 18900, pageviews: 51200, bounceRate: 35 },
  { date: '2024-05', visits: 22100, pageviews: 58700, bounceRate: 33 },
  { date: '2024-06', visits: 24600, pageviews: 64200, bounceRate: 31 },
];

export const salesGrowthData = [
  { quarter: 'Q1 2023', sales: 125000, growth: 8.5 },
  { quarter: 'Q2 2023', sales: 142000, growth: 13.6 },
  { quarter: 'Q3 2023', sales: 156000, growth: 9.9 },
  { quarter: 'Q4 2023', sales: 184000, growth: 17.9 },
  { quarter: 'Q1 2024', sales: 198000, growth: 7.6 },
  { quarter: 'Q2 2024', sales: 221000, growth: 11.6 },
];

export const marketShareData = [
  { name: 'Our Company', value: 32, color: '#3B82F6' },
  { name: 'Competitor A', value: 28, color: '#10B981' },
  { name: 'Competitor B', value: 18, color: '#F59E0B' },
  { name: 'Competitor C', value: 12, color: '#EF4444' },
  { name: 'Others', value: 10, color: '#6B7280' },
];

export const customerSatisfactionData = [
  { category: 'Very Satisfied', value: 45, color: '#10B981' },
  { category: 'Satisfied', value: 30, color: '#3B82F6' },
  { category: 'Neutral', value: 15, color: '#F59E0B' },
  { category: 'Dissatisfied', value: 7, color: '#EF4444' },
  { category: 'Very Dissatisfied', value: 3, color: '#DC2626' },
];

export const salesVsMarketingData = [
  { marketing: 5000, sales: 125000, month: 'Jan' },
  { marketing: 7500, sales: 142000, month: 'Feb' },
  { marketing: 6200, sales: 135000, month: 'Mar' },
  { marketing: 8900, sales: 156000, month: 'Apr' },
  { marketing: 12000, sales: 184000, month: 'May' },
  { marketing: 9800, sales: 167000, month: 'Jun' },
  { marketing: 11500, sales: 198000, month: 'Jul' },
  { marketing: 13200, sales: 221000, month: 'Aug' },
  { marketing: 10700, sales: 189000, month: 'Sep' },
  { marketing: 15500, sales: 245000, month: 'Oct' },
];

export const performanceRadarData = [
  { metric: 'Sales', value: 85, fullMark: 100 },
  { metric: 'Marketing', value: 78, fullMark: 100 },
  { metric: 'Customer Service', value: 92, fullMark: 100 },
  { metric: 'Product Quality', value: 88, fullMark: 100 },
  { metric: 'Innovation', value: 76, fullMark: 100 },
  { metric: 'Operations', value: 82, fullMark: 100 },
];

export const productCategoriesData = [
  { name: 'Electronics', value: 45000, children: [
    { name: 'Smartphones', value: 25000 },
    { name: 'Laptops', value: 15000 },
    { name: 'Accessories', value: 5000 }
  ]},
  { name: 'Clothing', value: 32000, children: [
    { name: 'Men\'s Wear', value: 18000 },
    { name: 'Women\'s Wear', value: 14000 }
  ]},
  { name: 'Home & Garden', value: 28000, children: [
    { name: 'Furniture', value: 16000 },
    { name: 'Decor', value: 8000 },
    { name: 'Garden', value: 4000 }
  ]},
  { name: 'Sports', value: 15000 },
];

export const salesPipelineData = [
  { stage: 'Leads', value: 1000, color: '#3B82F6' },
  { stage: 'Qualified', value: 750, color: '#10B981' },
  { stage: 'Proposal', value: 400, color: '#F59E0B' },
  { stage: 'Negotiation', value: 200, color: '#EF4444' },
  { stage: 'Closed Won', value: 120, color: '#8B5CF6' },
];

export const goalAchievementData = [
  { goal: 'Annual Revenue', current: 2850000, target: 3000000, percentage: 95 },
  { goal: 'New Customers', current: 1240, target: 1500, percentage: 83 },
  { goal: 'Market Share', current: 32, target: 35, percentage: 91 },
  { goal: 'Customer Satisfaction', current: 4.6, target: 4.8, percentage: 96 },
];

export const monthlyExpensesData = [
  { category: 'Salaries', jan: 45000, feb: 46000, mar: 47000, apr: 48000 },
  { category: 'Marketing', jan: 12000, feb: 15000, mar: 13000, apr: 18000 },
  { category: 'Operations', jan: 8500, feb: 9200, mar: 8800, apr: 9500 },
  { category: 'Technology', jan: 6700, feb: 7200, mar: 6900, apr: 7500 },
  { category: 'Rent', jan: 5000, feb: 5000, mar: 5000, apr: 5000 },
];

export const customerRetentionData = [
  { month: 'Jan', newCustomers: 245, returningCustomers: 1890, churnRate: 3.2 },
  { month: 'Feb', newCustomers: 312, returningCustomers: 1924, churnRate: 2.8 },
  { month: 'Mar', newCustomers: 298, returningCustomers: 1956, churnRate: 2.5 },
  { month: 'Apr', newCustomers: 356, returningCustomers: 2012, churnRate: 2.1 },
  { month: 'May', newCustomers: 423, returningCustomers: 2087, churnRate: 1.9 },
  { month: 'Jun', newCustomers: 445, returningCustomers: 2156, churnRate: 1.7 },
];