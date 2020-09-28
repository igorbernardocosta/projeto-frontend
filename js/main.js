const dropHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            if (ev.dataTransfer.items[i].kind === 'file') {
                let file = ev.dataTransfer.items[i].getAsFile();
                let detailFile = { name: file.name, type: file.type, size: file.size }
                let { name } = detailFile
                output(name);
            }
        }
    } else {
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
}

const output = (text = "Nome Inválido") => {
    document.getElementById('dragdrop_dropzone').textContent += text;
}

const dragOverHandler = (ev) => {
    ev.preventDefault();
}