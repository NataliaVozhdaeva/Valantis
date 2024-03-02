import { timeStamp } from './getAuth';

const getData = async () => {
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
        action: 'get_ids',
        params: { limit: 50 },
      }),
    });
    const data = await res.json();

    // console.log('data', data);
    return data;
  } catch (error) {
    console.log('error');
  }
};

const getCard = async (idsData) => {
  // console.log('api ', idsData.length);
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
  } catch (error) {
    console.log('error');
  }
};

export { getData, getCard };
