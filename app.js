function find_character(character, array) {
    let temporary_array = [];
    for (let i = 0; i < array.length; i++) {
        if (character == array[i]) {
            temporary_array.push(i);
        }
    } return temporary_array;
}

let input_character=prompt('Nhap vao ky tu can tim kiem');
let input_array=['X','Y','H','T','F','G','X','J'];
let result_array=find_character(input_character,input_array);
if(result_array.length==0){
    alert('Khong co ky tu '+input_character+' trong mang');
} else {
    alert('Ky tu '+input_character+' xuat hien '+result_array.length+' lan. O vi tri '+result_array);
}