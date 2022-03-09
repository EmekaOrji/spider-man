import React from 'react';

export default function Container({
	flexRight,
	flexDown,
	flexLeft,
	flexUp,
	mainStart,
	mainEnd,
	mainCenter,
	mainAround,
	mainBetween,
	mainEvenly,
	mainBaseline,
	crossStart,
	crossEnd,
	crossCenter,
	crossAround,
	crossBetween,
	crossEvenly,
	crossBaseline,
	mainStart_self,
	mainEnd_self,
	mainCenter_self,
	mainBaseline_self,
	crossStart_self,
	crossEnd_self,
	crossCenter_self,
	crossBaseline_self,
	hSize,
	vSize,
	...props
}) {
	const direction = flexRight
		? 'row'
		: flexDown
		? 'column'
		: flexLeft
		? 'row-reverse'
		: flexUp
		? 'column-reverse'
		: '';
	const mAlign = mainStart
		? 'flex-start'
		: mainEnd
		? 'flex-end'
		: mainCenter
		? 'center'
		: mainBetween
		? 'space-between'
		: mainAround
		? 'space-around'
		: mainEvenly
		? 'space-evenly'
		: mainBaseline
		? 'baseline'
		: '';
	const cAlign = crossStart
		? 'flex-start'
		: crossEnd
		? 'flex-end'
		: crossCenter
		? 'center'
		: crossBetween
		? 'space-between'
		: crossAround
		? 'space-around'
		: crossEvenly
		? 'space-evenly'
		: crossBaseline
		? 'baseline'
		: '';
	const mAlign_self = mainStart_self
		? 'flex-start'
		: mainEnd_self
		? 'flex-end'
		: mainCenter_self
		? 'center'
		: mainBaseline_self
		? 'baseline'
		: '';
	const cAlign_self = crossStart_self
		? 'flex-start'
		: crossEnd_self
		? 'flex-end'
		: crossCenter_self
		? 'center'
		: crossBaseline_self
		? 'baseline'
		: '';
	const styles = {
		width: isNaN(hSize) ? hSize : `${hSize}%`,
		height: isNaN(vSize) ? vSize : `${vSize}%`,
		display: 'flex',
		flexDirection: direction,
		justifyContent: mAlign,
		alignItems: cAlign,
		justifySelf: mAlign_self,
		alignSelf: cAlign_self,
	};
	return <div {...props} style={{ ...styles, ...props.style }}></div>;
}