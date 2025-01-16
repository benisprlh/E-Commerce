import { createClient } from 'redis';

const client = createClient({
    username: '', // use your Redis user. More info https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/
    password: process.env.REDIS_PASS, // use your password here
    // url: 'redis-16826.beni-redis-cache-test.com:16826',
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        tls: false,
    }
});

// const client = createClient({
//     username: 'default',
//     password: 'nXKEIxZLa4YO1cHWwfc5bnf44wfoUR0S',
//     socket: {
//         host: 'redis-10650.c252.ap-southeast-1-1.ec2.redns.redis-cloud.com',
//         port: 10650
//     }
// });
export async function connectRedis() {
    if(client.isOpen) return client
    await client.connect();
    
    return client;
}

export async function disconnectRedis() {
    await client.disconnect()
    return client
}