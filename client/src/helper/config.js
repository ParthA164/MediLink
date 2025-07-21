const getServerURL = () => {
  // In development, use localhost
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000/api/';
  }
  // In production, use relative URL (same domain)
  return '/api/';
};

export { getServerURL };
