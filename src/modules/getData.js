import { timeStamp } from './getAuth';

const getData = async (myLimit = 50, myOffset = 0) => {
  console.log('myLimit', myLimit, 'myOffset', myOffset);
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
        params: { limit: myLimit, offset: myOffset },
      }),
    });

    const data = await res.json();
    return data.result;
  } catch (error) {
    console.log('error');
  }
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
  } catch (error) {
    console.log('error');
  }
};

export { getData, getCard };
