import AxiosApi from "./AxiosApi";

const getLeads = async (paginationUrl) => {
  const options = {
    method: "GET",
    url: "/api/v1/lead/all/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
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
    return error;

  }

  return null;
};
const getreflinks = async (paginationUrl) => {
  const options = {
    method: "GET",
    url: "/api/v1/reflink/all/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
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
    alert("this reflink already exists !");
    return error;
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
    return error;
  }
};

const getAllWorkers = async (category, paginationUrl) => {
  const options = {
    method: "GET",
    url: "/user/api/v1/networker/"+ category + "/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return error;
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
    return error
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
    return error
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
    return error
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
