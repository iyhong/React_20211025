
import React from 'react'

function AddContact( props ) {
    
    const { contact, changeValue, updateContact } = props;

    return (
        <div className="container-fluid">
            <h3>Update Contact</h3>

            <div>
                Name: <input type="text" className="form-control" name="name"
                    value={contact && contact.name} onChange={changeValue} />
                Tel: <input type="text" className="form-control" name="tel"
                    value={contact && contact.tel}  onChange={changeValue} />
                Address: <input type="text" className="form-control" name="address"
                    value={contact && contact.address}  onChange={changeValue} />
            </div>
            <br />
            <button className="btn btn-outline-primary" onClick={updateContact}>ADD</button>
        </div>
    )
}

export default AddContact
