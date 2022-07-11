import React, { useState } from 'react';
import TabArea from './components/TabArea';
import Tab from './components/Tab';
import './App.css';

function App() {
	const [tabs, setTabs] = useState(['hello']);
	const [index, setIndex] = useState('--');
	const [content, setContent] = useState('');

	// const changeIndex = (index) => {

	// }

	return (
		<div>
			<header className='container'>
				<Tab tabs={tabs} setIndex={setIndex} setContent={setContent} />
				<TabArea index={index} content={content} />
			</header>
		</div>
	);
}

export default App;
