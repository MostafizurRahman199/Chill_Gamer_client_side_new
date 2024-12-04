const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 20px rgba(169, 29, 58, 0.8)', // Custom shadow color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
});

