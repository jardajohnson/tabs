import React, { useState } from 'react';
import TabArea from './components/TabArea';

function App() {

	const [tabs, setTabs] = useState([]);

	return (
		<div>
			<header>
				<TabArea />
			</header>
		</div>
	);
}

export default App;
