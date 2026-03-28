// --- DATA SERTIFIKAT (TAMBAHKAN SERTIFIKAT BARU DI SINI) ---
const certificates = [
    {
        image: "https://raw.githubusercontent.com/muhammadanshori34tkj-web/sertifgabut/main/Muhammad%20Faris%20Anshori%20Sertifikat%20Webinar%20IT%20Cyber%20Security%2027%20Januari%202026_page-0001.jpg",
        title: "Basic Mobile Pentesting",
        issuer: "ID-Networkers (Webinar IT 2026)"
    },
    {
        image: "https://raw.githubusercontent.com/muhammadanshori34tkj-web/sertifgabut/main/WhatsApp%20Image%202026-03-06%20at%2009.00.31.jpeg",
        title: "Jatim Cybersecurity Competition 2025",
        issuer: "Dinas Komunikasi dan Informatika Provinsi Jawa Timur"
    },
    {
        image: "https://raw.githubusercontent.com/muhammadanshori34tkj-web/sertifgabut/main/Muhammad%20Faris%20Anshori%20Sertifikat%20Webinar%20IT%20Cyber%20Security%2029%20Januari%202026_page-0001.jpg",
        title: "Sistem Keamanan Dari Nol",
        issuer: "ID-Networkers (Webinar IT 2026)"
    }
    // CARA NAMBAH: Copy satu blok { ... } di atas, pisahkan dengan koma, lalu paste di bawah sini.
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Time Update
    const updateTime = () => {
        const now = new Date();
        document.getElementById('current-time').innerText = now.toLocaleString('id-ID');
    };
    setInterval(updateTime, 1000);
    updateTime();

    // 2. Generate Sertifikat Otomatis
    const certContainer = document.getElementById('cert-gallery-container');
    if(certContainer) {
        certificates.forEach(cert => {
            const certHTML = `
                <div class="cert-card reveal-effect">
                    <div class="cert-img-container">
                        <img src="${cert.image}" alt="${cert.title}">
                    </div>
                    <div class="cert-info">
                        <h4>${cert.title}</h4>
                        <p>${cert.issuer}</p>
                    </div>
                </div>
            `;
            certContainer.innerHTML += certHTML;
        });
    }

    // 3. Reveal Animation & Skill Fill
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const fill = entry.target.querySelector('.skill-fill');
                if (fill) fill.style.width = fill.getAttribute('data-width');
            }
        });
    }, { threshold: 0.2 });

    // Tambahkan delay sedikit agar sertifikat yang di-generate ikut ke-observe
    setTimeout(() => {
        document.querySelectorAll('.reveal-effect, .skill-item').forEach(el => revealObserver.observe(el));
    }, 100);

    // 4. Terminal Logic (Ditambahkan banyak interaksi)
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('output-log');

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const cmdText = input.value.toLowerCase().trim();
            const log = document.createElement('div');
            log.innerHTML = `<span style="color: var(--kali-cyan)">root@faris:~$ ${cmdText}</span>`;
            output.appendChild(log);

            const res = document.createElement('div');
            res.style.color = "#ccc"; // Warna teks output command

            // Logika Command Terminal
            if (cmdText === 'help') {
                res.innerHTML = "Available commands:<br>- <b>whoami</b>: Display current user<br>- <b>ls</b>: List directory contents<br>- <b>cd</b>: Change directory<br>- <b>skills</b>: Show skill levels<br>- <b>clear</b>: Clear terminal screen<br>- <b>reboot</b>: Restart system<br>- <b>sudo</b>: Execute command as superuser";
            } else if (cmdText === 'whoami') {
                res.innerText = "root (Superuser privileges active)";
            } else if (cmdText === 'ls') {
                res.innerHTML = "<span style='color: var(--kali-blue)'>information_gathering/</span>  <span style='color: var(--kali-blue)'>network_scanning/</span>  <span style='color: var(--kali-red)'>exploits.sh</span>  portfolio.txt  certificates.dir";
            } else if (cmdText.startsWith('cd')) {
                res.innerText = "bash: cd: permission denied or directory locked.";
            } else if (cmdText === 'mkdir') {
                res.innerText = "mkdir: missing operand";
            } else if (cmdText === 'skills') {
                res.innerHTML = "[=>] Networking: 85%<br>[=>] Linux System: 80%<br>[=>] Vulnerability Assessment: 70%";
            } else if (cmdText === 'sudo') {
                res.innerText = "Faris is already root. No need for sudo.";
            } else if (cmdText === 'clear') {
                output.innerHTML = '';
            } else if (cmdText === 'reboot') {
                res.innerText = "Rebooting system...";
                setTimeout(() => location.reload(), 800);
            } else if (cmdText !== '') {
                res.innerText = `bash: ${cmdText}: command not found`;
            }

            if (cmdText !== 'clear' && cmdText !== '') {
                output.appendChild(res);
            }

            input.value = '';
            output.scrollTop = output.scrollHeight; // Auto scroll ke bawah
        }
    });

    // 5. Reset Button
    document.getElementById('reset-journey').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => location.reload(), 500);
    });
});