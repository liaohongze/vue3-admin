/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        0: '0',
        5: '5px',
        ...evenNumber(),
        960: '960px',
        1000: '1000px',
        1100: '1100px',

        // 25%、33.3%, 50%之类的，tailwind已提供，查看文档
        '4p': '4%',
        '10p': '10%',
        '12p': '12%',
        '13p': '13%',
        '15p': '15%',
        '16p': '16%',
        '18p': '18%',
        '23p': '23%',
        '27p': '27%',
        '30p': '30%',
        '31p': '31%',
        '32p': '32%',
        '35p': '35%',
        '36p': '36%',
        '45p': '45%',
        '48p': '48%',
        '65p': '65%',
        '68p': '68%',
        '70p': '70%',
        '73p': '73%',
        '78p': '78%',
        '85p': '85%',
        '90p': '90%',
        '98p': '98%'
      },
      maxWidth: {
        120: '120px',
        150: '150px',
        270: '270px',
        340: '340px',
        400: '400px',
        600: '600px',
        700: '700px',
        720: '720px',
        900: '900px',
        1000: '1000px',
        1200: '1200px',
        1230: '1230px'
      },
      minWidth: {
        auto: 'auto',
        60: '60px',
        120: '120px',
        170: '170px',
        200: '200px',
        300: '300px',
        320: '320px',
        610: '610px',
        700: '700px',
        800: '800px',
        1000: '1000px',
        1100: '1100px'
      },

      height: {
        0: '0',
        ...evenNumber()
      },
      maxHeight: {
        60: '60px',
        67: '67px',
        100: '100px',
        110: '110px',
        150: '150px',
        170: '170px',
        240: '240px',
        250: '250px',
        284: '284px',
        310: '310px',
        400: '400px',
        500: '500px',
        530: '530px',
        600: '600px',
        '90p': '90%'
      },
      minHeight: {
        50: '50px',
        95: '95px',
        110: '110px',
        130: '130px',
        200: '200px',
        400: '400px',
        500: '500px',
        660: '660px',
        calc84: 'calc(100vh - 84px)'
      },

      padding: {
        ...number(0, 80),
        100: '100px',
        120: '120px',
        200: '200px'
      },
      margin: {
        ...number(0, 80),
        100: '100px',
        120: '120px',
        122: '122px',
        130: '130px',
        138: '138px',
        150: '150px',
        180: '180px',
        200: '200px',
        240: '240px',
        260: '260px'
      },

      fontSize: {
        ...evenNumber(10, 50),
        90: '90px',
        92: '92px',
        100: '100px'
      },

      lineHeight: {
        ...evenNumber(10, 60),
        70: '70px',
        80: '80px',
        90: '90px',
        100: '100px',
        110: '110px',
        120: '120px',
        140: '140px',
        150: '150px'
      },

      borderRadius: {
        ...number(2, 30)
      }
    }
  },
  plugins: []
}

// 偶数
function evenNumber(start = 2, end = 900) {
  const numbers = {}

  for (let i = start; i <= end; i += 2) {
    numbers[i] = `${i}px`
  }

  return numbers
}

function number(start = 2, end = 900) {
  const numbers = {}

  for (let i = start; i <= end; i++) {
    numbers[i] = `${i}px`
  }

  return numbers
}
