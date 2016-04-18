export default function generateData() {
    return {
        channels: [{
            id: 1,
            name: 'libraries',
        }, {
            id: 2,
            name: 'news',
        }, {
            id: 3,
            name: 'apps',
        }],
        messages: [{
            id: 1,
            text: 'this is the first message in the cycle/core channel',
            channelId: 1,
        }, {
            id: 2,
            text: 'this is the first message in the cycle/dom channel',
            channelId: 2,
        }],
    };
}
