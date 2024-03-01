import { timeStamp } from './getAuth';

export const getData = async () => {
  try {
    const url = `http://api.valantis.store:40000/`;
    const auth = timeStamp();
    console.log('auth ', auth);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': auth,
      },

      body: JSON.stringify({
        action: 'get_ids',
        // action: 'get_items',
        // params: { ids: ['2b7c7643-6852-4562-8a72-7666c72b3518'] },
      }),
    });
    const data = await res.json();

    console.log('data', data);
  } catch (error) {
    console.log('error');
  }
};

// export {getData}
