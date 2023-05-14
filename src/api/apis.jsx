import AxiosApi from "./AxiosApi";

const getLeads = async (setLoading, paginationUrl) => {
  setLoading(true);
  const options = {
    method: "GET",
    url: "/api/v1/lead/all/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      setLoading(false);
      return response.data;
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }

  return null;
};
const getLeadsByReflink = async (id) => {
  const options = {
    method: "GET",
    url: `/api/v1/lead/all/${id}/`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
const getreflinks = async (setLoading, paginationUrl) => {
  setLoading(true);
  const options = {
    method: "GET",
    url: "/api/v1/reflink/all/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      setLoading(false);
      return response.data;
    }
  } catch (error) {
    setLoading(false);  
    console.log(error);
  }
};

const addReflink = async (reflink, networker) => {
  const options = {
    method: "POST",
    url: "/api/v1/reflink/create/",
    headers: { "Content-Type": "application/json" },
    data: {
      url: reflink,
      networker: networker,
    },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeRefLink = async (id) => {
  const options = {
    method: "DELETE",
    url: `/api/v1/reflink/delete/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.status === 204) {
      return "204";
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllWorkers = async (setLoading,category, paginationUrl) => {
  setLoading(true);
  const options = {
    method: "GET",
    url: "/user/api/v1/networker/"+ category + "/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      setLoading(false);
      return response.data;
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};

const removeNetworker = async (id) => {
  const options = {
    method: "DELETE",
    url: `/api/v1/networker/delete/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.status === 204) {
      return "204";
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteLead = async (id) => {
  const options = {
    method: "DELETE",
    url: `/api/v1/lead/delete/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.status === 204) {
      return "204";
    }
  } catch (error) {
    console.log(error);
  }
};

const activateNetworker = async (id) => {
  const options = {
    method: "PATCH",
    url: `/api/v1/networker/activate/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.status === 200) {
      return "200";
    }
  } catch (error) {
    console.log(error);
  }
};



export {
  getLeads,
  getreflinks,
  getLeadsByReflink,
  addReflink,
  removeRefLink,
  getAllWorkers,
  deleteLead,
  removeNetworker,
  activateNetworker,
};
