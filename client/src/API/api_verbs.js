const API_URL = 'http://localhost:1337'


export async function listIrregularVerbs(){
    const response = await fetch(`${API_URL}/api/verb`);
    return response.json();
}