import md5 from 'blueimp-md5';

export const timeStamp = () => {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = today.getUTCMonth() + 1;
  const day = today.getUTCDate();

  const auth = md5('Valantis_' + year + month.toString().padStart(2, 0) + day.toString().padStart(2, 0));

  return auth;
};
