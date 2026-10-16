export const eventsCreatedBy = (email, accessToken) =>{
    return fetch(`http://localhost:3000/events?email=${email}`, {
        headers:{
            authorization: `Bearer ${accessToken}`,
        }
    })
    .then(res => res.json());
}