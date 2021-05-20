export enum Path {
  // General containers
  home = 'home',
  notFound = '404',

  // Auth
  auth = '',
  signIn = 'sign-in',
  signUp = 'sign-up',
  forgotPassword = 'forgot-password',
  forgotPasswordEmailSent = 'forgot-password-email-sent',
  passwordReset = 'password-reset',
  passwordResetFailed = 'password-reset-failed',
  passwordResetSucceeded = 'password-reset-succeeded',

  // App base url
  app = 'app',
  dashboard = '',

  // Settings
  settings = 'settings',
  settingsAccount = 'account',
  settingsAppearance = 'appearance',
  settingsBilling = 'billing',
  settingsBlockedUsers = 'blocked-users',
  settingsNotifications = 'notifications',
  settingsSecurity = 'security',
  settingsSecurityLog = 'security-log',

  // User
  users = 'users',
  usersOverview = 'overview',
  usersProfile = ':username',
}
