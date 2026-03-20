// Password check
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const correctPassword = "syakira16"; // Change this to your desired password
  
  if (passwordInput === correctPassword) {
    document.getElementById("passwordContainer").style.display = "none";
    document.getElementById("letterContent").style.display = "flex";
  } else {
    const errorMsg = document.getElementById("errorMessage");
    if (errorMsg) {
      errorMsg.remove();
    }
    const error = document.createElement("p");
    error.id = "errorMessage";
    error.className = "error-message";
    error.textContent = "❌ Password is incorrect. Try again!";
    document.querySelector(".password-container").appendChild(error);
    document.getElementById("passwordInput").value = "";
    document.getElementById("passwordInput").focus();
  }
}

// Allow Enter key to submit password
document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput) {
    passwordInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        checkPassword();
      }
    });
  }
});

// Multiple messages/parts
const messages = [
  `HAPPY BIRTHDAY SYAKIRA!!! 🎉🎂✨\n\nHari ini special banget for you...\n\nSelamat ulang tahun yang ke-16 syaaa!! \nSemoga di umur ini kamu terus berkembang menjadi lebih baik 💙`,
  `Makasih ya Syakira Azikya Hamda... \n\nSelama 3 menjelang 4 tahun kamu udah hadir di hidup aku dan 1 menjelang 2 tahun aku ga melihat eksistensi mu. Semenjak kamu ada, udah banyak banget yang aku lalui.\n\nAku mau cerita dulu gimana awalnya (lengkap). Aku ga pernah ngomong ini ke kamu, jadi dulu awalnya aku masuk Insan Kamil dan temen aku cuma Aqil Ilham dan Lita.`,
  `Kebetulan aku duduk sama Ilham pas awal kelas 7. Kelas kita masih di bawah, itu yang kelasnya 7-4 dan seberang aku ada Lita. \n\nAku pernah nyeletuk "Gaada angin dan ga lagi ngomongin apa?" ke Ilham. Terus aku bilang ke Ilham, "Ham, lu suka ya sama itu yang di depan (ITUUU KM)?"\n\nKata Ilham, aku inget dikit gini: "Apaansi tiba tiba lu, kali lawak, gituuu ituuu?" \n\nPosisinya aku belum kenal kamu terus kalau gasalah temen kamu Nabila itu denger dan ngasih tau nama kamu. Yaaa, mulai dari situ aku tau nama kamu: SYAKIRA.`,
  `Selang waktu berjalan, aku masih memendam aja. Bahkan temen aku kaya Depin dan Patir gatau. Mereka taunya pas kelas 8 akhir. Sebelum itu mereka juga nuduh-nuduh aja.\n\nOiya, aku mau minta maaf soal itu! Aku inget suatu hal: jadi dulu aku inget bgt kita kan lagi nyatat gitu ya, ngeliat di papan tulis. Dan disitu si Cikal tiba tiba ngeledekin kamu kaya nyomblangin. Terus aku gatau perasaan kamu gimana.`,
  `Aku inget waktu itu kamu nimpuk Cikal pake mesin serutan. AKU NGERASA GAENAK BGT DI SITU! Kamu kayaa marah bgt. Aku gabisa berbuat apa apa. Dulu aku masih penakut bgt juga.\n\nDan aku inget hal kecil deh. Dulu aku sengaja nulis di depan di bawah papan tulis biar aku bisa deket kamu aja. PADAHAL DARI PALUNG BELAKANG BGT JUGA MASIH JELAS ITU PAPAN TULIS!`,
  `Aku pernah inget perkataan dari kamu deh. Kamu pernah bilang pas aku lagi nulis di bawah: "Good looking doang, blablablabla gaada." Di bagian bla bla nya itu aku lupa kamu ngomong apa. Aku juga ga denger, terus aku minta kamu buat ngulangin. Tapi kamu gamau (seinget aku gitu ya).\n\nAda banyak bgt pengalaman seru semasa kelas 7! Aku juga inget pas kamu jatuh. Disitu aku awalnya tidur di kelas. Temen aku bilang, "Syakira jatuh!"`,
  `Terus temen aku ngeledekin: "Woi! Woi sih! Tolongin noh Syakira yaaa!" Gitu kurang lebih. DISITU AKU GAENAK BGT! Rasanya pengen nolongin, cuma di posisi itu aku gamau keliatan sama kamu. Yaelah, aneh bgt emang bocil.\n\nTerus selang beberapa hari atau minggu gitu, aku juga jatuh dari sepeda. NAHH, temen aku nyomblangin lagi: "Cieee sama sama jatuh!" Kampret emg, tapi nih ya Syak, aku sumpah deh di posisi itu mereka belum tau kalo aku naruh perasaan sama kamu.`,
  `Dan mereka udah ngeledekin begitu! Bahkan temen aku yang deket bgt kaya Patir sama Depin aja gatau. Mereka taunya pas pertengahan kelas 8. Terus aku sempet nanya ke Depin: "Pin, kenapa dari dulu lu ledekin gua? Kan gua ga pernah ngasih tau!"\n\nDepin jawab: "Karna cocok aja, ego lu ih!" DISITUUUU AKU SALTING DLM HATI WKWKWK\n\nMaaf ya Syaki kalo kamu kurang enak. Lanjut yaa...`,
  `Aku disitu takut kamu risih sebenernya. Ga bohong, tanya aja temen temen aku, aku selalu nanyain: "Syaki risih ga ya? Dia ngerasa nyaman ga ya kalau gua giniin?" \n\nJawaban mereka ya selalu positif dan suportif. Nah iya, semenjak kamu pergi ke Batam, disitu aku beneran sedih bgt (gengsi). Kan kondisinya aku lagi ga deket sama kamu, yaaa disituuuu.`,
  `Kita kan lost kontak sama ga lost kontak kan udah sering. Ya isoke, mungkin kita berdua perlu boundaries. Lagipula emang kita ada status sosial yang berbeda 😊😏\n\nSEBELUM LANJUT, AKU MAU KLARIFIKASI BIAR GA SOMBONG ATAU NPD GITUUU YA SYAKI!\n\nAku gamau sombong! Aku mau jujur aja. Jadi gini: setelah kamu pergi, ada beberapa orang yang suka sama aku. Baik adik kelas dan seangkatan sama kita.`,
  `Temen temen kamu tuh juga ada. AKU GA NGERASA KEBANGGAAN SAMA SEKALI, tapi emang dari cara mereka chat, aku juga keliatan 😏\n\nDari banyaknya orang yang chat, aku responnya jahat Syak. Aku merasa bersalah sama mereka karna sombong. Terusss, ada suatu masa ada orang yang suka sama aku. Lalu karna dia gaberani nyampein, ya dia nyampein lewat nisfu pacarnya Depin.`,
  `Dia nanya tipenya Faqih kaya gimana. Tanpa harus butuh verifikasi dari aku, si Depin juga tau jawabannya. Terus Depin jawab..... YAAA KM TAU LAH JAWABNYA!\n\nEmang Depin tuh best friend banget. \n\nTerusss, aku mau ceritain selama aku di SMK. Mulai dari lingkungan sosial, akademik dsb. PERTAMA, aku mau minta maaf ya Syaki! Kalau kamu ngerasa jealous atau gonna be mad...`,
  `MAAF BGT aku mau jujur! Aku pernah interest sama seseorang gitu dan aku juga gakenali dia. Ya, aku cuma main akun aja. Terus aku sempet chat dia, yaudah biasa aja. Gaada chat intens juga. Pokonya aku baru 6 bubble chat aja Syakk!\n\nSoalnya aku pernah mikir gini Syak: MAAF BGTTT TAUU...  \n\nPas aku suka sama seseorang, aku kayaa mikirin... aku jahat ga? Tanpa sepengetahuan kamu?`,
  `Ya, aku mikir juga: kita siapa? 😞 Who's kita? \n\nAku pernah mikir: masa masa SMA kaya gini gabakal bisa aku rasain 2 kali. Jadi minimal banget aku ngerasain hal yang ga pernah aku rasain. Dan aku mikirnya kaya highschool romance gt, TAU GA SII? ADUUHH FREAK BGT.\n\nTerus aku mikir lagi kaya: "Puas puasin masa muda lu. Kalau udah puas, balik ke gua."`,
  `Aku juga teringat lirik lagu Daniel Caesar: \n\n"And I'll be here\n'Cause we both know how it goes\nI don't want things to change\nI pray they stay the same, always\nAnd I don't care\nIf you're with somebody else\nI'll give you time and space\nJust know I'm not a phase"\n\nAku minta maaf ya kalau kesannya kaya pola pikir bocah. Maaf banget. Aku cm mau jujur aja masalah kamu nerima apa engga ya, isoke itu keputusan kamu.`,
  `OH IYAA SYAKI! SUMPAH AKU SERING BGT MIMPI TENTANG KAMU! \n\nIni tuh beneran sering, bukan ke arah negatif ya Syaki. Aku selalu mimpi kamu tuh di dunia fantasi gitu. Aku lagi main sama kamu, kaya gituuu. Aku have fun dan ga jarang juga aku nyadar kalo itu mimpi dan aku ngikutin alurnya aja karna aku gabisa ketemu kamu di real life.`,
  `Ya, di mimpi isoke lah! Pokonya seru bgt dehhhh! \n\nDan aku juga pernah tuh: pas kamu bilang kamu mau ke Inका, dan PAS BGT MALEMNYA AKU LANGSUNG MIMPI KAMU DI SITU! Aku mikirin banget kaya: "Ko bisa ya woi?"\n\nEiya Syak, btw, akuuu banyak nulis puisi tentang kamu. Di akun third aku yang puisi pertama, gatau kamu udah baca apa engga. Itu juga buat kamu! Dan puisi puisi lainnya yang ada di akun itu juga untuk kamu. Gatau kamu udah baca apa belum.`,
  `Dan aku juga pernah gambar kamu tau! Maaf ya, aku ga ngasih tau kamu dan ga izin. Karna aku takut kamu bakal risih malahhh.\n\nOiya Syaki, akuuu binggung deh mau cerita apalagi. Sebenernya masih banyak, cuma aku blank aja. Tadi pesan yang sebelumnya tuh bagus bgt cuma keapus.`,
  `SEBAGAI PENUTUPAN, AKUU MAU MINTA MAAFFFFFFFFFF BANGETTTTT! \n\nDeep apology untuk berbagai hal. Maaf kalo aku pernah buat kamu marah, jeles, badmood, sedih, binggung dan sebagainya.\n\nDan aku juga mau ngucapin MAKASIHHHH BANGETT! KARNA UDAH JADI SYAKIRA!!! MAKASIHH YAAA SYAKIRA!!! SYAKIRAAAAA AAAAJAJEHWKWUWHWBWJWJWJS!!!`,
  `Atas segala hal lainnya, dimulai dari:\n- Respon aku\n- Ngedengerin cerita aku\n- Ngebantuin buat keputusan\n- Ngasih aku hadiah\n- DIY\n- Mabar Roblox\n- Baik, ramah, CANTIKKKKKKK\n- DAN LAIN LAIN DAH BANYAK BGT!\n\nGMW kebanyakan nanti kamu sombong 😏`,
  `OIYAA SYAKI! Aku mauuu bilang: I'LL ALWAYS LOVE YOU! \n\nBahkan kalo kamu with somebody else! Idfc! Pokonya kamu pasti selalu aku inget dalam hidup aku.\n\nIbarat nya, kalau aku jadi series yang punya 5 season dan kamu hadir di season 2 dan masih berlanjut sampai season berikutnya. Dan aku harap kalo aku pulang lebih dulu, kamu baca pesan ini ya SYAKIRAAA AZIKYA HAMDA! Jelek 😏`,
  `Rasanya masih kependekan deh pesan ini. Oiya, ini aku baru inget mau nambahin!\n\nSyakira, kalo kamu inget itu tu yg Spotify Blend. Waktu itu aku pencet apa batalin kalo gasalah atau gatau. Itu maaf banget Syak! Aku mikir gini waktu itu: aku pengen keep boundaries aja karna aku sempet salah sangka.`,
  `Pas itu aku denger kamu dibonceng gitu. Aku denger dari temen kamu. Tapi masih ambigu. Syak, aku jg mau bilang deh!\n\nAku ngerasa berubah banget dari diri aku di SMP. Aku ngerasa bisa berkembang. Aku juga pernah bilang ke kamu: "Aku kurang fokus akademik."\n\nItu bener, tapi akhir akhir ini aku mau memperbaiki itu semuaa! Aku mau belajar manage waktu (beneran). Ga gimik btwww!`,
  `Yang soal wakil itu, aku udah ambil keputusan dan kebetulan aku menang voting. MAKASIHH ya Syaki! Waktu itu udah ngasih beberapa saran.\n\nSegitu aja dehhh! Nanti kalo mau nanya'in sesuatu ke aku, chat aja yh? Gausa sungkan!\n\nI'LL BE GENUINE TO YOU! 💙`,
  `SEMOGA DI UMUR KM YANG UDAH MENYENTUH 16 TAHUN INI...\n\nKamu selalu jadi lebih baik di setiap waktu yang akan mendatang. Semoga semua plan kamu tercapai. Semogaa kamu selalu diberi kelancaran dan solusi di setiap permasalahan yang kamu lalui.\n\nJangan lupa selalu utamain diri sendiri ketimbang orang orang di sekitar kamu. TAKE CARE OF YOURSELF FIRST!`,
  `Oiya, titip pesan juga yh! Untuk siapa pun kalo kamu berminat untuk nyampein. Terutama Mamah (walau ga kenal aku).\nAku harap juga kamu ga pernah terjerumus ke pergaulan yang salah. Jujur, pergaulan Batam tuh sialan bangetttttt! \n\nSemogaa kamu selalu sehat! Intinya, semoga yang di "semogakan" tercapai. 💙`,
  `OIYA...\n\n"If fate writes me away from you, just remember… my heart once rested in your name"\n\n— Syakira Azikya Hamda\n\nAku juga ngerasa alay nulis ini, ya aku cuma pengen ngomong sejujurnya aja.\n\nSELAMAT ULANG TAHUN SYAKIRA AZIKYA HAMDA! 🎉🎂✨\n\nI LOVE YOU, ALWAYS. 💙`
];

let currentMessageIndex = 0;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    
typeWriterSequence();
  }, 600);
}

function typeWriterSequence() {
  if (currentMessageIndex < messages.length) {
    typeMessage(messages[currentMessageIndex]);
  }
}

function typeMessage(message) {
  const typedText = document.getElementById("typedText");
  typedText.innerHTML = ""; // Clear previous text
  
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typedText.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    } else {
      // Message finished, wait then move to next
      setTimeout(() => {
        currentMessageIndex++;
        typeWriterSequence();
      }, 2000); // 2 second pause between messages
    }
  }

  typeWriter();
}