import serverUrl from './config';
import Util from '../util';
import config from '../config';

const baseUrl = function() {
    return {
        mock: 'https://mock.souche-inc.com/mock/5912c4d5f220de7c6bd279d9/leasesite1',
        development: serverUrl.servers[0].host,
        prepub: 'http://lease.prepub.souche.com/',
        production: 'https://lease.souche.com/'
    }[config.env || 'mock'];
};

export default Util.finance(baseUrl);
