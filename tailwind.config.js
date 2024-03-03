/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        text: "#1e1c1a",
        gray: {
          "100": "#fffdf9",
          "200": "rgba(255, 255, 255, 0.7)",
          "300": "rgba(255, 253, 249, 0.7)",
          "400": "rgba(255, 253, 249, 0.3)",
          "500": "rgba(255, 253, 249, 0.6)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        "p-text": "#504c48",
        "bg-color": "#fff0e3",
        "primary-color": "#d99655",
        dimgray: "rgba(80, 76, 72, 0.7)",
        whitesmoke: "#f6f6f8",
        saddlebrown: "#a66321",
        burlywood: "#edcc8b",
      },
      spacing: {},
      fontFamily: {
        "Poppins": "Poppins",
        "bebas": "'Bebas Neue'",
        "p-text-02": "'Plus Jakarta Sans'",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      lgi: "1.19rem",
      "37xl": "3.5rem",
      "15xl": "2.13rem",
      "26xl": "2.81rem",
      xl: "1.25rem",
      base: "1rem",
      "11xl": "1.88rem",
      "8xl": "1.69rem",
      "3xl": "1.38rem",
      "27xl": "2.88rem",
      "9xl": "1.75rem",
      "18xl": "2.31rem",
      "51xl": "4.38rem",
      mini: "0.94rem",
      inherit: "inherit",
    },
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
    // screens: {
    //   mq1500: {
    //     raw: "screen and (max-width: 1500px)",
    //   },
    //   lg: {
    //     max: "1200px",
    //   },
    //   mq825: {
    //     raw: "screen and (max-width: 825px)",
    //   },
    //   mq450: {
    //     raw: "screen and (max-width: 450px)",
    //   },
    // },
  },
  corePlugins: {
    preflight: false,
  },
}

