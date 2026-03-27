// Hacking effect untuk background dengan tema Nord
document.addEventListener('DOMContentLoaded', function() {
    // Efek ketik untuk command line
    const commandElement = document.querySelector('.command');
    const originalCommand = commandElement.textContent;
    commandElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalCommand.length) {
            commandElement.textContent += originalCommand.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    };
    
    // Mulai efek ketik setelah sedikit delay
    setTimeout(typeWriter, 300);
    
    // Update waktu di footer
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
        const dateString = now.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('current-time').textContent = 
            `${dateString} | ${timeString}`;
    }
    
    // Update waktu setiap detik
    updateTime();
    setInterval(updateTime, 1000);
    
    // Tambahkan log entry baru secara berkala
    const logContent = document.getElementById('log-content');
    const logEntries = [
        "> Analyzing network topology...",
        "> Security protocols: active and monitoring",
        "> Scanning for vulnerabilities in SMK Telkom network...",
        "> Encryption: AES-256 active",
        "> Firewall status: optimal configuration",
        "> Student profile integrity: verified",
        "> Learning modules: cyber security fundamentals",
        "> System time synchronized with SMK Telkom server"
    ];
    
    let logIndex = 0;
    const addLogEntry = () => {
        if (logIndex < logEntries.length) {
            const newEntry = document.createElement('div');
            newEntry.textContent = logEntries[logIndex];
            logContent.appendChild(newEntry);
            logIndex++;
            
            // Scroll ke bawah
            logContent.scrollTop = logContent.scrollHeight;
            
            // Reset index jika sudah mencapai akhir
            if (logIndex >= logEntries.length) {
                logIndex = 0;
            }
        }
    };
    
    // Tambahkan log entry setiap 10 detik
    setInterval(addLogEntry, 10000);
    
    // Efek untuk tombol kontak
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Tambahkan efek visual saat hover
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(15deg) scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
            
            // Tambahkan log untuk koneksi
            let logMessage = "";
            if (this.id === 'email-btn') {
                logMessage = "> Preparing secure email client...";
            } else if (this.id === 'github-btn') {
                logMessage = "> Accessing GitHub repository...";
            } else if (this.id === 'linkedin-btn') {
                logMessage = "> Connecting to LinkedIn network...";
            }
             else if (this.id === 'journey-btn') {
                 logMessage = "> Loading Cyber Journey Map...";
            }
            
            if (logMessage) {
                const newLog = document.createElement('div');
                newLog.textContent = logMessage;
                logContent.appendChild(newLog);
                logContent.scrollTop = logContent.scrollHeight;
            }
        });
        
        button.addEventListener('mouseleave', function() {
            // Reset efek visual saat hover selesai
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    // Command input handler
    const commandInput = document.getElementById('command-input');
    commandInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            
            if (command) {
                // Tambahkan command ke log
                const commandLog = document.createElement('div');
                commandLog.innerHTML = `<span style="color: #88C0D0">root@nordsec:~$</span> ${command}`;
                logContent.appendChild(commandLog);
                
                // Proses command
                let response = "";
                
                switch(command) {
                    case 'help':
                        response = "Available commands: clear, whoami, skills, school, contact, date, sysinfo, projects";
                        break;
                    case 'clear':
                        logContent.innerHTML = '';
                        response = "Log cleared.";
                        break;
                    case 'whoami':
                        response = "Muhammad Faris Anshori - Cyber Security Student at SMK Telkom Malang";
                        break;
                    case 'skills':
                        response = "Network Security, Linux Administration, Ethical Hacking, Web Security, Cryptography Basics";
                        break;
                    case 'school':
                        response = "SMK Telkom Malang - X TKJ 4 - Cyber Security Specialization";
                        break;
                    case 'contact':
                        response = "Email: muhammad_anshori_34tkj@student.smktelkom-mlg.sch.id | GitHub: muhammadanshori34tkj-web | LinkedIn: Muhammad Anshori";
                        break;
                    case 'date':
                        response = new Date().toString();
                        break;
                    case 'sysinfo':
                        response = "Nord Security Environment v1.0 | Kali Linux 2023.3 | Cyber Security Suite";
                        break;
                    case 'projects':
                        response = "Current projects: Network monitoring tool, Basic firewall config, Security awareness presentation";
                        break;
                    default:
                        response = `Command '${command}' not found. Type 'help' for available commands.`;
                }
                
                // Tambahkan response ke log
                if (response) {
                    const responseLog = document.createElement('div');
                    responseLog.textContent = response;
                    logContent.appendChild(responseLog);
                }
                
                // Clear input dan scroll ke bawah
                this.value = '';
                logContent.scrollTop = logContent.scrollHeight;
            }
        }
    });
    
    // Efek glitch acak pada halaman dengan tema Nord
    setInterval(() => {
        if (Math.random() > 0.8) {
            const glitchIntensity = Math.random() * 3 - 1.5;
            document.body.style.transform = `translate(${glitchIntensity}px, ${glitchIntensity}px)`;
            
            setTimeout(() => {
                document.body.style.transform = 'translate(0, 0)';
            }, 80);
        }
    }, 4000);
    
    // Matrix code effect dengan warna Parrot OS
    const overlay = document.querySelector('.hacking-overlay');
    setInterval(() => {
        // Generate warna Parrot OS
        const parrotColors = [
            '00ff64', // Hijau Parrot
            'ffaa00', // Oranye Parrot
            'ff3333', // Merah terang
            '3399ff'  // Biru untuk variasi
        ];
        
        const randomColor = parrotColors[Math.floor(Math.random() * parrotColors.length)];
        const opacity = (Math.random() * 0.08 + 0.02).toFixed(3);
        
        overlay.style.background = `
            repeating-linear-gradient(
                0deg,
                rgba(0, 255, 100, 0.05) 0px,
                rgba(0, 255, 100, 0.05) 1px,
                transparent 1px,
                transparent 2px
            ),
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, 
                rgba(${parseInt(randomColor.substring(0,2), 16)}, 
                     ${parseInt(randomColor.substring(2,4), 16)}, 
                     ${parseInt(randomColor.substring(4,6), 16)}, ${opacity}) 0%, 
                transparent 60%)
        `;
    }, 3000);
    
    // Animasi skill bars saat scroll ke mereka
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevels = document.querySelectorAll('.skill-level');
                skillLevels.forEach(level => {
                    // Trigger animasi ulang
                    const width = level.style.width;
                    level.style.width = '0';
                    setTimeout(() => {
                        level.style.width = width;
                    }, 100);
                });
            }
        });
    }, observerOptions);
    
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
});// Dalam fungsi interval Matrix code effect
const archColors = [
    '1793D1', // Arch Blue
    '3399FF', // Bright Blue
    '99FFFF', // Bright Cyan
    'FF3333'  // Bright Red (untuk variasi)
];