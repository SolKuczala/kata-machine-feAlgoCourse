// // recursive
// function qs(arr: number[], lo: number,hi: number): void {
//     if (lo >= hi) {
//         return;
//     }

//     const pivotIdx = partition(arr, lo, hi)
//     qs(arr, lo , pivotIdx-1)
//     qs(arr, pivotIdx + 1, hi)

// }

// function partition(arr: number[],lo: number, hi: number): number {
//     const pivot = arr[hi]

//     let idx = lo - 1

//     for (let i = lo; i < hi; i++) {
//         if (arr[i] <= pivot) { 
//             idx++
//             const tmp = arr[i]
//             arr[i] = arr[idx]
//             arr[idx] = tmp
//         }
//     }
//     // move the idx to the right of the last item sorted
//     idx++
//     // move the pivot
//     arr[hi]= arr[idx]
//     arr[idx] = pivot
//     return idx
// }


// export default function quick_sort(arr: number[]): void {
//      qs(arr, 0, arr.length -1)
// }

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
        if (arr[i] < pivot && i==lo){
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