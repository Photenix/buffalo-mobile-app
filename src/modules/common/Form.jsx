import '../../styles/sass/Form.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';

import RE from '../../tools/RE';
import { findUser, getUser, postUser } from '../../helpers/UserCRUD';

import PropTypes from 'prop-types'

const Form = ( props ) => {

    const { txt_main, txt_secondary, btn_text, inputs, go_page, txt_footer } = props

    const submit = (e) =>{
		e.preventDefault()
		let obj = {}
		const inputs = e.target.querySelectorAll("input")

		let isOk = true

		inputs.forEach(element => {
			//console.log(element.type)
			if( element.type === "tel" ){
				if( allIsOk( element, RE.checkPhone) ) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'password') {
				if(allIsOk( element, RE.checkPassword)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'text') {
				if(allIsOk( element, RE.checkName)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'email') {
				if(allIsOk( element, RE.checkEmail)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}

			if( obj[element.name] == null ) return isOk = false
			
		});
		
		if( isOk ) {
            if( false ){
                postUser( obj.user, obj.email, obj.tel, obj.pass)
            }
        }

	}

	const stateColorInput = ( e ) =>{
		//console.log( e.target.type )
		if( e.target.type === "tel" ) allIsOk( e.target, RE.checkPhone)
		if( e.target.type === 'password') allIsOk( e.target, RE.checkPassword)
		if( e.target.type === 'text') allIsOk( e.target, RE.checkName )
		if( e.target.type === 'email') allIsOk( e.target, RE.checkEmail )
	}


	const allIsOk = ( node, callback ) => {
		//console.log( callback( node.value ) )
		if( node.value.length === 0 ) node.className = ""
		else if ( callback( node.value ) ) node.className = "complete"
		else { node.className = "incomplete" }
		return callback( node.value )
	}

	const navigate = useNavigate()

    return (
        <div className="form-init">
			<div className="form-init-header-text">
				<h1>{ txt_main || "Hello" }</h1>
				<h2>{ txt_secondary }</h2>
			</div>

			<form action="" 
				className="form-init-inputs"
				onSubmit={ submit } >
				
				<div className="inputs">
					{
						inputs.map( obj => { 
							return (
								<input type={obj.t} name={obj.n} 
								placeholder={obj.ph} onChange={ stateColorInput } />
							)
						})
					}
				</div>

				<div className="footer">
					<button type="submit">{ btn_text }</button>
					<h2>
						{ txt_footer.h2 }
						<a onClick={()=>{navigate( go_page )}}> { txt_footer.a }</a>
					</h2>
				</div>
				
			</form>
		</div>
    );
};

Form.protoType = {
	inputs: PropTypes.arrayOf( PropTypes.object ).isRequired,
	/**  
	 * @inputs array this contain objects whit structure { t, n, ph }
	 * type = t
	 * name = n
	 * placeholder  = ph 
	*/
	btn_text: PropTypes.string.isRequired,
	txt_main: PropTypes.string,
	txt_secondary: PropTypes.string,
	go_page: PropTypes.string,
	txt_footer: PropTypes.string,
}


export default Form;