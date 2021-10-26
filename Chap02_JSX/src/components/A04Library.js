// A04Library.js

// npm i jquery
// 확인은 package.json에 추가되었는지 확인.
import React, { useState } from 'react'
import $ from 'jquery'

function A04Library() {

    $(document).ready(function(){
        $('#btn').click(function(){
            let qty = $('input[name="qty"]').val();
            let cost = $('input[name="cost"]').val();
            let total = qty * cost;
            $('#total').html(total);
        })
    });

    const [total, setTotal] = useState(0);
    const clickEvent = () => {
        let qty = $('input[name="qty"]').val();
        let cost = $('input[name="cost"]').val();
        let total = qty * cost;

        setTotal(total);
    }
    return (
        <div>
            <h3>A04 Library</h3>

            <div>
                <input type="text" name="qty" className="form-control" />
                <input type="text" name="cost" className="form-control" />
                <button id="btn">CLICK</button>
                <button onClick={clickEvent}>React</button>
                <br />
                Total: <span id="total"></span><br />
                Total: <span>{total}</span>
            </div>
        </div>
    )
}

export default A04Library
