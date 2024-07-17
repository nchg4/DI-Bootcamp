// async function getUsers(){
//     try {
//         const response = await fetch(' https://jsonplaceholder.typicode.com/users');
//         if (!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         const users = await response.json();
//         return users;
//     } catch(error){
//         console.error('Error fetching users:', error);
//         return [];
//     }
// }

// getUsers().then(using => console.log(users));


export const getUsers = async(url)=> {
    try{
        const res =  await fetch(url);
        const data = await res.json();
        return data;
    }catch(e){
        
    }
}