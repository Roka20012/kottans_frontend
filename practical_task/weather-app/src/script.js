fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=0b46d6a7c3a3280433f1971b4b5eee4a")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch( alert );

//     `Open Weather Map
// wi-owm-200: thunderstorm
// wi-owm-201: thunderstorm
// wi-owm-202: thunderstorm
// wi-owm-210: lightning
// wi-owm-211: lightning
// wi-owm-212: lightning
// wi-owm-221: lightning
// wi-owm-230: thunderstorm
// wi-owm-231: thunderstorm
// wi-owm-232: thunderstorm
// wi-owm-300: sprinkle
// wi-owm-301: sprinkle
// wi-owm-302: rain
// wi-owm-310: rain-mix
// wi-owm-311: rain
// wi-owm-312: rain
// wi-owm-313: showers
// wi-owm-314: rain
// wi-owm-321: sprinkle
// wi-owm-500: sprinkle
// wi-owm-501: rain
// wi-owm-502: rain
// wi-owm-503: rain
// wi-owm-504: rain
// wi-owm-511: rain-mix
// wi-owm-520: showers
// wi-owm-521: showers
// wi-owm-522: showers
// wi-owm-531: storm-showers
// wi-owm-600: snow
// wi-owm-601: snow
// wi-owm-602: sleet
// wi-owm-611: rain-mix
// wi-owm-612: rain-mix
// wi-owm-615: rain-mix
// wi-owm-616: rain-mix
// wi-owm-620: rain-mix
// wi-owm-621: snow
// wi-owm-622: snow
// wi-owm-701: showers
// wi-owm-711: smoke
// wi-owm-721: day-haze
// wi-owm-731: dust
// wi-owm-741: fog
// wi-owm-761: dust
// wi-owm-762: dust
// wi-owm-771: cloudy-gusts
// wi-owm-781: tornado
// wi-owm-800: day-sunny
// wi-owm-801: cloudy-gusts
// wi-owm-802: cloudy-gusts
// wi-owm-803: cloudy-gusts
// wi-owm-804: cloudy
// wi-owm-900: tornado
// wi-owm-901: storm-showers
// wi-owm-902: hurricane
// wi-owm-903: snowflake-cold
// wi-owm-904: hot
// wi-owm-905: windy
// wi-owm-906: hail
// wi-owm-957: strong-wind`



