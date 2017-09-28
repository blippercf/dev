/*
    solution #1

function printbin(num,n) {
    let a="";

    while (n-->0) {
        a += (num&1)?"#":" "
        num >>=1;
    }
    let ret = a.split("").reverse().join("")
    // console.log( ret )
    return ret
}

function compute(arr1,arr2,n) {
    let ret = [];
    for (var i=0;i<n;i++) {
        ret.push(printbin(arr1[i]|arr2[i],n))
    }
    return ret;
}

var ar1 = [9, 20, 28, 18, 11]
var ar2 = [30, 1, 21, 17, 28]

var result = compute(ar1,ar2,5)

console.log(result)

ar1 = [46, 33, 33 ,22, 31, 50];
ar2 = [27 ,56, 19, 14, 14, 10];

result = compute(ar1,ar2,6)

console.log(result)
*/

/*
    solution #2

const ref = ["1S2D*3T","1D2S#10S","1D2S0T","1S*2T*3S","1D#2S*3S","1T2D3D#","1D2S3T*"];

function parse(str) {
    const rex = /([0-9]+[S,D,T][*#]?)/g;
    return str.match(rex)
}

function parse2(str) {
    const rex = /([0-9]+)([S,D,T])([*#]?)/
    return str.match(rex)
}

function compute(str) {
    let ret=[]
    let arr = parse(str)
    for (var i=0;i<arr.length;i++) {
        let items = parse2(arr[i]);
        // console.log(items)
        var num = parseInt(items[1]);
        switch(items[2]) {
            case 'D': num = num*num; break;
            case 'T': num = num*num*num; break;
        }
        switch(items[3]) {
            case '*': num*=2; if (ret.length>0) ret[ret.length-1] *=2; break;
            case '#': num *= -1; break; 
        }
        ret.push(num)
    }
    return ret;
}

function result(arr) {
    var ret=0;
    for (var i=0;i<arr.length;i++)
        ret += arr[i];
    console.log(arr.join(',')+' = '+ret)
}

for (var i=0;i<ref.length;i++)
    result(compute(ref[i]))
*/

/*
    solution #3
var ref = [
    {   
        num: 3,
        val: ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
    },
    {   
        num: 3,
        val: ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"],
    },
    {   
        num: 2,
        val:["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"],
       },
    {   
        num: 5,
        val: ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"],
    },
    {   
        num: 2,
        val:["Jeju", "Pangyo", "NewYork", "newyork"],
    },
    {   
        num: 0,
        val:["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
    }
]    

var cache = [];
var MAXCACHE = 3;

function add(str) {
    str = str.toUpperCase();
    var idx = cache.indexOf(str)
    var t = 5
    if (idx<0) {
        // cache miss
        cache.push(str);
        if (cache.length>MAXCACHE)
            cache.shift();
    } else {
        // cache hit
        t = 1;
        cache.push(cache.shift())
    }
    return t
}

for (var j=0;j<ref.length;j++) {
    var tot=0;
    MAXCACHE = ref[j].num;
    item = ref[j].val
    for (var i=0;i<item.length;i++) {
        tot+=add(item[i])
    }
    console.log('total='+tot)
    cache=[]
}

*/

