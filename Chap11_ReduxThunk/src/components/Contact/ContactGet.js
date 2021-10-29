
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import {deleteContactAsync} from './../../modules/contactR'

function GetContact(props) {

    const { contact } = useSelector( state => state.contactR );
    const dispatch = useDispatch();
    const history = useHistory()

    const deleteContact = (no) => {
        dispatch(deleteContactAsync(no))
        history.push('/proceed')
    }
    
    return (
        <div className="container-fluid">
            <h3>Get Contact</h3>

            <div>
                Name: <input type="text" className="form-control" disabled 
                    defaultValue={contact && contact.name}/>
                Tel: <input type="text" className="form-control" disabled
                    defaultValue={contact && contact.tel} />
                Address: <input type="text" className="form-control" disabled
                    defaultValue={contact && contact.address}/>
            </div>
            <br />
            <button className="btn btn-outline-primary">수정</button>
            <button className="btn btn-outline-primary" onClick={ () => deleteContact(contact.no) }>삭제</button>
        </div>
    )
}

export default GetContact
