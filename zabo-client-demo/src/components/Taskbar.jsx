import React from 'react';
import { AppBar, Toolbar, Button } from 'react95';
import zaboImg from '../img/zabo.png';

const Taskbar = () => {
	return (
		<AppBar style={{ top: 'auto', bottom: 0 }}>
			<Toolbar style={{ justifyContent: 'space-between' }}>
				<div style={{ position: 'relative', display: 'inline-block' }}>
					<Button>
						<img
							src={zaboImg}
							alt="Zabo logo"
							style={{ height: '20px', marginRight: 6 }}
						/>
						Start
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default Taskbar;
