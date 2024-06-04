document.getElementById('copy-buttons').addEventListener('click', function() {
    const textToCopy = this.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
        const notification = document.getElementById('copy-notifications');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 800);
    }).catch(err => {
        console.error('Ошибка копирования текста: ', err);
    });
});