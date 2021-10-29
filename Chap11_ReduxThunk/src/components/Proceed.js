
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProceedContainer() {

    const history = useHistory();
    const { error, loading } = useSelector( state => state.contactR);

    return (
        <div>
            { error && <div>Error</div>}
            { loading.ADD_CONTACT ? <h1>처리중...</h1> : history.push('/getContactList') }
        </div>
    )
}

export default ProceedContainer
