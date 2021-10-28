
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function A01Axios() {
    
    const baseURL = 'http://localhost:8080/contacts/';
    const [data, setData] = useState();

    const getContactList = (pageno=1, pagesize=10) => {
        axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
    };

    // await를 실행하는 함수는 async가 필수. 비 동기를 동기화 해서 실행할 목적
    const getContactListAsync = async (pageno=1, pagesize=10) => {
        try {
            const resp = await axios.get(baseURL, {params: {pageno: 1, pagesize}});  // 결과값이 대입될때까지 아래는 실행 안됨
            setData(resp.data);

            // data에 값이 들어온 후에 실행된다
            const resp2 = await axios.get(baseURL, {params: {pageno: 2, pagesize}});
            setData(resp2.data);
        } catch(error) {
            setData(error);
        }
    };

    const getContact = (no) => {
        axios.get(baseURL + no)
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
    };

    const addContact = () => {
        const data = {
            "name":"강감찬",
            "tel":"010-2222-3339",
            "address":"서울시"
        }
        axios.post(baseURL, data)
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
    };

    const updateContact = (no) => {
        const data = {
            "name":"이순신",
            "tel":"010-2222-1111",
            "address":"서울시"
        }
        axios.put(baseURL + no, data)
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
    };

    const deleteContact = (no) => {
        axios.delete(baseURL + no)
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
    };
    
    useEffect( () => {
        getContactList();
    }, []);
    
    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button onClick={getContactList}>DATA LIST</button>
            <button onClick={getContactListAsync}>DATA LIST ASYNC</button>
            <button onClick={ () => getContact(50) }>GET</button>
            <button onClick={addContact}>ADD</button>
            <button onClick={() => updateContact(1635405651905)}>UPDATE</button>
            <button onClick={() => deleteContact(1635405651905)}>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" value={JSON.stringify(data, null, 4)}></textarea>
        </div>
    )
}

export default A01Axios
