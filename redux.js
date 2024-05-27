
$(function () {
    const arr_opr = ["/", "*", "-", "+"];

    $("button").click(function () {
        let call = $(this).html();
        let lastChar = $("#screen").val().slice(-1, $("#screen").val().length)
        if (call == "=") {
            if (arr_opr.includes(lastChar)) {
                alert("Syntax Error! Expression will be truncated.")
                $("#result").val(eval($("#screen").val().slice(0, -1)).toPrecision(4))
                $("#screen").val(function (k, origVal) {
                    return origVal.slice(0, -1)
                })
            } else {
                $("#result").val(eval($("#screen").val()).toPrecision(4))
            }
        } else if (call == "DEL") {
            $("#screen").val(function (k, origVal) {
                return origVal.slice(0, -1)
            })
        } else if (call == "C") {
            $("#screen, #result").val("")
        } else if (call == "CE") {
            $("#screen").val(function (k, origVal) {
                let arr1 = []
                arr_opr.forEach((y) => {
                    if ($("#screen").val().includes(y)) {
                        arr1.unshift($("#screen").val().lastIndexOf(y))
                    }
                })
                arr2 = arr1.sort((a, b) => {
                    return a - b
                })
                x = arr2[arr2.length - 1] + 1
                return origVal.slice(0, x)
            })
        } else if (call == "%") {
            if ($("#screen").val() == "" || lastChar == "*") {
                alert("Syntax Error!")
            }
            else {
                $("#screen").val(function (k, origVal) {
                    return origVal + "*0.01"
                })
            }
        } else if (arr_opr.includes(call)) {
            if (arr_opr.includes(lastChar)) {
                $("#screen").val(function (k, origVal) {
                    return origVal.slice(0, -1) + call
                })
            }
            else {
                $("#screen").val(function (k, origVal) {
                    return origVal + call
                })
            }
        }
        else {
            $("#screen").val(function (k, origVal) {
                return origVal + call
            })
        }
    })
})