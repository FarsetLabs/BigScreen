var config = {
    lang: 'en',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Belfast,United Kingdom',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'b5ca3e69f3053dcb5c8880e0915a2da0'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, Farset member!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Afternoon, Farset member!',
            'Welcome back!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10,
        url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
    },
    news: {
        feed: 'http://blog.farsetlabs.org.uk/feed/'
    }
}
