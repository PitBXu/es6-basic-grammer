console.log('模块1加载');
export const a = 12;
export let b = 5;
export default 190;//只能有一个default的值

let d = 10;
let e = 11;
let f = 12;

export{
    d as ddd,//起别名
    e as eee,
    f as fff
}