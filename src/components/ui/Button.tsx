import React, { ComponentPropsWithoutRef } from 'react'

import './../../styles/Button.css'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	btnText: string
}

const Button: React.FC<ButtonProps> = ({ btnText, ...props }) => {
	return (
		<button className='uppercase-text base-button dark-button' {...props}>
			{btnText}
		</button>
	)
}

export default Button
