document.getElementById("percentage").addEventListener("click", (() => {
    let a = document.getElementById("screen").value;
    if (a == "" || a[a.length - 1] == "(" || a[a.length - 1] == arr_opr[1]) {
        alert("Syntax Error! Check the argument for percentage please.");
    } else {
        document.getElementById("screen").value += "*0.01";
    };
}));

let arr1 = Array.from(document.querySelectorAll(".number"));
let arr_num = [];

for (let i = 0; i < arr1.length; i++) {
    arr_num[i] = arr1[i].innerHTML;
};

arr1.forEach((num_click) => {
    num_click.addEventListener("click", ((a) => {
        let b = a.target.innerHTML;
        document.getElementById("screen").value += b;
    }));
});

let arr2 = Array.from(document.querySelectorAll(".mathopr"));
let arr_opr = []; // Array of math operators themselves.

for (let i = 0; i < arr2.length; i++) {
    arr_opr[i] = arr2[i].innerHTML;
};

arr2.forEach((opr_click) => {
    opr_click.addEventListener("click", ((x) => {
        let y = x.target.innerHTML;
        let a = document.getElementById("screen").value;
        let b = a[a.length - 1];
        let c = arr_opr.includes(b);
        // To prevent duplicate or side-by-side operators and operators at the beginning of the expression.  
        if (a != 0 && !c) {
            document.getElementById("screen").value += y;
        };
    }));
});

document.getElementById("equals").addEventListener("click", (() => {
    let b = document.getElementById("screen").value;
    let c = arr_opr.some(((x) => {                 // 
        return x == b.slice(-1, b.length);
    }));
    console.log(c);
    if (c) {
        console.log(b.slice(-1, b.length));
        document.getElementById("result").innerHTML = eval(b.slice(0, -1));
        document.getElementById("screen").value = b.slice(0, -1);
        alert("Syntax Error! Expression will be truncated.");
    } else {
        document.getElementById("result").innerHTML = eval(b);
    };
}));

document.getElementById("clear").addEventListener("click", (() => {
    if (document.getElementById("screen").value != 0) {
        document.getElementById("screen").value = "";
        document.getElementById("result").innerHTML = 0;
    };
}));

document.getElementById("clearentry").addEventListener("click", (() => {
    let y = document.getElementById("screen").value;
    let indx_arr = [];
    arr_opr.forEach((x) => {
        if (y.includes(x)) {
            indx_arr.unshift(y.lastIndexOf(x));
        };
    });
    let indx_arr_srtd = (indx_arr.sort((a, b) => {
        return a - b;
    }));
    let ce_endpoint = indx_arr_srtd[indx_arr_srtd.length - 1] + 1;
    document.getElementById('screen').value = y.slice(0, ce_endpoint);
}));

document.getElementById("backspace").addEventListener("click", (() => {
    let a = document.getElementById("screen").value.slice(0, -1);
    document.getElementById("screen").value = a;
}));