/*
    solution #4  -- continue

var ref =[
    {
        n:1,	t:1,	m:5,	
        val:["08:00", "08:01", "08:02", "08:03"]
    },
    {
        n:2,	t:10,	m:2,	
        val:["09:10", "09:09", "08:00"]
    },
    {
        n:2,	t:1,	m:2,
        val:["09:00", "09:00", "09:00", "09:00"]
    },
    {
        n:1,	t:1,	m:5,
        val:["00:01", "00:01", "00:01", "00:01", "00:01"]
    },
    {
        n:1,	t:1,	m:1,	
        val:["23:59"]
    },
    {
        n:10,	t:60,	m:45,
        val:["23:59","23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]
    }
]

const TIMEMIN = { h:9, m:0 }
const TIMEMAX = { h:18, m:0 }

function str2t(str) {
    const rex = /([0-9]+):([0-9]+)/
    let arr = str.match(rex)   
    return { h: parseInt(arr[1]), m: parseInt(arr[2]) }; 
}

function t2str(t) {
    return ("00"+t.h.toString()).slice(-2)+':'+("00"+t.m.toString()).slice(-2)
}

function tshift(t,min) {
    t.m += min;
    if (t.m>59) { t.h++; t.m-=60 }
    if (t.m<0) { t.h--; t.m+=60 }
    if (t.h>23) { t.h-=24 }
    if (t.h<0) { t.h+=24 }
    return t;
}

function tcomp(t1,t2) {
    if (t1.h>t2.h) return 1;
    else if (t1.h==t2.h) {
        if (t1.m>t2.m) return 1;
        else if (t1.m==t2.m) return 0;
        else return -1;
    } else return -1;
}

function getDuration(arr) {
    var min={h:0,m:0}
    var max={h:0,m:0}
    
    for (var i=0;i<arr.length;i++) {
        var t = str2t(arr[i])
        if (tcomp(t,min)<0) min = t
        if (tcomp(t,max)>0) max = t
    }
    if (tcomp(min,TIMEMIN)<0) min = TIMEMIN
    if (tcomp(max,TIMEMAX)>0) max = TIMEMAX
    return { min:min, max:max }
}

for (var i=0;i<ref.length;i++) {
    console.log(getDuration(ref[i].val))
}
// console.log(t2str(tshift(str2t("23:59"),5)))

*/

/*
    solution #5

const ref=[
    ["FRANCE","french"],
    ["handshake","shake hands"],
    ["aa1+aa2","AAAA12"],
    ["E=M*C^2","e=m*c^2"]
]

function getArray(str) {
    let ret=[];
    for (var i=0;i<str.length-1;i++) {
        let tmp = str.substr(i,2);
         if (tmp.search(/[^A-Za-z]/) == -1)
            ret.push(tmp.toUpperCase())
    }
    return ret;
}

function union(a, b) {
    var tmp={}, res=[];
    for(var i=0;i<a.length;i++) if (tmp[a[i]]) tmp[a[i]].a++; else tmp[a[i]] = { a:1,b:0 }
    for(var i=0;i<b.length;i++) if (tmp[b[i]]) tmp[b[i]].b++; else tmp[b[i]] = { a:0,b:1 };
    for(var k in tmp) {
        const v = tmp[k]
        let count=(v.a>v.b)?v.a:v.b;
        for (t=0;t<count;t++)
            res.push(k);
    }
    return res;
}

function intersect(a, b) {
    var tmp={}, res=[];
    for(var i=0;i<a.length;i++) if (tmp[a[i]]) tmp[a[i]].a++; else tmp[a[i]] = { a:1,b:0 }
    for(var i=0;i<b.length;i++) if (tmp[b[i]]) tmp[b[i]].b++; else tmp[b[i]] = { a:0,b:1 };
    for(var k in tmp) {
        const v = tmp[k];
        let count=(v.a>v.b)?v.b:v.a;
        if (v.a>0 && v.b>0) {
            for (t=0;t<count;t++)
                res.push(k);
        }
    }
    return res;
}

function getCount(str1,str2) {
    var u = union(getArray(str1),getArray(str2));
    var i = intersect(getArray(str1),getArray(str2));
    // console.log(u)
    // console.log(i)
    return {
        u: u.length,
        i: i.length
    }
}

function compute(v) {
    var ret=0;
    if (v.u==0) ret=1;
    else
      ret = v.i/v.u;
    return parseInt(ret*65536)
}

for (var i=0;i<ref.length;i++) {
    let val = getCount(ref[i][0],ref[i][1])
    console.log('"'+ref[i][0]+'","'+ref[i][1]+'" : '+compute(val))
}
// console.log(intersect(getArray("FRANCE"),getArray("french")))
*/

