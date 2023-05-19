import { toast } from "react-toastify";
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
    setLoading(false);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    setLoading(false);
    return error;
  }

  return null;
};
const getLeadsByReflink = async (id, setLoading1) => {
  setLoading1(true);
  const options = {
    method: "GET",
    url: `/api/v1/lead/all/${id}/`,
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await AxiosApi.request(options);
    setLoading1(false);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    setLoading1(false);
    return error;

  }

  return null;
};
const getreflinks = async (paginationUrl, setLoading) => {
  setLoading(true);
  const options = {
    method: "GET",
    url: "/api/v1/reflink/all/" + paginationUrl,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    setLoading(false);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    setLoading(false);
    return error;
  }
};

const addReflink = async (reflink, networker, setLoading) => {
  setLoading(true);
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
      setLoading(false);
      return response.data;
    }
  } catch (error) {
    setLoading(false);
    alert("this reflink already exists !");
    return error;
  }
};

const removeRefLink = async (id, removeLoading) => {
  removeLoading(true);
  const options = {
    method: "DELETE",
    url: `/api/v1/reflink/delete/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    removeLoading(false);
    if (response.status === 204) {
      return "204";
    }
  } catch (error) {
    removeLoading(false);
    return error;
  }
};

const getAllWorkers = async (category, paginationUrl, setLoading) => {
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
    return error;
  }
};

const removeNetworker = async (id, setDeleteLoader) => {
  setDeleteLoader(true);
  const options = {
    method: "DELETE",
    url: `/api/v1/networker/delete/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    setDeleteLoader(false);
    if (response.status === 204) {
      return "204";
    }
  } catch (error) {
    setDeleteLoader(false);
    return error
  }
};

const deleteLead = async (id, setDeleteModal) => {
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

const activateNetworker = async (id, setModalLoader) => {
  setModalLoader(true);
  const options = {
    method: "PATCH",
    url: `/api/v1/networker/activate/${id}/`,
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await AxiosApi.request(options);
    setModalLoader(false);
    if (response.status === 200) {
      return "200";
    }
  } catch (error) {
    setModalLoader(false);
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
