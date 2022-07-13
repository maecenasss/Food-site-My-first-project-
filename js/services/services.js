
  const postData = async (url, data) => {
    const res = await fetch (url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  };
  
    //get resourses from server 
    async function getResourse (url) {
        let res = await fetch(url);
        // if there is error
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();   
    };
    
export {postData};
export {getResourse};