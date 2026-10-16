export const eventsCreatedBy = (email, accessToken) =>{
    return fetch(`http://localhost:3000/my-events?email=${email}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }).then((res) => res.json());
}