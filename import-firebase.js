// ============================================================
//  FIRESTORE IMPORT SCRIPT — Firebase Admin SDK
//  PT IDSurvey Portofolio | Mifta
//
//  SETUP SEBELUM JALAN:
//  1. npm install firebase-admin
//  2. Download serviceAccountKey.json dari Firebase Console:
//     Project Settings → Service Accounts → Generate new private key
//  3. Taruh serviceAccountKey.json di folder yang sama dengan file ini
//  4. node import.js
// ============================================================

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// ── Init Admin SDK (bypass semua Security Rules) ──
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// ============================================================
//  DATA MASTER
// ============================================================

const projects = {
  gsh: {
    title: "Green Safe & Health",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "design",
    shortDesc: "Infografis kampanye HSE & ESG untuk PT IDSurvey",
    desc: "Infografis kampanye HSE & ESG yang dibuat untuk Divisi ISPB PT IDSurvey. Menyoroti pentingnya keselamatan, kesehatan, dan keberlanjutan di lingkungan kerja.",
    resp: [
      "Mendesain infografis kampanye HSE menggunakan Canva",
      "Menyusun konten dan visual sesuai branding perusahaan",
      "Berkoordinasi dengan tim ISPB untuk memastikan pesan tersampaikan",
      "Membuat beberapa alternatif desain untuk review tim"
    ],
    tools: ["Canva"],
    imgs: ["Images/GSH2.png"],
    order: 1
  },
  safety: {
    title: "Panduan Keselamatan Tim Kunjungan Kerja",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "design",
    shortDesc: "Safety guideline kunjungan ke lokasi kebencanaan",
    desc: "Panduan keselamatan komprehensif untuk tim yang melakukan kunjungan kerja ke lokasi kebencanaan.",
    resp: [
      "Mendesain layout panduan keselamatan yang mudah dibaca",
      "Mengilustrasikan prosedur keselamatan dengan visual yang jelas",
      "Menyusun konten berdasarkan input dari tim HSE",
      "Memastikan semua informasi penting tercakup dalam panduan"
    ],
    tools: ["Canva"],
    imgs: ["Images/panduankeselamatan2.png"],
    order: 2
  },
  holiday: {
    title: "Safe Holiday Season",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "design",
    shortDesc: "Kampanye keselamatan berkendara saat libur akhir tahun",
    desc: "Kampanye keselamatan menjelang libur akhir tahun yang berfokus pada keselamatan berkendara dan perjalanan.",
    resp: [
      "Membuat desain kampanye safety untuk libur akhir tahun",
      "Menyusun pesan-pesan keselamatan yang mudah diingat",
      "Mendesain visual yang menarik perhatian",
      "Mempersiapkan materi untuk distribusi internal perusahaan"
    ],
    tools: ["Canva"],
    imgs: ["Images/safetyholidayseason2.png"],
    order: 3
  },
  hse: {
    title: "Panduan Perilaku HSE Golden Rules",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "design",
    shortDesc: "Visualisasi perilaku CARE untuk budaya keselamatan kerja",
    desc: "Visualisasi perilaku CARE (Commitment, Aware, Respect, Intervene) sebagai panduan perilaku keselamatan di tempat kerja.",
    resp: [
      "Menerjemahkan konsep HSE Golden Rules ke dalam visual infografis",
      "Membuat ilustrasi untuk setiap poin CARE",
      "Memastikan desain sesuai standar perusahaan",
      "Berkolaborasi dengan tim HSE untuk validasi konten"
    ],
    tools: ["Canva"],
    imgs: ["Images/panduanhse2.png"],
    order: 4
  },
  k3: {
    title: "Bulan K3 Nasional",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "design",
    shortDesc: "Kampanye Bulan K3 Nasional — tema safety leadership",
    desc: "Kampanye Bulan K3 Nasional dengan tema safety leadership.",
    resp: [
      "Mendesain materi kampanye Bulan K3 Nasional",
      "Menjadi panitia teknis Acara Puncak IDSurvey Group",
      "Mengelola video bumper dan seluruh media acara",
      "Membuat poster dan banner digital dengan tema safety leadership"
    ],
    tools: ["Canva"],
    imgs: ["Images/BKN2.png"],
    order: 5
  },
  mainevent: {
    title: "Bulan K3 Nasional – Grand Event IDSurvey Group",
    co: "PT IDSurvey (Persero)",
    yr: "2026",
    category: "design",
    shortDesc: "Pengembangan materi visual komunikasi untuk Grand Event Bulan K3 Nasional IDSurvey Group.",
    desc: "Berkontribusi dalam pengembangan materi visual komunikasi untuk Grand Event Bulan K3 Nasional yang diselenggarakan oleh IDSurvey Group. Acara ini dihadiri oleh Wakil Menteri Ketenagakerjaan RI, Direktur Pengembangan Pengujian K3 Kementerian Ketenagakerjaan, Direktur Utama PT Pertamina Drilling Services Indonesia, CEO PT IDSurvey (Persero), serta jajaran direksi dari PT Biro Klasifikasi Indonesia (Persero), PT SUCOFINDO (Persero), PT Surveyor Indonesia, dan PT IDSurvey (Persero).",
    resp: [
      "Mendesain flyer digital acara yang didistribusikan kepada peserta dan stakeholder",
      "Mendesain poster promosi, papan pengumuman pemenang, dan roll-up banner untuk kebutuhan branding acara",
      "Mendesain virtual background untuk sesi daring (Zoom)",
      "Mendesain banner digital untuk kebutuhan promosi dan tampilan acara",
      "Mendesain motion graphic acara seperti bumper opening, closing, dan transisi pembicara",
      "Mendesain tampilan layar selamat datang untuk videotron",
      "Mengelola dan menyiapkan seluruh materi visual untuk mendukung presentasi acara"
    ],
    tools: ["Canva"],
    imgs: [
      "Images/bumper-puncakk3/k3-opening.png",
      "Images/bumper-puncakk3/k3-ceo.png",
      "Images/bumper-puncakk3/k3-dirut.png",
      "Images/bumper-puncakk3/k3-direktur.png",
      "Images/bumper-puncakk3/k3-vp.png",
      "Images/bumper-puncakk3/k3-wakilmentri.png",
      "Images/bumper-puncakk3/k3-selamatdatang.png"
    ],
    order: 6
  },
  uiux_idsurvey: {
    title: "UI/UX Design Project",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "uiux",
    shortDesc: "Desain antarmuka aplikasi internal PT IDSurvey",
    desc: "Desain antarmuka untuk aplikasi internal PT IDSurvey — fokus kemudahan penggunaan dan efisiensi alur kerja.",
    resp: [
      "Membuat wireframe dan user flow aplikasi",
      "Mendesain high-fidelity prototype menggunakan Figma",
      "Melakukan usability testing dan iterasi desain"
    ],
    tools: ["Figma", "Draw.io"],
    imgs: ["Images/finalproject1.png"],
    order: 1
  },
  activity_record: {
    title: "Activity Record System",
    co: "PT IDSurvey (Persero)",
    yr: "2025",
    category: "web",
    shortDesc: "Sistem pencatatan aktivitas berbasis web untuk Divisi ISPB",
    desc: "Sistem pencatatan aktivitas berbasis web untuk Divisi ISPB — tracking harian, monitoring progres, dan laporan otomatis.",
    resp: [
      "Merancang arsitektur sistem dari awal hingga implementasi",
      "Mengembangkan backend menggunakan Laravel",
      "Membuat tampilan frontend yang responsif",
      "Menyusun user guide dan dokumentasi sistem"
    ],
    tools: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    imgs: [],
    order: 1
  }
};

