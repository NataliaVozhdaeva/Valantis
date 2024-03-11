import { timeStamp } from './getAuth';

const actualUrl = 'https://api.valantis.store:41000/';

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
        params: { field: 'brand' },
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

const getFilteredPrices = async (userRequest) => {
  let counter = 0;
  const request = Number(userRequest);
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
        params: { price: request },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return await data.result;
    } else {
      console.log(res.statusText);
      counter++;
      if (counter < 5) {
        return await getFilteredPrices(request);
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

const getFilteredBrands = async (userRequest) => {
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
        params: { brand: request },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return await data.result;
    } else {
      console.log(res.statusText);
      counter++;
      if (counter < 5) {
        return await getFilteredBrands(request);
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

const getFilteredProducts = async (userRequest) => {
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
        params: { product: request },
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return await data.result;
    } else {
      console.log(res.statusText);
      counter++;
      if (counter < 5) {
        return await getFilteredProducts(request);
      }
    }
  } catch (catchID) {
    console.error('catchID', catchID);
  }
};

export { getData, getCard, getFields, getFilteredProducts, getFilteredBrands, getFilteredPrices };
