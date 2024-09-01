var PI = Math.PI;
var area = function (r) {
    return PI * r * r;
};
var circumference = function (r) { return 2 * PI * r; };
function setTimeout_random(callback, minMilliseconds=0, maxMilliseconds=8 * 60 * 60 * 1000) {
    const randomDelay = Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) + minMilliseconds;
    // 使用 setTimeout 在随机时间间隔后执行回调函数
    setTimeout(callback, randomDelay);
}


export { area, circumference ,setTimeout_random};
