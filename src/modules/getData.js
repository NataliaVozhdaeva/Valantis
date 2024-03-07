import { timeStamp } from './getAuth';

let counter = 0;

const getData = async (myLimit = 50, myOffset = 0) => {
  const currentLimit = myLimit;
  const currentOffset = myOffset;
  try {
    const url = `https://api.valantis.store:41000/`;
    const auth = timeStamp();

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
    console.log('data ', await res.clone().text());
    const data = await res.json();

    if (typeof data !== 'object') {
      while (counter < 10) {
        counter++;

        await getData(currentLimit, currentOffset);
      }
    }

    // console.log('data ', data.result);
    return data.result;
  } catch (catchID) {
    console.error(catchID);
    // getData();
  }
};

const getCard = async (idsData) => {
  const request = idsData;

  try {
    const url = `https://api.valantis.store:41000/`;
    const auth = timeStamp();

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
    console.log('getCards ', await res.clone().text());
    const data = await res.json();

    if (typeof data !== 'object') {
      while (counter < 10) {
        counter++;

        await getCard(request);
      }
    }

    return data.result;
  } catch (catchID) {
    console.log('error id', catchID);
    // console.log('request', request);

    // getCard(request);
  }
};

const getFields = async () => {
  try {
    const url = `https://api.valantis.store:41000/`;
    const auth = timeStamp();

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

    const data = await res.json();
    // console.log('fields ', await res.clone().text());

    return data;
  } catch (catchID) {
    console.log('error id', catchID);
    // getFields();
  }
};

const getFilteredArray = async (userRequest) => {
  const request = userRequest;
  console.log('filter request ', request);
  try {
    const url = `https://api.valantis.store:41000/`;
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
    console.log('filter ', await res.clone().text());
    const data = await res.json();

    // console.log('filter ', await res.text());

    return data.result;
  } catch (catchID) {
    console.log('error id', catchID);
    // getFilteredArray(request);
  }
};

export { getData, getCard, getFields, getFilteredArray };
