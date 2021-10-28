
import React, { useEffect } from 'react'

function AddContact(props) {

    const { contact, setContact, changeValue, addContact } = props;

    useEffect( () => {
        setContact({no: '', name: '', tel: '', address:''});
    }, [setContact])

    return (
        <div className="container-fluid">
            <h3>Add Contact</h3>

            Name: <input type="text" className="form-control" name="name" 
                value={contact && contact.name} onChange={changeValue} />
            Tel: <input type="text" className="form-control" name="tel" 
                value={contact && contact.tel} onChange={changeValue} />
            Address: <input type="text" className="form-control" name="address"
                value={contact && contact.address} onChange={changeValue} />
            <br />
            <button className="btn btn-outline-primary" onClick={ () => addContact(contact) }>ADD</button>
        </div>
    )
}

export default AddContact
