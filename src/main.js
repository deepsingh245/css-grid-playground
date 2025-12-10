// --- Canvas Background Effect ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

function resize() {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	initParticles();
}

function initParticles() {
	particles = [];
	const count = Math.floor(width * height / 15000);
	for (let i = 0; i < count; i++) {
		particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			size: Math.random() * 2 + 1,
			color: Math.random() > 0.5 ? '#6366f1' : '#ec4899'
		});
	}
}

function drawParticles() {
	ctx.clearRect(0, 0, width, height);

	// Draw Grid Lines
	ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
	ctx.lineWidth = 1;
	const gridSize = 100;

	const time = Date.now() * 0.0005;
	const offsetX = (time * 20) % gridSize;
	const offsetY = (time * 20) % gridSize;

	for (let x = offsetX; x < width; x += gridSize) {
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, height);
		ctx.stroke();
	}
	for (let y = offsetY; y < height; y += gridSize) {
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(width, y);
		ctx.stroke();
	}

	// Draw Particles
	particles.forEach(p => {
		p.x += p.vx;
		p.y += p.vy;

		if (p.x < 0) p.x = width;
		if (p.x > width) p.x = 0;
		if (p.y < 0) p.y = height;
		if (p.y > height) p.y = 0;

		ctx.beginPath();
		ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
		ctx.fillStyle = p.color;
		ctx.globalAlpha = 0.6;
		ctx.fill();
	});

	requestAnimationFrame(drawParticles);
}

window.addEventListener('resize', resize);
resize();
drawParticles();

// --- Grid Playground Logic ---
const gridContainer = document.getElementById('gridContainer');
const codeDisplay = document.getElementById('codeDisplay');
const buttons = document.querySelectorAll('.btn');

// Input elements
const itemCountInput = document.getElementById('itemCount');
const updateItemsBtn = document.getElementById('updateItems');
const customColumnsInput = document.getElementById('customColumns');
const applyCustomColumnsBtn = document.getElementById('applyCustomColumns');
const customRowsInput = document.getElementById('customRows');
const applyCustomRowsBtn = document.getElementById('applyCustomRows');
const gapRange = document.getElementById('gapRange');
const gapValue = document.getElementById('gapValue');

let currentStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridTemplateRows: '',
	gridAutoRows: '',
	gap: '20px',
	alignItems: '',
	justifyItems: '',
	justifyContent: '',
	alignContent: '',
	gridAutoFlow: 'row'
};

// Layout configurations
const layouts = {
	// Columns
	'columns-3': { gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '', gridAutoRows: '' },
	'columns-4': { gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '', gridAutoRows: '' },
	'columns-auto': { gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gridTemplateRows: '', gridAutoRows: '' },
	'columns-varied': { gridTemplateColumns: '1fr 2fr 1fr', gridTemplateRows: '', gridAutoRows: '' },

	// Rows
	'rows-auto': { gridTemplateRows: '', gridAutoRows: 'auto' },
	'rows-fixed': { gridTemplateRows: 'repeat(3, 150px)', gridAutoRows: '' },
	'rows-minmax': { gridTemplateRows: '', gridAutoRows: 'minmax(100px, auto)' },

	// Gap
	'gap-small': { gap: '10px' },
	'gap-medium': { gap: '20px' },
	'gap-large': { gap: '40px' },
	'gap-none': { gap: '0' },

	// Alignment
	'align-start': { alignItems: 'start' },
	'align-center': { alignItems: 'center' },
	'align-end': { alignItems: 'end' },
	'align-stretch': { alignItems: 'stretch' },

	// Justify Content
	'justify-start': { justifyContent: 'start' },
	'justify-center': { justifyContent: 'center' },
	'justify-end': { justifyContent: 'end' },
	'justify-space-between': { justifyContent: 'space-between' },

	// Auto Flow
	'flow-row': { gridAutoFlow: 'row' },
	'flow-column': { gridAutoFlow: 'column' },
	'flow-dense': { gridAutoFlow: 'dense' },

	// Special
	'masonry': {
		gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
		gridAutoRows: '80px',
		gap: '15px'
	},
	'holy-grail': {
		gridTemplateColumns: '200px 1fr 200px',
		gridTemplateRows: 'auto 1fr auto',
		gap: '20px'
	},
	'dashboard': {
		gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
		gridAutoRows: 'minmax(150px, auto)',
		gap: '20px'
	},
	'reset': {
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridTemplateRows: '',
		gridAutoRows: '',
		gap: '20px',
		alignItems: '',
		justifyItems: '',
		justifyContent: '',
		alignContent: '',
		gridAutoFlow: 'row'
	}
};

function applyLayout(layoutName) {
	const layout = layouts[layoutName];
	if (layout) {
		Object.assign(currentStyles, layout);
		updateGrid();
	}
}

