
import React from 'react';
import { useHistory } from 'react-router';

const A02ProductComponent = ( props ) => {

    // const { history } = props;          // history=> back, forward
    const history = useHistory();           // Hook

    const back = () => history.goBack();
    const forward = () => history.goForward();
    const home = () => history.push('/');       // path는 Route에 등록된 path 이름.
    const goURL = (url) => history.push(url);

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={back}>BACK</button>
                <button onClick={forward}>FORWARD</button>
                <button onClick={home}>HOME</button>
                <button onClick={() => goURL('/A02State')}>PARAMETER</button>
            </div>
        </div>
    )
}
export default A02ProductComponent;