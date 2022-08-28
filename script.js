var arr = [];

function generate() {
    for (let i=1; i<1000; i++) {
        window.clearInterval(i);
    }
    var size = document.getElementById('size').value;
    var table = document.getElementById('table');

    arr = [];

    [].slice.call(table.children).forEach(bar => {
        bar.style.maxHeight = '0';
    });

    var ti = 500;

    if(table.innerHTML=='') ti = 0

    setTimeout(()  => {
        table.innerHTML = ''

        for (var i = 0; i < size; i++) {
            var bar = document.createElement('div');
            bar.classList.add('bar');
            bar.id = i
            table.appendChild(bar);
        }

        setTimeout(() => {
            [].slice.call(table.children).forEach(bar => {
                bar_height = `${(Math.floor(Math.random() * 90)+5).toString()}%`;
                bar.style.maxHeight = bar_height;
                var value = [parseInt(bar.id), bar_height.replace('%', '')];
                arr.push(value)
            });            
        }, 100);
    }, ti)
}

function timer(array) {
    for(i=0; i<array.length; i++) {
        const bar = document.getElementById(i);
        bar.style.transition = '.1s';
        bar.style.maxHeight = array[i].toString()+'%';
    }
}

function sort() {
    var heights = []

    const dropdown = document.getElementById('dropdown').value;

    arr.forEach(subarr => {
        heights.push(parseInt(subarr[1]))
    });
    
    //heights.sort(function(a, b){return a - b});

    const speed = document.getElementById('speed').value

    if(dropdown == 'bubble') {
        bubbleSort(heights, speed);
    }
    if(dropdown == 'insertion') {
        insertionSort(heights, speed);
    }
    if(dropdown == 'selection') {
        selectionSort(heights, speed);
    }
    if(dropdown == 'heap') {
        heapSort(heights, speed);
    }
}

function bubbleSort(arr, speed) {
    console.clear()
    let len = arr.length;
    let checked = false;
    do {
        checked = false;
        setInterval(() => {
            for (let i = 0; i < len; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    checked = true;
                }
                if (i == 0) {
                    timer(arr)
                }
            }
        }, speed);
    } while (checked);
}

function insertionSort(arr, speed) {
    console.clear()
    var cases = [];
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i - 1
        let temp = arr[i]
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j+1] = temp
        cases.push(arr.toString())
    }

    a = 1

    cases.forEach(cas => {
        setTimeout(() => {
            cas = cas.split(',')
            cas.forEach(val => parseInt(val))
            timer(cas)
        }, speed*a)
        a++
    });
}

function selectionSort(arr, speed) {
    let len = arr.length;
    a = 1
    for(let i = 0; i < len; i++) {
        setTimeout(() => {
            let min = i;
            for(let j = i+1; j < len; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
        }
        if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
            }
            timer(arr)
        }, speed*a)
        a++
    }
}

var array_length;

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(arr, speed) {
    console.clear();
    array_length = arr.length;

    let cases = [];
    let a = 0;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(arr, i);
    }

    for (i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        array_length--;
        heap_root(arr, 0);
        cases.push(arr.toString());
    }
    cases.forEach(cas => {
        setTimeout(() => {
            cas = cas.split(',')
            cas.forEach(val => parseInt(val))
            timer(cas)
        }, speed*a)
        a++
    });
}
