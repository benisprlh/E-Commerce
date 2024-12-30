import { createClient } from 'redis';

const client = createClient({
    username: '', // use your Redis user. More info https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/
    password: process.env.REDIS_PASS, // use your password here
    socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        tls: true,
        rejectUnauthorized: false
    }
});
export async function connectRedis() {
    if(client.isOpen) return client
    await client.connect();
    
    return client;
}

export async function disconnectRedis() {
    await client.disconnect()
    return client
}