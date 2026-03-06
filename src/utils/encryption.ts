export const encryptData = (data: string): string => {
  // Implement encryption logic here
  return btoa(data);
};

export const decryptData = (data: string): string => {
  // Implement decryption logic here
  return atob(data);
};