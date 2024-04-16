const firstElement = (arr, left,right)=> {
    return left
}
const middleElement = (arr,left,right) => {
    let middle = (left + right) / 2
    return Math.floor(middle)
}
const partition = (arr,left,right) => {
    let i = left + 1
    for (let j = i; j < right; j++){
        if (arr[j]<arr[left]){
            //[arr[j],arr[i]] = [arr[i], arr[j]]
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++
        }
    }
    i--
    //[arr[left],arr[i]] = [arr[i], arr[left]]
    let temp = arr[left]
    arr[left] = arr[i]
    arr[i] = temp
    return i
}
const quickSort = (arr,left,right) => 
{
    if (left >= right){
        return
    }
    const pivot = firstElement(arr,left,right)
    //[arr[pivot], arr[left]] = [arr[left],arr[pivot]]
    let temp = arr[pivot]
    arr[pivot] = arr[left]
    arr[left] = temp
    const index = partition(arr,left,right)
    quickSort(arr,left,index)
    quickSort(arr,index+1,right)
}


// let array = [4,3,2,5,6,1,0,7]
// quickSort(array,0,array.length)
// console.log(array)

for (let i = 100000; i <= 1000000; i+=100000){
    const arr = Array.from({length:i}, (_) => Math.floor(Math.random()*1000))
    const arr2 = Array.from({length:i},(_,index)=>index) //упоряд. по возраст.
    const arr3 = Array.from({length:i},(_,index)=>i - index) //упоряд. по убыв.
    const start = performance.now()
    quickSort(arr,0,arr.length)
    const end = performance.now()
    console.log((end-start)/1000)
}
