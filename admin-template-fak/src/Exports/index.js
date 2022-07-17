const Exports = () => {
    const TOKEN = window.sessionStorage.getItem('HAI')

    const Hasil = {
        WS: `wss://a.com?api_key=${TOKEN}`,
        API_PRN: '',
        VERSION_CODE: '0.0.0',
        BASENAME: '/AdminTailwindFAK',
    }

    return Hasil
}

export default Exports