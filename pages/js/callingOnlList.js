document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('logInMenu');
    console.log(menu);
    if (menu) {
        menu.addEventListener('change', function () {
            const selectedValue = this.value;
            if (!selectedValue) return;

            if (selectedValue === 'logout') {
                if (confirm('Вы уверены?')) window.location.href = '/logout';
            } else {
                window.location.href = selectedValue;
            }
        });
    } else {
        console.error('Element #logInMenu not found');
    }
});
