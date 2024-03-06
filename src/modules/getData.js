import { timeStamp } from './getAuth';

const getData = async (myLimit, myOffset) => {
  const url = `http://api.valantis.store:40000/`;
  const auth = timeStamp();

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': auth,
    },

    body: JSON.stringify({
      action: 'get_ids',
      params: { limit: myLimit, offset: myOffset },
    }),
  });

  const data = await res.json();
  return data.result;
};

const getCard = async (idsData) => {
  try {
    const url = `http://api.valantis.store:40000/`;
    const auth = timeStamp();

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_items',
        params: { ids: idsData },
      }),
    });

    const data = await res.json();
    return data.result;
  } catch (catchID) {
    console.log('error id', catchID);
  }
};

const getFields = async () => {
  try {
    const url = `http://api.valantis.store:40000/`;
    const auth = timeStamp();

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_fields',
        params: { field: 'brand' },
      }),
    });

    const data = await res.json();
    return data;
  } catch (catchID) {
    console.log('error id', catchID);
  }
};

export { getData, getCard, getFields };
