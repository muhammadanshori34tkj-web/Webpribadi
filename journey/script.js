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
                res.innerHTML = "Available commands:<br>- <b>whoami</b>: Display current user<br>- <b>ls</b>: List directory contents<br>- <b>cd</b>: Change directory<br>- <b>skills</b>: Show skill levels<br>- <b>clear</b>: Clear terminal screen<br>- <b>reboot</b>: Restart system<br>- <b>sudo</b>: Execute command as superuser<br>- <b>./ping-sweep.sh</b>: Run network ping sweep script";
            } else if (cmdText === 'whoami') {
                res.innerText = "Muhammad Faris Anshori";
            } else if (cmdText === 'ls') {
                res.innerHTML = "<span style='color: var(--kali-blue)'>information_gathering/</span>  <span style='color: var(--kali-blue)'>network_scanning/</span>  <span style='color: var(--kali-red)'>ping-sweep.sh</span>  portfolio.txt  certificates.dir";
            } else if (cmdText.startsWith('cd')) {
                res.innerText = "bash: cd: permission denied or directory locked.";
            } else if (cmdText === 'mkdir') {
                res.innerText = "mkdir: missing operand";
            } else if (cmdText === 'skills') {
                res.innerHTML = "[=>] Networking: 87%<br>[=>] Linux System: 90%<br>[=>] Vulnerability Assessment: 89%";
            } else if (cmdText === 'sudo') {
                res.innerText = "Faris is already root. No need for sudo.";
            } else if (cmdText.startsWith('./ping-sweep.sh')) {
                // SIMULASI SCRIPT PING-SWEEP.SH
                const args = cmdText.split(' ');
                if (args.length !== 2) {
                    res.innerText = "Usage: ./ping-sweep.sh [network]\nExample: ./ping-sweep.sh 192.168.1";
                } else {
                    const subnet = args[1];
                    // Validasi input sederhana (harus 3 blok angka dipisah titik)
                    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(subnet)) {
                         res.innerText = "Invalid subnet format. Use format like: 192.168.1";
                    } else {
                        res.innerHTML = `Starting ping sweep on ${subnet}.0/24...<br>`;
                        output.appendChild(res);

                        // Daftar IP palsu yang merespon (seolah-olah ada host aktif)
                        const fakeActiveHosts = [1, 15, 42, 105, 254]; 
                        let delay = 600;

                        // Looping memunculkan host aktif dengan jeda waktu biar kelihatan asli
                        fakeActiveHosts.forEach(hostIP => {
                            setTimeout(() => {
                                const hostLog = document.createElement('div');
                                hostLog.style.color = "#ccc";
                                hostLog.innerText = `${subnet}.${hostIP}`;
                                output.appendChild(hostLog);
                                output.scrollTop = output.scrollHeight; // Auto scroll ke bawah
                            }, delay);
                            delay += Math.floor(Math.random() * 600) + 300; // Jeda acak
                        });

                        // Selesai
                        setTimeout(() => {
                            const doneLog = document.createElement('div');
                            doneLog.style.color = "var(--kali-cyan)";
                            doneLog.innerText = "[*] Ping sweep completed. " + fakeActiveHosts.length + " hosts up.";
                            output.appendChild(doneLog);
                            output.scrollTop = output.scrollHeight;
                        }, delay + 500);

                        input.value = '';
                        return; // Berhenti di sini agar tidak memunculkan output kosong di bawah
                    }
                }
            } else if (cmdText === 'clear') {
                output.innerHTML = '';
            } else if (cmdText === 'reboot') {
                res.innerText = "Rebooting system...";
                setTimeout(() => location.reload(), 800);
            } else if (cmdText !== '') {
                res.innerText = `bash: ${cmdText}: command not found`;
            }

            // Memasukkan hasil command ke dalam layar terminal
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