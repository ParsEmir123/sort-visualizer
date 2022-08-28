var arr = [];

function generate() {
    var size = document.getElementById('size').value;
    var table = document.getElementById('table');

    arr = [];

    [].slice.call(table.children).forEach(bar => {
        bar.style.maxHeight = '0';
    });
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
                var value = bar.id+'_'+bar_height;
                arr.push(value)
            });            
        }, 500);
    }, 500)
}

function sort() {
    console.log(arr)
}
