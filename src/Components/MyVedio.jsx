import React from 'react';
import {useCurrentFrame} from 'remotion';

const MyVideo = () => {
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
			}}
		>
			The current frame is {frame}.
		</div>
	);
};

export default MyVideo;