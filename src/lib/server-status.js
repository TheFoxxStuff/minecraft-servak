function fetchServerStatus() {
    fetch('https://api.mcstatus.io/v2/status/java/mc.thefoxxstuff.net')
        .then(response => response.json())
        .then(data => {
            document.getElementById('online').textContent = data.online ? 'Да' : 'Нет';
            document.getElementById('version').textContent = data.version.name_raw;
            document.getElementById('host').textContent = data.host;
            document.getElementById('ip_address').textContent = data.ip_address;
            document.getElementById('srv_record').textContent = `${data.srv_record.port}`;
            document.getElementById('motd').textContent = data.motd.clean;
            document.getElementById('players').textContent = `${data.players.online} / ${data.players.max}`;
            if (data.icon) {
                const serverIcon = document.getElementById('server_icon');
                serverIcon.src = data.icon;
                serverIcon.hidden = false;
            }
            const playersList = document.getElementById('players-list');
            playersList.innerHTML = ''; 
            if (data.players.list.length > 0) {
                data.players.list.forEach(player => {
                    const playerItem = document.createElement('li');
                    playerItem.textContent = player.name_clean; 
                    playersList.appendChild(playerItem);
                });
            } else {
                playersList.innerHTML = '<li>Нет игроков онлайн</li>';
            }
        })
        .catch(error => {
            console.error('Ошибка при получении статуса сервера:', error);
        });
}
fetchServerStatus();