const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
    authCheckOnLoad() {
        return new Promise(res => {
            const JWT = localStorage.getItem('diRe');

            if (JWT) {
                res({authenticated: true});
            } else {
                res({authenticated: false});
            }
        });
    },
    authCheckWithCreds(values) {
        return sleep(500)
            .then(() => {
                if (values.password.length < 3) {
                    return {password: 'Too short'};
                } else {
                    localStorage.setItem('diRe', 'test');
                    this.options.JWT = 'test';

                    return {authenticated: true};
                }
            })
    },
    options: {}
}
