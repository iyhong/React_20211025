
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function A01Axios() {
    
    const baseURL = 'http://localhost:8080/contacts/?pageno=1&pagesize=10';
    const [data, setData] = useState();

    const getContactList = (pageno=1, pagesize=10) => {
        axios.get(baseURL, {params: {pageno, pagesize}})
        .then( resp => setData(resp.data))
        .catch( error => setData(error))
      };
    
      useEffect( () => {
        getContactList();
      }, []);
    
    return (
        <div>
            <h3>A01 Axios GET</h3>
            <button>DATA LIST</button>
            <button>DATA LIST ASYNC</button>
            <button>GET</button>
            <button>ADD</button>
            <button>UPDATE</button>
            <button>DELETE</button><br />
            <br />
            
            <textarea cols="100" rows="15" value={JSON.stringify(data, null, 4)}></textarea>
        </div>
    )
}

export default A01Axios
