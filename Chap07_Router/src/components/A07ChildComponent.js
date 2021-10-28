
import React from 'react';
import { Route, Link } from 'react-router-dom';

const A05ChildComponent = () => {

    return (
        <div>
            <h5>Children Component</h5>
            <div>This is Children Component</div>
            <br />
            
            <div>
                {/* 상위 라우츠의 이름과 첫번째 이름이 매칭되어야 한다. 또는 상대 */}
                <Link to="/A07ChildComponent">ONE</Link> | &nbsp; 
                <Link to="/A07ChildComponent/two/100"> TWO</Link> |  &nbsp;
                <Link to="three"> THREE</Link>  {/* 상대패스로. 하단 route도 상대패스로 기술 */}
            </div>
            
            <hr />

            <Route path="/A07ChildComponent"    exact       render={ () => (
                <div>
                    <h6>ONE Component</h6>
                    <div>This is one Component</div>    
                </div>
            )} />

            <Route path="/A07ChildComponent/two/:id"        render={ ({match}) => (
                <div>
                    <h6>TWO Component</h6>
                    <div>This is two Component</div>
                    <br />

                    <div>
                        Id: {match.params.id}
                    </div>
                </div>
            )} />

            <Route path="three"          render={ () => (
                <div>
                    <h6>THREE Component</h6>
                    <div>This is three Component</div>    
                </div>
            )} />
        </div>
    )
}
export default A05ChildComponent;