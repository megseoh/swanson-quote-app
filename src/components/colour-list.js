import React from 'react';

export default function ColourList({
	bgColours,
	selectBgColour,
}) {
	var bgColours = ['#DA4C45', '#7796A0', '#FC7C8B', '#82B5A0', '#BB99C2', '#D3D88A', '#5F9EA0'];
	return (
		<div className="colours-container">
			{bgColours.map((bgColour, index) =>
				<div
					key={index}
					className="select-colour"
					style={{ backgroundColor: bgColour }}
					selectBgColour={ bgColour }
					onClick={ () => selectBgColour(bgColour) } >
				</div>)}
		</div>
	);
}