import React from 'react'
import FormBtn from './FormBtn'
import FormNum from './FormNum'
import FormText from './FormText'
import './header.sass'

export default function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <form onSubmit={props.submit}>
                    <div className="header__wrapper">
                        <FormText change={props.onchangeText}/>
                        <FormNum change={props.onchange}/>
                        <FormBtn click={props.click}/>
                    </div>
                </form>
            </div>
        </div>
    )
}
