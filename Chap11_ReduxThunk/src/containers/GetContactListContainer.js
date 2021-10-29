// GetContactListContainer.js

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactListAsync, getContactAsync } from './../modules/contactR'
import ContactGetList from './../components/Contact/ContactGetList'
import { useHistory } from 'react-router';

function GetContactListContainer() {

    const { contactList, loading, error } = useSelector( state => state.contactR );
    const dispatch = useDispatch();
    const history = useHistory();

    const getContact = (no) => {
        dispatch( getContactAsync(no) )
        history.push('/getContact')
    }

    useEffect( () => {
        dispatch( getContactListAsync() )
    }, [dispatch]);

    return (
        <div>
            { loading.GET_CONTACTLIST && <h3>로딩중...</h3>}
            { error && <h3>Error</h3>}
            { contactList && <ContactGetList contactList={contactList} getContact={getContact} />}
        </div>
    )
}

export default GetContactListContainer
