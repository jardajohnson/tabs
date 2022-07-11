import './Tab.css';

const Tab = ({ tabs, setIndex, setContent }) => {
	const handleClick = (e, ind) => {
		setContent(e.value);
		setIndex(ind + 1);
	};

	return (
		<>
			{tabs.map((tab, index) => {
				return (
					<button
						key={index}
						type='button'
						onClick={(e) => handleClick(e.target, index)}
						value={tab}
						className='tab'
					>
						Tab {index + 1}
					</button>
				);
			})}
		</>
	);
};

export default Tab;
