function dropHandler(ev) {
    console.log('File(s) dropped');

    ev.preventDefault();

    if (ev.dataTransfer.items) {
        var fileName;
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);
                fileName = file.name;
                console.log(fileName);
                var elementHtml = document.createElement('li');
                elementHtml.innerHTML = fileName
                document.getElementById('filesList').appendChild(elementHtml);
            }
        }
    } else {
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    ev.preventDefault();
}