const TabArea = ({ index, content }) => {
	return (
		<>
			{
				<p>
					Tab {index}: {content}
				</p>
			}
		</>
	);
};

export default TabArea;
