import { timeStamp } from './getAuth';

const actualUrl = 'http://api.valantis.store:40000/';

const getData = async (myLimit = 50, myOffset = 0) => {
  let counter = 0;
  const currentLimit = myLimit;
  const currentOffset = myOffset;

  const url = actualUrl;
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
      console.log(res.statusText);
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
  let counter = 0;
  const request = idsData;
  const url = actualUrl;
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
      console.log(res.statusText);
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
  let counter = 0;
  const url = actualUrl;
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
      console.log(res.statusText);
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
  let counter = 0;
  const request = userRequest;

  const url = actualUrl;
  const auth = timeStamp();
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'filter',
        params: { product: request, limit: '50', offset: '0' },
      }),
    });

    if (res.ok) {
      const data = await res.json();

      return await data.result;
    } else {
      console.log(res.statusText);
      counter++;
      if (counter < 5) {
        return await getFields();
      }
    }
    // console.log('filter ', await res.clone().text());
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

export { getData, getCard, getFields, getFilteredArray };
