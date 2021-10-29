
import { handleActions } from 'redux-actions'
import axios from 'axios'
import produce from 'immer'

const GET_CONTACTLIST = "CONTACT/GET_CONTACTLIST";
const GET_CONTACTLIST_SUCCESS = "CONTACT/GET_CONTACTLIST_SUCCESS";
const GET_CONTACTLIST_FAILURE = "CONTACT/GET_CONTACTLIST_FAILURE";

const GET_CONTACT = "CONTACT/GET_CONTACT";
const GET_CONTACT_SUCCESS = "CONTACT/GET_CONTACT_SUCCESS";
const GET_CONTACT_FAILURE = "CONTACT/GET_CONTACT_FAILURE";

const ADD_CONTACT = "CONTACT/ADD_CONTACT";
const ADD_CONTACT_SUCCESS = "CONTACT/ADD_CONTACT_SUCCESS";
const ADD_CONTACT_FAILURE = "CONTACT/ADD_CONTACT_FAILURE";

const baseURL = 'http://localhost:8080/contacts/';
const baseLONG = 'http://localhost:8080/contacts_long/';


// Action
export const getContactListAsync = (pageno, pagesize) => dispatch => {
    dispatch(getContactList())
    axios.get(baseLONG, {params: {pageno: pageno || 1, pagesize: pagesize || 10}})
    .then(resp => dispatch(getContactListSuccess(resp.data)))
    .catch( error => dispatch(getContactListError(error)))
}
const getContactList = () => ({type: GET_CONTACTLIST})
const getContactListSuccess = (data) => ({type: GET_CONTACTLIST_SUCCESS, payload: data })
const getContactListError = (error) => ({type: GET_CONTACTLIST_FAILURE, payload: error })

export const getContactAsync = (no) => dispatch => {
    dispatch({type: GET_CONTACT})
    axios.get(baseURL + no)
    .then(resp => dispatch({type: GET_CONTACT_SUCCESS, payload: resp.data}))
    .catch( error => dispatch({type: GET_CONTACT_FAILURE, payload: error}))
}

export const addContactAsync = (contact) => dispatch => {
    dispatch({type: ADD_CONTACT})
    axios.post(baseURL, contact)
    .then(resp => dispatch({type: ADD_CONTACT_SUCCESS, payload: resp.data}))
    .catch( error => dispatch({type: ADD_CONTACT_FAILURE, payload: error}))
}
export const deleteContactAsync = (no) => dispatch => {
    dispatch({type: ADD_CONTACT})
    axios.delete(baseURL + no)
    .then(resp => dispatch({type: ADD_CONTACT_SUCCESS, payload: resp.data}))
    .catch( error => dispatch({type: ADD_CONTACT_FAILURE, payload: error}))
}

const init = {
    loading: {
        GET_CONTACTLIST: false,
        GET_CONTACT: false,
        ADD_CONTACT: false,
    },
    contactList: null,
    contact: null,
    error: null,
}
const contactR = handleActions({
    // Get List
    [GET_CONTACTLIST]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: true,
            },
            contactList: null,
            error: null
        }
    },
    [GET_CONTACTLIST_SUCCESS]: (state, action) => {
        console.log(action)
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: false,
            },
            contactList: action.payload,
        };
    },
    [GET_CONTACTLIST_FAILURE]: (state, action) => {
        return {
            ...state,
            loading: {
                ...state.loading,
                GET_CONTACTLIST: false,
            },
            error: action.payload,
        };
    },
    // Get
    [GET_CONTACT]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.GET_CONTACT = true;
            draft.contact = null;
            draft.error = null;
        })
        return data;
    },
    [GET_CONTACT_SUCCESS]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.GET_CONTACT = false;
            draft.contact = action.payload;
        })
        return data;
    },
    [GET_CONTACT_FAILURE]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.GET_CONTACT = false;
            draft.error = action.payload;
        })
        return data;
    },
    // Add
    [ADD_CONTACT]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.ADD_CONTACT = true;
            draft.contact = null;
            draft.error = null;
        })
        return data;
    },
    [ADD_CONTACT_SUCCESS]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.ADD_CONTACT = false;
        })
        return data;
    },
    [ADD_CONTACT_FAILURE]: (state, action) => {
        const data = produce(state, draft => {
            draft.loading.ADD_CONTACT = false;
            draft.error = action.payload;
        })
        return data;
    },
}, init);
export default contactR;
