document.addEventListener('DOMContentLoaded', () => {
    // 1. Time Update
    const updateTime = () => {
        const now = new Date();
        document.getElementById('current-time').innerText = now.toLocaleString('id-ID');
    };
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Reveal Animation & Skill Fill
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const fill = entry.target.querySelector('.skill-fill');
                if (fill) fill.style.width = fill.getAttribute('data-width');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal-effect, .skill-item').forEach(el => revealObserver.observe(el));

    // 3. Terminal Logic
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('output-log');

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value.toLowerCase().trim();
            const log = document.createElement('div');
            log.innerHTML = `<span style="color: var(--kali-cyan)">> ${cmd}</span>`;
            output.appendChild(log);

            if (cmd === 'help') {
                const res = document.createElement('div');
                res.innerText = ">> Commands: status, whoami, clear, reboot";
                output.appendChild(res);
            } else if (cmd === 'clear') {
                output.innerHTML = '';
            } else if (cmd === 'reboot') {
                location.reload();
            }

            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });

    // 4. Reset Button
    document.getElementById('reset-journey').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => location.reload(), 500);
    });
});