import axios from 'axios'

const PAGE_NO = 1;
const PAGE_SIZE = 10
const baseURL = 'http://localhost:8080/contacts/';
const GETCONTACTLIST = baseURL;
const GETCONTACT = baseURL + 'no';
const ADDCONTACT = baseURL;
const UPDATECONTACT = baseURL + 'no';
const DELETECONTACT = baseURL + 'no';

const getContactListAPI = (pageno, pagesize) => {
    return axios.get(GETCONTACTLIST, {params: {pageno: pageno || PAGE_NO, pagesize: pagesize || PAGE_SIZE}})
}
const getContactAPI = (no) => {
    return axios.get(GETCONTACT.replace('no', no));
}

export { getContactListAPI, getContactAPI }