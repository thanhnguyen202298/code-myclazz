export const handleResponse = (response) => {
  const httpStatus = response.status;
  switch (httpStatus) {
    case 200:
      return response.json();
    case 201:
      break;
    case 401:
      throw new Error(
        'Unauthorized. Your account does not have permission to perform this action.',
      );
    case 422:
      return response.json().then(() => {
        throw new Error();
      });
    default:
      throw new Error('Server error. Please contact support.');
  }
  return response.json();
};

export const getOptions = (token = '') => ({
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'x-csrf-token': getCSRFToken(),
    Accept: 'application/json',
  },
});

export const createDefaultProjectState = () => ({
  projects: [],
  savedProjects: [],
  unsavedProjects: [],
  count: 0,
  loading: false,
  currentProject: 0,
});
