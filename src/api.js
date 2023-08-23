const baseURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}&`;

//getting the date
const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
}

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month<10)
        return `0${month}`;
    else
        return month;
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day<10)
        return `0${day}`;
    else 
        return day; 
}

const currentYear = getCurrentYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//this is the way the date is shown in the api docs
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYearDate = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYearDate = `${currentYear+1}-${currentMonth}-${currentDay}`;

//constructing api as per the docs

//games endpoints
export const popularGamesURL = () => `${baseURL}dates=${lastYearDate},${currentDate}&ordering=-rating&page_size=12`;
export const newGamesURL = () => `${baseURL}dates=${lastYearDate},${currentDate}&ordering=-released-rating&page_size=12`;
export const upcomingGamesURL = () => `${baseURL}dates=${currentDate},${nextYearDate}&ordering=-rating-released&page_size=12`;


//other urls
export const gameDetailsURL = (game_id) => `https://api.rawg.io/api/games/${game_id}?key=${process.env.REACT_APP_RAWG_API}`;
export const gameScreenShotsURL = (game_id) => `https://api.rawg.io/api/games/${game_id}/screenshots?key=${process.env.REACT_APP_RAWG_API}`;
export const searchedGameURL = (game_name) =>  `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API}&search=${game_name}&search_exact=true&search_precise=true&ordering=-rating&page_size=12` ;
