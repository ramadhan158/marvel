import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Marvel = ({name, des, img}) => {
	return(
		<div className="media m-4">
			<img className="mr-3" src={img + "/standard_amazing.jpg"} alt=""/>
				<div className="media-body">
					<h5 className="mt-0">{name}</h5>
					<p>{des}</p>
				</div>
		</div>
	);
};

export default Marvel;