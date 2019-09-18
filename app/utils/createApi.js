import { create } from 'apisauce';

export function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export function checkStatus(response) {
  if (
    String(response.data.status) !== 'error' // TODO server error fix server response code
    // (response.status >= 200 && response.status < 300)
  ) {
    return false;
  }
  return true;
}

export const createApi = options => {
  const api = create({
    baseURL: `${process.env.API_URL}`,
    ...options,
  });
  return api;
};
