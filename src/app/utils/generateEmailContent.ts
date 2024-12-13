export function generateEmailContent(formData: {
  name: string;
  workEmail: string;
  workPassword: string;
  teamsEmail: string;
  teamsPassword: string;
  krollUsername: string;
  krollPassword: string;
}) {
  const {
    name,
    workEmail,
    workPassword,
    teamsEmail,
    teamsPassword,
    krollUsername,
    krollPassword
  } = formData;

  const subject = encodeURIComponent(`Welcome to Silver Scripts, ${name}!`);
  const body = encodeURIComponent(`
Hello ${name},

Welcome to the Silver Scripts team! We are excited to have you on board. To help you get started, here are the details for your work email and credentials for accessing our software systems:

Work Email Account:
Email Address: ${workEmail}
Password: ${workPassword}

Software Access:
Below are the login details for the key software tools you'll be using:

MS Teams:
Username: ${teamsEmail}
Password: ${teamsPassword}

Kroll:
Username: ${krollUsername}
Password: ${krollPassword}

If you encounter any issues or have any questions regarding these credentials, feel free to reach out to me directly. I'm here to help! Looking forward to your success at Silver Scripts Ottawa.

Best regards,
Your Manager
  `);

  return `mailto:${workEmail}?subject=${subject}&body=${body}`;
}

