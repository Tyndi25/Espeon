import fetch from 'node-fetch';

const BASE_URL = 'http://localhost/';

const fetchById = (ruleId) =>
        fetch(`${BASE_URL}/lurch/${ruleId}/`)
          .then(res => res.json())


export { fetchById };
export default { fetchById };