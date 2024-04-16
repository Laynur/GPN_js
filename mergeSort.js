//сортировка слиянием
//массивы должны быть отсортированными
const merge = (leftArr, rightArr) =>
{
    let res = []
    let i = 0
    let j = 0

    while(i < leftArr.length && j < rightArr.length){
        if (leftArr[i] < rightArr[j]){
            res.push(leftArr[i])
            i++
        }
        else{
            res.push(rightArr[j])
            j++
        }
    }

    return res.concat(leftArr.slice(i)).concat(rightArr.slice(j))
}


const mergeSort = (arr) => {
    if (arr.length <=1){
        return arr
    }
    const half = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,half)
    const rightArr = arr.slice(half)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


for (let i = 100000; i <= 1000000; i+=100000){
    const arr = Array.from({length:i}, (_) => Math.floor(Math.random()*1000))
    const arr2 = Array.from({length:i},(_,index)=>index) //упоряд. по возраст.
    const arr3 = Array.from({length:i},(_,index)=>i - index) //упоряд. по убыв.
    const start = performance.now()
    mergeSort(arr)
    const end = performance.now()
    console.log((end-start)/1000)
}
