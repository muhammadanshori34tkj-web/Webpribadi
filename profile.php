<?php
// Informasi profil yang diproses oleh PHP
date_default_timezone_set('Asia/Jakarta');
$serverTime = date('Y-m-d H:i:s');
$visitorIP = $_SERVER['REMOTE_ADDR'] ?? 'Not available';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'Not available';
$phpVersion = phpversion();

// Generate random session ID untuk efek hacking
$sessionId = "NS-" . bin2hex(random_bytes(4)) . "-" . date('His');

// Data profil siswa
$studentData = [
    'nama' => 'Muhammad Faris Anshori',
    'kelas' => 'X TKJ 4',
    'sekolah' => 'SMK Telkom Malang',
    'keahlian' => 'Cyber Security',
    'email' => 'muhammad_anshori_34tkj@student.smktelkom-mlg.sch.id',
    'github' => 'https://github.com/muhammadanshori34tkj-web',
    'linkedin' => 'https://www.linkedin.com/in/muhammad-anshori-aa6318378/',
    'status' => 'Active Student'
];

// Hitung jam belajar berdasarkan waktu server
$currentHour = date('H');
$studyStatus = '';

if ($currentHour >= 6 && $currentHour < 12) {
    $studyStatus = 'Morning Study Session';
    $studyProgress = 'Networking Fundamentals';
} elseif ($currentHour >= 12 && $currentHour < 15) {
    $studyStatus = 'Afternoon Lab Session';
    $studyProgress = 'Security Practices';
} elseif ($currentHour >= 15 && $currentHour < 18) {
    $studyStatus = 'Evening Study Session';
    $studyProgress = 'Cryptography Basics';
} else {
    $studyStatus = 'Night Research';
    $studyProgress = 'Security Tools Exploration';
}
?>

<div class="php-server-info">
    <h3><i class="fas fa-server"></i> NORD SECURITY SERVER</h3>
    <p><strong>Session ID:</strong> <?php echo $sessionId; ?></p>
    <p><strong>Server Time (WIB):</strong> <?php echo $serverTime; ?></p>
    <p><strong>Your IP:</strong> <?php echo $visitorIP; ?></p>
    <p><strong>PHP Version:</strong> <?php echo $phpVersion; ?></p>
    <p><strong>Request Method:</strong> <?php echo $_SERVER['REQUEST_METHOD']; ?></p>
    
    <div class="hacking-status">
        <h4>STUDENT SYSTEM STATUS:</h4>
        <p>> SMK Telkom Connection: <span class="status-online">ACTIVE</span></p>
        <p>> Cyber Security Modules: <span class="status-online">LOADED</span></p>
        <p>> Learning Progress: <span class="status-online">ON TRACK</span></p>
        <p>> Current Session: <span class="status-online"><?php echo $studyStatus; ?></span></p>
        <p>> Studying: <span class="status-online"><?php echo $studyProgress; ?></span></p>
    </div>
    
    <div class="dynamic-message">
        <?php
        $hour = date('H');
        $greeting = '';
        
        if ($hour < 12) {
            $greeting = "Selamat pagi! Sistem pembelajaran keamanan siber aktif.";
        } elseif ($hour < 15) {
            $greeting = "Selamat siang! Sesi lab keamanan jaringan sedang berjalan.";
        } elseif ($hour < 18) {
            $greeting = "Selamat sore! Waktu terbaik untuk mempelajari kriptografi.";
        } else {
            $greeting = "Selamat malam! Mode penelitian keamanan aktif.";
        }
        ?>
        
        <p>> <?php echo $greeting; ?></p>
        <p>> Last system update: <?php echo date('H:i:s'); ?></p>
        <p>> Student: <?php echo $studentData['nama']; ?></p>
        <p>> Class: <?php echo $studentData['kelas']; ?> | SMK Telkom Malang</p>
    </div>
</div>

<style>
.php-server-info {
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
    padding: 20px;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(17, 17, 17, 0.95) 100%);
    border: 2px solid #00ff64;
    border-radius: 6px;
    margin-top: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.php-server-info h3 {
    color: #00ff64;
    border-bottom: 2px solid #ffaa00;
    padding-bottom: 12px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.3rem;
    text-shadow: 0 0 5px rgba(0, 255, 100, 0.3);
}

.php-server-info p {
    margin-bottom: 10px;
    padding-left: 15px;
    border-left: 2px solid rgba(0, 255, 100, 0.5);
    transition: all 0.3s;
}

.php-server-info p:hover {
    border-left-color: #00ff64;
    background-color: rgba(0, 255, 100, 0.1);
    padding-left: 20px;
}

.php-server-info strong {
    color: #ffaa00;
    min-width: 160px;
    display: inline-block;
}

.status-online {
    color: #00ff64;
    font-weight: bold;
    text-shadow: 0 0 8px rgba(0, 255, 100, 0.5);
}

.hacking-status, .dynamic-message {
    margin-top: 20px;
    padding: 18px;
    background-color: rgba(10, 10, 10, 0.7);
    border-left: 4px solid #ffaa00;
    border-radius: 4px;
    border: 1px solid #333333;
}

.hacking-status h4 {
    color: #00ff64;
    margin-bottom: 15px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.hacking-status h4:before {
    content: ">";
    color: #ffaa00;
    font-weight: bold;
}

.hacking-status p, .dynamic-message p {
    margin-bottom: 8px;
    color: #ffffff;
    border-left: none;
    padding-left: 0;
}

.hacking-status p:before, .dynamic-message p:before {
    content: ">";
    color: #ffaa00;
    margin-right: 10px;
    font-weight: bold;
}
</style>