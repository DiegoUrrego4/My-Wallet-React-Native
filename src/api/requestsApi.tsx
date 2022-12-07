const baseURL = 'http://192.168.1.25:3000/api/v1';

export const getClientData = async (clientEmail: string) => {
  const res = await fetch(`${baseURL}/clients/${clientEmail}`);
  const data = await res.json();
  return data;
};
