export const getTileIcons = (theme) => {
    return [
        {
            title: 'Address',
            source: theme === 'light' ? require('../static/images/light-addr.png'):require('../static/images/dark-addr.png') 
        },
        {
            title: 'Birthday',
            source: theme === 'light' ? require('../static/images/light-birthday.png'):require('../static/images/dark-birthday.png') 
        },
        {
            title: 'Search',
            source: theme === 'light' ? require('../static/images/light-search.png'):require('../static/images/dark-search.png') 
        },
        {
            title: 'Obituary',
            source: theme === 'light' ? require('../static/images/light-obi.png'):require('../static/images/dark-obi.png') 
        }
    ]
    
}
