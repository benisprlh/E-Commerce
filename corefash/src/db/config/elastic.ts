import { Client } from '@elastic/elasticsearch'
export const clientEs = new Client({
  node: 'https://10.100.34.131:9243',
      auth: {
        username: 'admin',
        password: 'P@ssw0rd'
      },
      tls: {
        rejectUnauthorized: false
      }
})
