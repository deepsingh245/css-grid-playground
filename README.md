# 🎮 CSS Grid Playground

An **interactive, visual CSS Grid layout explorer** with a modern, animated interface. Learn and experiment with CSS Grid properties in real-time with an intuitive control panel.

![CSS Grid Playground](https://img.shields.io/badge/CSS%20Grid-Interactive%20Demo-6366F1?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **Interactive Grid Playground** - Modify CSS Grid properties and see changes in real-time
- **Control Panel** - Adjust grid settings with an intuitive interface:
  - Customize grid columns and rows
  - Control item count
  - Adjust gap spacing
  - Set alignment and justification properties
- **Live Code Display** - View the generated CSS code as you make changes
- **Animated Background** - Beautiful canvas-based particle animation with animated grid lines
- **Responsive Design** - Works seamlessly on different screen sizes
- **Modern UI** - Glassmorphic design with gradient text and neon glows
- **Smooth Animations** - Fade-in effects and smooth transitions

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/deepsingh245/css-grid-playground.git

# Navigate to the project directory
cd grid-playground

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm preview
```

---

## 📁 Project Structure

```
grid-playground/
├── index.html              # Main HTML file
├── package.json            # Project dependencies
├── src/
│   ├── main.js            # Core JavaScript logic and interactivity
│   └── style.css          # Styling and animations
└── public/                 # Static assets
```

---

## 🎯 How to Use

1. **Adjust Grid Items** - Use the "Update Items" input to change the number of grid items
2. **Set Columns** - Enter a custom column layout (e.g., `repeat(4, 1fr)`, `1fr 2fr 1fr`)
3. **Set Rows** - Enter a custom row layout or auto-sizing options
4. **Control Gap** - Use the slider to adjust spacing between grid items
5. **Alignment** - Apply different `align-items` and `justify-items` values
6. **Justification** - Experiment with `justify-content` options
7. **View Code** - See the live CSS code updates in the code display panel

---

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid layouts, backdrop filters, gradients, animations
- **JavaScript (ES6+)** - Interactive controls and canvas animations
- **Vite** - Lightning-fast build tool and dev server
- **Google Fonts** - Outfit and Space Mono typefaces

---

## 🎨 Design Features

- **Glassmorphic UI** - Modern frosted glass effect with backdrop blur
- **Gradient Text** - Eye-catching gradient headers
- **Neon Glows** - Indigo and pink neon effects
- **Particle Animation** - Animated background with moving particles
- **Dynamic Grid Lines** - Animated grid background
- **Smooth Transitions** - Enhanced user experience with CSS transitions

---

## 📝 Code Examples

### Basic Grid Setup
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}
```

### Custom Layout
```javascript
// Set a 2x3 layout
customColumns = 'repeat(2, 1fr)';
customRows = 'repeat(3, 1fr)';
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

Created by [deepsingh245](https://github.com/deepsingh245)

---

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy Grid Exploring! 🎉**
