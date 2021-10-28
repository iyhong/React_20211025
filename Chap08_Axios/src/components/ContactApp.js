import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';

import ContactHeader from './Contact/ContactHeader'
import ContactHome from './Contact/ContactHome'
import ContactAdd from './Contact/ContactAdd'
import ContactUpdate from './Contact/ContactUpdate'
import ContactGet from './Contact/ContactGet'
import ContactGetList from './Contact/ContactGetList'

import axios from 'axios'
import { getContactListAPI, getContactAPI } from './../api/contactAPI'

function ContactApp() {
    const [contactList, setContactList] = useState();
    const [contact, setContact] = useState({no: '', name: '', tel: '', address:''});
    const history = useHistory();

    // contact 항목 수정
    const changeValue = evt => setContact({
        ...contact,
        [evt.target.name]: evt.target.value
    });

    const baseURL = 'http://localhost:8080/contacts/';

    const getContactList = (pageno, pagesize) => {
        // axios.get(baseURL, {params: {pageno, pagesize}})
        getContactListAPI(pageno, pagesize)
        .then( resp => setContactList(resp.data))
        .catch( error => console.log(error))
    };

    const getContact = (no) => {
        // axios.get(baseURL + no)
        getContactAPI(no)
        .then( resp => {
            setContact(resp.data);
            history.push('/getContact')
        })
        .catch( error => console.log(error))
    };

    const deleteContact = (no) => {
        axios.delete(baseURL + no)
        .then( resp => {
            console.log(resp.data);
            getContactList(1, 10);              // 삭제된 결과가 반영된 데이터를 다시 가지고와서 list에 대입
            history.push('/getContactList')
        })
        .catch( error => console.log(error))
    };

    const updateContact = () => {
        axios.put(baseURL + contact.no, contact)
        .then( () => {
            getContactList(1, 10);              // 삭제된 결과가 반영된 데이터를 다시 가지고와서 list에 대입
            history.push('/getContactList')
        })
        .catch( error => console.log(error))
    };

    const addContact = (contact) => {
        axios.post(baseURL, contact)
        .then( () => {
            getContactList(1, 10);              // 추가된 결과가 반영된 데이터를 다시 가지고와서 list에 대입
            history.push('/getContactList')
        })
        .catch( error => console.log(error))
    };

    // 수정 페이지로 이동
    const goUpdate = () => history.push('/updateContact')

    useEffect( () => {
        getContactList(1, 10);
    }, [])

    return (
        <div className="card-body">
            <ContactHeader />

            <Switch>
                <Route path="/"                 component={ContactHome}         exact/>
                <Route path="/getContactList"   render={ () => <ContactGetList contactList={contactList} getContact={getContact} /> } />
                <Route path="/getContact"       render={ () => <ContactGet contact={contact} goUpdate={goUpdate} deleteContact={deleteContact} />} />
                <Route path="/addContact"       render={ () => <ContactAdd addContact={addContact} contact={contact} setContact={setContact} changeValue={changeValue} /> } />
                <Route path="/updateContact"    render={ () => <ContactUpdate contact={contact} changeValue={changeValue} updateContact={updateContact} /> } />
                <Route                          render={() => <h3>Not Found</h3>} />
            </Switch>
        </div>
    )
}

export default ContactApp
