import axios from axios
async function getDaTa(userId){
    const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const result ={
        user,
        post
    }
    console.log(result)
}
export default getDaTa;