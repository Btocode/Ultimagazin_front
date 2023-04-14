import { AxiosApi } from "../AxiosApi";

let cacheDataFoDepartment;
let cacheDataForPerson;
let storeid;
let dataVersion = 0;

async function fetchPerson(url, accessToken, id) {
  if (storeid !== id) {
    // If the ID has changed, invalidate the cache
    cacheDataForPerson = undefined;
    dataVersion++;
    storeid = id;
  }

  if (!cacheDataForPerson) {
    try {
      const response = await AxiosApi({
        method: "get",
        url: url + storeid + '/',
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      if (response.status === 200) {
        cacheDataForPerson = response.data;
        // Update the version number to reflect the new data
        dataVersion++;
      } else {
        cacheDataForPerson = {};
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { data: cacheDataForPerson, version: dataVersion };
}


async function fetchDepartment(url, accessToken) {
  if (!cacheDataFoDepartment) {
    try {
      const response = await AxiosApi({
        method: "get",
        url: url,
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      if (response.status === 200) {
        cacheDataFoDepartment = response.data
      } else {
      cacheDataFoDepartment = {}
      }
    } catch (error) {
      console.log(error);
    }
  }
  return cacheDataFoDepartment;
}

// const fetchPerson = async (url, accessToken, id) => {
//   console.log('id', id)
//   if(!id) return null;
//   return await AxiosApi({
//     method: 'get',
//     url: url + id + '/',
//     headers: {
//       Authorization: 'Bearer ' + accessToken,
//     },
//   });
// };




export { fetchDepartment, fetchPerson};
