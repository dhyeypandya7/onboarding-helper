'use server'

type FormData = {
  name: string;
  email: string;
  teamName: string;
  workEmail: string;
  workPassword: string;
  teamsEmail: string;
  teamsPassword: string;
  krollUsername: string;
  krollPassword: string;
};

function validateForm(data: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};

  if (!data.name) errors.name = 'Name is required';
  if (!data.email || !data.email.includes('@')) errors.email = 'Valid email is required';
  if (!data.teamName) errors.teamName = 'Team name is required';
  if (!data.workEmail || !data.workEmail.includes('@')) errors.workEmail = 'Valid work email is required';
  if (!data.workPassword || data.workPassword.length < 8) errors.workPassword = 'Work password must be at least 8 characters';
  if (!data.teamsEmail || !data.teamsEmail.includes('@')) errors.teamsEmail = 'Valid Teams email is required';
  if (!data.teamsPassword || data.teamsPassword.length < 8) errors.teamsPassword = 'Teams password must be at least 8 characters';
  if (!data.krollUsername) errors.krollUsername = 'Kroll username is required';
  if (!data.krollPassword || data.krollPassword.length < 8) errors.krollPassword = 'Kroll password must be at least 8 characters';

  return errors;
}

export async function registerTeam(formData: FormData) {
  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  // Here you would typically save the data to a database
  // For this example, we'll just simulate a successful registration
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay

  return { 
    success: true, 
    message: 'Team registered successfully!',
    data: formData
  };
}

