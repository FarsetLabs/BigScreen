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
        url: "https://calendar.google.com/calendar/ical/farsetlabs.org.uk_srmqnkn373auq51u00s2nijrq8%40group.calendar.google.com/public/basic.ics"
    },
    news: {
        feed: 'http://blog.farsetlabs.org.uk/feed/'
    }
}
