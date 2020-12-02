import React from 'react';

const Marvel = ({name, des, img}) => {
	return(
		<>
		<div>{name}</div>
		<div>{des}</div>
		<div>{img}</div>
		</>
	);
};

export default Marvel;