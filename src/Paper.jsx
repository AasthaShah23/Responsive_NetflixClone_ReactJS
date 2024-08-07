import {Player} from '@remotion/player';
import {MyVideo} from '../components/MyVideo';

export const App = () => {
	return (
		<Player
			component={MyVideo}
			durationInFrames={120}
			compositionWidth={1920}
			compositionHeight={1080}
			fps={30}
		/>
	);
};