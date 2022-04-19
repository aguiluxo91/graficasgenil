 import http from './base-api-service';

const sendMail = (data) => http.post('/mailer', data)

const service = {
    sendMail
}

export default service;