function updateGrid() {
	// Apply styles to grid container
	gridContainer.style.display = 'grid';
	gridContainer.style.gridTemplateColumns = currentStyles.gridTemplateColumns;
	gridContainer.style.gridTemplateRows = currentStyles.gridTemplateRows;
	gridContainer.style.gridAutoRows = currentStyles.gridAutoRows;
	gridContainer.style.gap = currentStyles.gap;
	gridContainer.style.alignItems = currentStyles.alignItems;
	gridContainer.style.justifyItems = currentStyles.justifyItems;
	gridContainer.style.justifyContent = currentStyles.justifyContent;
	gridContainer.style.alignContent = currentStyles.alignContent;
	gridContainer.style.gridAutoFlow = currentStyles.gridAutoFlow;

	// Update code display
	updateCodeDisplay();

	// Add animation class
	gridContainer.style.animation = 'none';
	setTimeout(() => {
		gridContainer.style.animation = '';
	}, 10);
}

function updateCodeDisplay() {
	let code = `<div class="code-line"><span class="code-property">display:</span> <span class="code-value">grid</span>;</div>`;

	if (currentStyles.gridTemplateColumns) {
		code += `<div class="code-line"><span class="code-property">grid-template-columns:</span> <span class="code-value">${currentStyles.gridTemplateColumns}</span>;</div>`;
	}
	if (currentStyles.gridTemplateRows) {
		code += `<div class="code-line"><span class="code-property">grid-template-rows:</span> <span class="code-value">${currentStyles.gridTemplateRows}</span>;</div>`;
	}
	if (currentStyles.gridAutoRows) {
		code += `<div class="code-line"><span class="code-property">grid-auto-rows:</span> <span class="code-value">${currentStyles.gridAutoRows}</span>;</div>`;
	}
	if (currentStyles.gap) {
		code += `<div class="code-line"><span class="code-property">gap:</span> <span class="code-value">${currentStyles.gap}</span>;</div>`;
	}
	if (currentStyles.alignItems) {
		code += `<div class="code-line"><span class="code-property">align-items:</span> <span class="code-value">${currentStyles.alignItems}</span>;</div>`;
	}
	if (currentStyles.justifyItems) {
		code += `<div class="code-line"><span class="code-property">justify-items:</span> <span class="code-value">${currentStyles.justifyItems}</span>;</div>`;
	}
	if (currentStyles.justifyContent) {
		code += `<div class="code-line"><span class="code-property">justify-content:</span> <span class="code-value">${currentStyles.justifyContent}</span>;</div>`;
	}
	if (currentStyles.alignContent) {
		code += `<div class="code-line"><span class="code-property">align-content:</span> <span class="code-value">${currentStyles.alignContent}</span>;</div>`;
	}
	if (currentStyles.gridAutoFlow && currentStyles.gridAutoFlow !== 'row') {
		code += `<div class="code-line"><span class="code-property">grid-auto-flow:</span> <span class="code-value">${currentStyles.gridAutoFlow}</span>;</div>`;
	}

	codeDisplay.innerHTML = code;
}

function updateGridItems(count) {
	count = Math.max(1, Math.min(20, count)); // Clamp between 1 and 20
	
	const currentCount = gridContainer.children.length;
	
	if (count > currentCount) {
		// Add items
		for (let i = currentCount; i < count; i++) {
			const item = document.createElement('div');
			item.className = 'grid-item';
			item.textContent = i + 1;
			gridContainer.appendChild(item);
		}
	} else if (count < currentCount) {
		// Remove items
		while (gridContainer.children.length > count) {
			gridContainer.removeChild(gridContainer.lastChild);
		}
	}
}

// Button click handlers
buttons.forEach(button => {
	button.addEventListener('click', function () {
		const layoutName = this.getAttribute('data-layout');

		// Remove active class from buttons in the same section
		const section = this.closest('.control-section');
		if (section) {
			section.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
			// Add active class to clicked button
			this.classList.add('active');
		}

		// Apply layout
		applyLayout(layoutName);

		// Special case for masonry - vary heights
		if (layoutName === 'masonry') {
			const items = gridContainer.querySelectorAll('.grid-item');
			items.forEach((item, index) => {
				const spans = [1, 2, 1, 2, 1, 3, 1, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1];
				item.style.gridRowEnd = `span ${spans[index] || 1}`;
			});
		} else {
			// Reset row spans
			const items = gridContainer.querySelectorAll('.grid-item');
			items.forEach(item => {
				item.style.gridRowEnd = '';
			});
		}
	});
});

// Input handlers
updateItemsBtn.addEventListener('click', () => {
	const count = parseInt(itemCountInput.value);
	if (!isNaN(count)) {
		updateGridItems(count);
	}
});

itemCountInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		updateItemsBtn.click();
	}
});

applyCustomColumnsBtn.addEventListener('click', () => {
	const value = customColumnsInput.value.trim();
	if (value) {
		currentStyles.gridTemplateColumns = value;
		updateGrid();
	}
});

customColumnsInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		applyCustomColumnsBtn.click();
	}
});

applyCustomRowsBtn.addEventListener('click', () => {
	const value = customRowsInput.value.trim();
	if (value) {
		currentStyles.gridTemplateRows = value;
		currentStyles.gridAutoRows = '';
		updateGrid();
	}
});

customRowsInput.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		applyCustomRowsBtn.click();
	}
});

gapRange.addEventListener('input', (e) => {
	const value = e.target.value;
	gapValue.textContent = `${value}px`;
	currentStyles.gap = `${value}px`;
	updateGrid();
});

// Initialize
updateCodeDisplay();
