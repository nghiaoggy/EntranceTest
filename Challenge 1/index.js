let a = Number(prompt("Nhap vao a: "))
let b = Number(prompt("Nhap vao b: "))
let arr= new Array(1000000).fill(1)
arr[0]=arr[1]=0
for (var i=2; i<1000; i++){
    if (arr[i]) for (var j=i*i; j<arr.length; j+=i) arr[j]=0
}
for (var i=a; i<=b; i++) {
    if (arr[i]) document.write(`${i} `)
}