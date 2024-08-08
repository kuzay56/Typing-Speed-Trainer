import React from 'react'

import './../../styles/ModalWindow.css'

type ModalWindowProps = {
	children: JSX.Element | JSX.Element[]
	title: string
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children, title }) => {
	return (
		<div className='modal-window-blackout'>
			<div className='modal-window'>
				<h2 className='big-header modal-window-text'>{title}</h2>
				{children}
			</div>
		</div>
	)
}

export default ModalWindow
