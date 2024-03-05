import { timeStamp } from './getAuth';

const getData = async (myLimit = 50, myOffset = 0) => {
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
  } catch (error) {
    console.log('error');
  }
};

export { getData, getCard, getFields };

// Золотое кольцо с бриллиантами 16700

/* Золотые серьги с бриллиантами 27500 ₽
id: 7906ca89-2c3f-402b-8908-01caba95bd07 
8004*/

//Золотые серьги СССР с бриллиантами  id: dab5aeca-fb98-4dd0-909f-4d4b34408ad6