const certifications = {
  "cert-excel": {
    title: "Microsoft Excel Basic",
    issuer: "MySkill",
    date: "November 2025",
    base: "microsoft-excel",
    imgs: [
      "Certificates/microsoft-excel_1.jpg",
      "Certificates/microsoft-excel_2.jpg",
      "Certificates/microsoft-excel_3.jpg",
      "Certificates/microsoft-excel_4.jpg"
    ],
    order: 1
  },
  "cert-manpro": {
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    date: "Juli 2023 – Juli 2026",
    base: "dicoding-manajemenproyek",
    imgs: [
      "Certificates/dicoding-manajemenproyek_1.jpg",
      "Certificates/dicoding-manajemenproyek_2.jpg",
      "Certificates/dicoding-manajemenproyek_3.jpg"
    ],
    order: 2
  },
  "cert-pemrograman": {
    title: "Memulai Dasar Pemrograman",
    issuer: "Dicoding Indonesia",
    date: "Juli 2023 – Juli 2026",
    base: "dicoding-dasarpemograman",
    imgs: [
      "Certificates/dicoding-dasarpemograman_1.jpg",
      "Certificates/dicoding-dasarpemograman_2.jpg",
      "Certificates/dicoding-dasarpemograman_3.jpg",
      "Certificates/dicoding-dasarpemograman_4.jpg"
    ],
    order: 3
  },
  "cert-sql": {
    title: "Belajar Dasar SQL",
    issuer: "Dicoding Indonesia",
    date: "September 2023 – September 2026",
    base: "dicoding-sql",
    imgs: [
      "Certificates/dicoding-sql_1.jpg",
      "Certificates/dicoding-sql_2.jpg",
      "Certificates/dicoding-sql_3.jpg"
    ],
    order: 4
  },
  "cert-ai": {
    title: "Dasar-dasar Keamanan AI",
    issuer: "Digital Talent Scholarship",
    date: "Oktober 2025",
    base: "digitalent-dasarkeamananai",
    imgs: [
      "Certificates/digitalent-dasarkeamananai_1.jpg",
      "Certificates/digitalent-dasarkeamananai_2.jpg"
    ],
    order: 5
  },
  "cert-design": {
    title: "Design Thinking",
    issuer: "GNIK & Kementerian Ketenagakerjaan RI",
    date: "Desember 2025",
    base: "design-thinking",
    imgs: ["Certificates/design-thinking.jpg"],
    order: 6
  },
  "digital-disruption": {
    title: "Essential Skills: Digital Disruption & Transformation",
    issuer: "GNIK & Kementerian Ketenagakerjaan RI",
    date: "Mei 2026",
    base: "digital-disruption",
    imgs: ["Certificates/digital-disruption.jpg"],
    order: 7
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    issuer: "GNIK & Kementerian Ketenagakerjaan RI",
    date: "Maret 2026",
    base: "emotional-intelligence",
    imgs: ["Certificates/emotional-intelligence.jpg"],
    order: 8
  }
};

