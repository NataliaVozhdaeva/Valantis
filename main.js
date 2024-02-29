const tymeStamp = () => {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = today.getUTCMonth() + 1;
  const day = today.getUTCDate();

  const auth = md5('Valantis_' + year + month.toString().padStart(2, 0) + day.toString().padStart(2, 0));

  return auth;
};

const getData = async () => {
  try {
    const url = `http://api.valantis.store:40000/`;
    const auth = tymeStamp();
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_ids',
      }),
    });
    const data = await res.json();

    console.log('data', data);
  } catch (error) {
    console.log('error');
  }
};

getData();
