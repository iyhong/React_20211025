
import React  from 'react';
import { useLocation, useParams } from 'react-router';

const A03ParamComponent = ( props ) => {
    
    // const { match, location } = props;
    const params = useParams();
    const location = useLocation();

    const data = [
        { "id": 1, "name": "Apples", "category": "Fruit", "price": 1.20, "expiry": 10 },
        { "id": 2, "name": "Bananas", "category": "Fruit", "price": 2.42, "expiry": 7 },
        { "id": 3, "name": "Pears", "category": "Fruit", "price": 2.02, "expiry": 6 },
        { "id": 4, "name": "Tuna", "category": "Fish", "price": 20.45, "expiry": 3 },
        { "id": 5, "name": "Salmon", "category": "Fish", "price": 17.93, "expiry": 2 },
        { "id": 6, "name": "Trout", "category": "Fish", "price": 12.93, "expiry": 4 }
    ]

    // let product = data[ Number(match.params.id) ]
    let product = data[ Number(params.id) ]

    // stage에 있는 변수만 감시.
    // useEffect(() => {
    //     setProduct(data[Number(params.id)])        // state에 data라는 변수 없음
    // }, [])
    
    return (
        <div>
            <h5>Parameter Component</h5>
            <div>This is Parameter Component</div>
            <br />

            <div>
                Id: {params.id}<br/>
                Name: {params.name}<br/>
                Location: {location.pathname}
            </div>
            <br />

            <div>
                Id: {product.id}<br/>
                Name: {product.name}<br/>
                Category: {product.category}
            </div>
        </div>
    )
}
export default A03ParamComponent;