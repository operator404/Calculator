$(() => {
    const arrayOperators = ["/", "*", "-", "+"];

    $("button").click(function () {
        const clickedChar = $(this).html();
        const lastChar = $("#screen").val().slice(-1);

        switch (clickedChar) {
            case "=":
                if (arrayOperators.includes(lastChar)) {
                    const result = eval($("#screen").val().slice(0, -1));
                    $("#result").val(result ? result.toPrecision(4) : '');
                    $("#screen").val((index, currentVal) => currentVal.slice(0, -1));
                    $("#result").val(() => {
                        const result = eval($("#screen").val());
                        $("#result").val(result ? result.toPrecision(4) : '');
                    })
                    $("#screen").val((index, currentVal) => {
                        return currentVal.slice(0, -1)
                    })
                } else {
                    $("#result").val(eval($("#screen").val()).toPrecision(4))
                }
                break;

            case "DEL":
                $("#screen").val(function (index, currentVal) {
                    return currentVal.slice(0, -1)
                })
                break;

            case "C":
                $("#screen, #result").val("")
                break;

            case "CE":
                $("#screen").val((index, currentVal) => {
                    const arrayIndexes = new Array();
                    arrayOperators.forEach((item) => {
                        currentVal.includes(item) &&
                            arrayIndexes.push(currentVal.lastIndexOf(item));
                    });
                    lastOperatorIndex = Math.max([...arrayIndexes]);
                    return currentVal.slice(0, lastOperatorIndex);
                })
                break;

            case "%":
                if ($("#screen").val() !== "" && lastChar !== "%" && arrayOperators.includes(lastChar) === false) {
                    $("#screen").val((index, currentVal) => {
                        return currentVal + "*0.01"
                    })
                }
                break;

            default:
                if (arrayOperators.includes(lastChar)) {
                    $("#screen").val((index, currentVal) => {
                        return currentVal.slice(0, -1) + clickedChar;
                    })
                }
                else {
                    $("#screen").val((index, currentVal) => {
                        return currentVal + clickedChar;
                    })
                }
                break;
        }
    });
})