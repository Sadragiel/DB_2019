export default {
    get: (url = '') => 
        fetch(url).then(res => res.json() ),
    post: (url = '', data = {}) => 
        fetch(url, {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(data), 
        })
        .then(response => response.json()),
    put: (url = '', data = {}) => 
        fetch(url, {
            method: 'PUT',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
            body: JSON.stringify(data), 
        })
        .then(response => response.json()),
    delete: (url = '') => 
        fetch(url, {
            method: 'DELETE',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', 
            referrer: 'no-referrer', 
        })
      
}