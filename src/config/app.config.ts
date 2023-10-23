interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Team',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read team information',
    'Read employee information',
    'Read vacation information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Manage employee information',
    'Manage payroll information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/17ef6d89-7a73-4255-be70-c1640a7accba',
};
