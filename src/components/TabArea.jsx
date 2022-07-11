const TabArea = ({ index, content }) => {
	return (
		<>
			{
				<h2>
					Tab {index}: {content}
				</h2>
			}
		</>
	);
};

export default TabArea;
