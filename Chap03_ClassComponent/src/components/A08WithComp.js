// A08WithComp.js
import React from 'react'

// Comp => Component가 넘어와서 태그로 사용 예정. 따라서 매개변수 이름의 첫 글자가 대문자.
function A08WithComp(Comp, args) {      

    return class InnerComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                name: 'NolBu'
            }
        }
        changeName = () => this.setState({name: 'HungBu'});

        render() {
            return (
                <div>
                    <h3>Inner Component</h3>
                    Age: {this.props.age}<br />
                    Args: {args}<br />

                    <Comp {...this.props} name={this.state.name} changeName={this.changeName}/>
                </div>
            )
        }
    }
}
export default A08WithComp