const experience = {
  "exp-idsurvey": {
    title: "Officer ISPB",
    company: "PT IDSurvey (Persero)",
    badge: "Internship — Kemnaker",
    dateFrom: "Nov 2024",
    dateTo: "Mei 2026",
    responsibilities: [
      "Membangun sistem Activity Record Divisi ISPB dari tahap perancangan hingga implementasi",
      "Menyusun manual book (user guide) sebagai panduan penggunaan sistem",
      "Melakukan pengujian fungsional sistem Activity Record",
      "Membantu pembuatan desain grafis untuk kebutuhan divisi (infografis, panduan, kampanye HSE)",
      "Mengelola dan membantu pengarsipan dokumen pendukung divisi",
      "Menjadi panitia teknis Acara Puncak Bulan K3 Nasional IDSurvey Group"
    ],
    tags: ["Bumper Video Bulan K3 Nasional", "Dokumentasi Acara Puncak", "Media Event Teknis"],
    order: 1
  },
  "exp-asdos": {
    title: "Asisten Dosen Mata Kuliah",
    company: "Universitas Teknologi Yogyakarta",
    badge: "",
    dateFrom: "Sep 2024",
    dateTo: "Jan 2025",
    responsibilities: [
      "Mendampingi dosen dalam praktikum mata kuliah Pemrograman Berorientasi Objek",
      "Mengelola dan menyiapkan dokumen administrasi untuk mendukung kegiatan kampus"
    ],
    tags: [],
    order: 2
  },
  "exp-akreditasi": {
    title: "Asisten Akreditasi Kampus",
    company: "Universitas Teknologi Yogyakarta",
    badge: "",
    dateFrom: "Sep 2024",
    dateTo: "Jan 2025",
    responsibilities: [
      "Mengumpulkan data mahasiswa dan memverifikasi bukti pendukung akreditasi kampus",
      "Menyusun dan memastikan kelengkapan dokumen akreditasi",
      "Berkoordinasi antarbagian untuk kelancaran proses akreditasi"
    ],
    tags: [],
    order: 3
  }
};

// ============================================================
//  FUNGSI IMPORT
// ============================================================

async function importCollection(collectionName, data) {
  console.log(`\n📁 Import ${collectionName}...`);
  const entries = Object.entries(data);
  for (const [id, payload] of entries) {
    await db.collection(collectionName).doc(id).set(payload);
    console.log(`   ✅ ${collectionName}/${id}`);
  }
  console.log(`   → ${entries.length} dokumen berhasil diimport`);
}

async function main() {
  console.log("🔥 Mulai import data ke Firestore (Admin SDK)...");
  console.log("   Project: portofolio-mifta\n");

  try {
    await importCollection("projects", projects);
    await importCollection("certifications", certifications);
    await importCollection("experience", experience);

    const total =
      Object.keys(projects).length +
      Object.keys(certifications).length +
      Object.keys(experience).length;

    console.log(`\n🎉 Selesai! Total ${total} dokumen berhasil diimport.`);
    console.log("🔗 Cek di: https://console.firebase.google.com/project/portofolio-mifta/firestore");
  } catch (err) {
    console.error("\n❌ Import gagal:", err.message);
    console.error("   Pastikan serviceAccountKey.json ada dan valid.");
  } finally {
    process.exit(0);
  }
}

main();