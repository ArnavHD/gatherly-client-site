// import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useEventApi = () => {
    const axiosSecure = useAxiosSecure();

    const eventsCreatedBy = email =>{
        return axiosSecure
          .get(`/events?email=${email}`)
          .then((res) => res.data);
    };


    return {
        eventsCreatedBy,
    };
};

export default useEventApi;