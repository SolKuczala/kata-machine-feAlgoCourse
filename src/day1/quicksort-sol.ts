
function qs(arr: number[], lo: number,hi: number): void {
    if (lo >= hi){
        return 
    } 
    let pivot = arr[hi]
    let idx = lo
    for (let i = lo; i < hi; i++) {
        if (arr[i] < pivot && i != lo) {
            swap(arr,i, idx)
            idx++
        }
        if (arr[i] < pivot){
            idx++
        }
        
    }
    if (arr[idx] > arr[hi]){
        swap(arr,hi, idx)
    }

    qs(arr, lo, idx-1)
    qs(arr, idx+1, hi)
}

function swap(arr: number[],idx1: number, idx2:number): void {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1)
}