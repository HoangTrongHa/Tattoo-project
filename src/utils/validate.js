export function validateForm(formData) {
  const newErrors = {};

  // Required field checks
  if (!formData.firstName) {
    newErrors.firstName = 'Please enter your first name.';
  }
  if (!formData.lastName) {
    newErrors.lastName = 'Please enter your last name.';
  }
  if (!formData.email) {
    newErrors.email = 'Please enter your email address.';
  }
  // Check for valid email format
  else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address.';
  }
  if (!formData.emailRepeat) {
    newErrors.emailRepeat = 'Please repeat your email address.';
  } else if (formData.email !== formData.emailRepeat) {
    newErrors.emailRepeat = 'Email addresses do not match.';
  }
  
  return newErrors;
}