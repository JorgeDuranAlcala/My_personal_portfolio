
const URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyDpqK7WuK92_Kr39ldM4_LQnhzaoClZofk";
//const clientId = "378799776378-0eq1vo94asf36199b73iumoto0i5bm8l.apps.googleusercontent.com"
const channelId = "UCvFVSafnvoowwymWYOrS3zg";

export const getDataFromYtbAPI = async (max, sortBy) => {

    try{
        const data = await fetch(`${URL}/search?channelId=${channelId}&maxResults=${max}&part=snippet&type=video&sort=${sortBy}&key=${API_KEY}`)
        .then(res => res.json())
        .then(response => response);
        return data.items;
        
    } catch(error) {
        console.log(error)
    }
}

export const getVideoFromYtb = async id => {
    try {

        const data = await fetch(`${URL}/videos?id=${id}&part=player&key=${API_KEY}`)
        .then( res => res.json())
        .then(response => response);
    
        return data.items[0].player;
        
    } catch (error) {
        console.log(error)
    }
}