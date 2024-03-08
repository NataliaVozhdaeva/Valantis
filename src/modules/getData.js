import { timeStamp } from './getAuth';

let counter = 0;

const getData = async (myLimit = 50, myOffset = 0) => {
  const currentLimit = myLimit;
  const currentOffset = myOffset;

  const url = 'http://api.valantis.store:40000/';
  const auth = timeStamp();
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_ids',
        params: { limit: currentLimit, offset: currentOffset },
      }),
    });

    if (res.ok) {
      const data = await res.json();

      return await data.result;
    } else {
      // console.log('get ids ', await res.clone().text());
      counter++;
      if (counter < 5) {
        return await getData(currentLimit, currentOffset);
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

const getCard = async (idsData) => {
  const request = idsData;
  const url = 'http://api.valantis.store:40000/';
  const auth = timeStamp();

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_items',
        params: { ids: request },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return await data.result;
    } else {
      // console.log('getCards ', await res.clone().text());
      counter++;
      if (counter < 5) {
        return await getCard(request);
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

const getFields = async () => {
  const url = 'http://api.valantis.store:40000/';
  const auth = timeStamp();
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_fields',
        params: { field: 'product' },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return await data;
    } else {
      counter++;
      if (counter < 5) {
        return await getFields();
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

const getFilteredArray = async (userRequest) => {
  const request = userRequest;
  // console.log('filter request ', request);

  const url = 'http://api.valantis.store:40000/';
  const auth = timeStamp();

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth': auth,
    },

    body: JSON.stringify({
      action: 'filter',
      params: { product: request },
    }),
  });

  try {
    // console.log('filter ', await res.clone().text());
    const data = await res.json();
    return await data.result;
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

export { getData, getCard, getFields, getFilteredArray };
