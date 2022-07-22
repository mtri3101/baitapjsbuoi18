//Tạo mảng từ user nhập vào
var arr = [];
document.getElementById('addNumber').onclick = function(){
    var number = +document.getElementById('numberInput').value;
    arr.push(number)
    document.getElementById('Arr').innerHTML = arr;
}
// console.log(arr);


//Bài tập 1: Tổng các số dương trong mảng
document.getElementById('btn1').onclick = function(){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    document.getElementById('res1').innerHTML = 'Tổng các số dương :' + sum;
}

//Bài tập 2: Đếm có bao nhiêu số dương
document.getElementById('btn2').onclick = function(){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    document.getElementById('res2').innerHTML = "Có "+ count + " số dương"
}


//Bài tập 3: Tìm số nhỏ nhất trong mảng
document.getElementById('btn3').onclick = function(){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    document.getElementById('res3').innerHTML = min;
}

//Bài tập 4: Tìm số dương nhỏ nhất trong mảng
document.getElementById('btn4').onclick = function(){
    var arr2 =[];
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr2.push(arr[i]); //Tạo ra mảng mới chứa các giá trị dương
    }
}
    //Trường hợp không có giá trị dương
    if(arr2.length === 0){
        document.getElementById('res4').innerHTML = 'Không có giá trị dương trong mảng';
    } else{
        for (var j = 0; j < arr2.length; j++){
            var min = arr2[0];
            if (min > arr2[j]){
            min = arr2[j];
            }
        }
    document.getElementById('res4').innerHTML = 'Giá trị dương nhỏ nhất trong mảng là: ' + min;
    }
}



//Bài tập 5: Tìm số chẵn cuối cùng trong mảng
document.getElementById('btn5').onclick = function(){
    var arr2 = [];
    for (var i = arr.length; i >= 0 ; i--){
        if (arr[i] % 2 === 0){
            arr2.push(arr[i]);//Lấy giá trị đầu tiên của mảng ngược => giá trị cuối cùng
        }
    }
    console.log(arr2);
    if (arr2.length === 0){ //Trường hợp mảng không có giá trị chẵn
        document.getElementById('res5').innerHTML = 'Giá trị chẵn cuối cùng trong mảng là: -1';
    }else{
        document.getElementById('res5').innerHTML = 'Giá trị chẵn cuối cùng trong mảng là: '+ arr2[0];
    }
}


//Bài tập 6: Đổi chỗ 2 giá trị trong mảng
document.getElementById('btn6').onclick = function(){
    var index1 = +document.getElementById('input6a').value;
    var index2 = +document.getElementById('input6b').value;
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        temp = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = temp; 
    }
    document.getElementById('res6').innerHTML = 'Giá trị mới của mảng là: '+ arr;
}


//Bài tập 7: Sắp xếp mảng theo thứ tự tăng dần
document.getElementById('btn7').onclick = function(){
    for (var i = arr.length; i >= 0; i--){
        var isSwap = false;
        for (var j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwap = true;
            }
        } 
        document.getElementById('res7').innerHTML = arr;
    }
    if(isSwap === false){
        document.getElementById('res7').innerHTML = arr;
        return;
    }
}


//Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng
document.getElementById('btn8').onclick = function(){
    for (var i = 0; i < arr.length; i++){
        var check=true;
        if (arr[i] === 1){//Số 1 ko phải là số nguyên tố
            check = false;
        }
        if (arr[i] <= 0){
            check = false;
        }
        for (var j = 2; j <= Math.sqrt(arr[i]); j++){
            if (arr[i] % j === 0){
                check = false;
                break;     
            }
            
        }
        if(check === true){ //Chạy hết vòng lặp con xuất hiện số nguyên tố => in ra kết quả là số đầu tiên
            document.getElementById('res8').innerHTML = 'Số nguyên tố đầu tiên trong mảng là: '+ arr[i];
            break;
        }
    }
    if (check === false){
        document.getElementById('res8').innerHTML = 'Không có số nguyên tố trong mảng';
    }
}


//Bài tập 9: Đếm có bao nhiêu số nguyên
document.getElementById('btn9').onclick = function(){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (Number.isInteger(arr[i])){
            count ++;
        }
    }
    document.getElementById('res9').innerHTML = 'Có '+count+ ' số nguyên';
}


//Bài tập 10: So sánh số dương và số âm
document.getElementById('btn10').onclick = function(){
    var positiveNumberCount = 0;
    var negativeNumberCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            positiveNumberCount++;
        }
        if (arr[i] < 0){
            negativeNumberCount++;
        }
    }
    if (positiveNumberCount > negativeNumberCount){
        document.getElementById('res10').innerHTML = 'Số dương nhiều hơn';
    }else if (positiveNumberCount === negativeNumberCount){
        document.getElementById('res10').innerHTML = 'Số dương bằng số âm';
    }else{
        document.getElementById('res10').innerHTML = 'Số âm nhiều hơn';
    }

}