

const key = import.meta.env.VITE_API_KEY; 

export const address = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${key}`