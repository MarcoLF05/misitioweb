import React, { Fragment } from "react"

export default (props) => {
    return (
        <Fragment>
            <h2 className="text-3xl font-bold text-center mt-8">{props.title}</h2>
            <div className="flex mt-8">
                {
                    props.data.map(el => (
                        <props.card element={el}></props.card> 
                    ))
                }
            </div>
        </Fragment>
    )

}