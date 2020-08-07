(function() {

    let btn = document.querySelector('#btnMudaLayout');
    btn.addEventListener('click', function() {
        moduloMural.mudarLayout();

        if (btn.textContent.trim() == 'Linhas') {
            btn.textContent = 'Blocos';
        }
        else {
            btn.textContent = 'Linhas';
        }
    });

})();