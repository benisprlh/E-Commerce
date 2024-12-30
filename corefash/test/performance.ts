const axios = require('axios');

async function testLoad(url: string, concurrentUsers: number) {
    const requests = Array.from({ length: concurrentUsers }, () =>
        axios.get(url)
    );

    console.time(`Testing ${url}`);
    await Promise.all(requests);
    console.timeEnd(`Testing ${url}`);
}

async function runTest() {
    const concurrentUsers = 100;
    await testLoad('http://localhost:3000/mongo', concurrentUsers);
    await testLoad('http://localhost:3000/redis', concurrentUsers);
}

runTest();
