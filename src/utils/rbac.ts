export const hasAccess = (role: string, resource: string): boolean => {
  const accessMatrix = {
    admin: ['all'],
    supplier: ['inventory', 'forecasts'],
  };

  return accessMatrix[role]?.includes(resource) || false;
};