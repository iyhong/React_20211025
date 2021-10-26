// A03Fragment.js

import React, { Fragment } from 'react'

function A03Fragment() {
    return (
        <Fragment>      {/* <template> 태그와 동일한 역할. */}
            <h3>A03 Fragment</h3>

            <>          {/* <template> 태그와 동일한 역할. */}
                This is Fragment Component
            </>
        </Fragment>
    )
}

export default A03Fragment
