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
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Driver', 'Support Staff'],
  tenantName: 'Organization',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read organization information'],
  ownerAbilities: ['Manage user data', 'Manage organization data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/c035ad30-a485-4f75-ae85-26167da35aed',
};
