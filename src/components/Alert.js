import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const war = "Warning!!!"
    return (
        props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.typ==='danger'? war:props.alert.typ)}</strong>! {props.alert.msg}
        </div>
    )
}

export default Alert
