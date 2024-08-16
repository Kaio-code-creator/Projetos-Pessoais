document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        // Substitui vírgulas por pontos
        this.value = this.value.replace(',', '.');
    });
});