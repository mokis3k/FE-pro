firstNum = +prompt(`Enter first number:`);
secondNum = +prompt(`Enter second number:`);
firstNum = +(firstNum.toFixed(2));
secondNum = +(secondNum.toFixed(2));

randomValue = Math.random() * (secondNum - firstNum) + firstNum;
randomValue = +(randomValue.toFixed(2));
alert(`Random number is: ${randomValue}`);

thirdNum = +prompt(`Enter third number:`);
thirdNum = +(thirdNum.toFixed(2));

sum = (randomValue + thirdNum).toFixed(2);
subst = (randomValue - thirdNum).toFixed(2);
mult = (randomValue * thirdNum).toFixed(2);
divis = (randomValue / thirdNum).toFixed(2);

document.write(`
    <table>
        <tr>
            <th>Operation</th>
            <th>Expretion</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>Sum</td>
            <td>+</td>
            <td>${sum}</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>-</td>
            <td>${subst}</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>*</td>
            <td>${mult}</td>
        </tr>
        <tr>
            <td>Division</td>
            <td>/</td>
            <td>${divis}</td>
        </tr>
    </table>
`)