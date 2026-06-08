(function () {
  const fallbackNews = [
    {
      id: 1,
      slug: 'transformasi-infrastruktur-digital-2030',
      category: 'UTAMA — POLITIK',
      title: 'Transformasi Infrastruktur Digital: Visi 2030 Untuk Kemajuan Nasional Indonesia',
      excerpt: 'Pemerintah secara resmi meluncurkan inisiatif baru yang bertujuan untuk menghubungkan setiap desa di nusantara dengan internet kecepatan tinggi.',
      author: 'Adi Wijaya',
      date: '24 Oktober 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT8c_Bs2ctKw4Y6tEKhH4lvJfZZhl0Zo5uYhTfYsRU13kT9GcnsjdqSGJy9kz3lgbMm5jFf4HbNH200mXwFUV_SciIOLiwdKPcHKbrQG8INUJBU20ChFO02YRN4_FWIw4yj6_8IwT50L-dE-dQ_ZfvxELcnWIiAYsDtp3qx50VjKGn2n6ISbFVseVD0z-aVWB-olnDbJFC0QJWf8rw4qUjh1UHOA213lz-CcG8BIiAihdCLViOxf5jxLPF0OVQTDtACSVFxSwP2qA'
    },
    {
      id: 2,
      slug: 'lonjakan-investasi-asing-manufaktur-jawa-tengah',
      category: 'BISNIS',
      title: 'Lonjakan Investasi Asing di Sektor Manufaktur Jawa Tengah',
      excerpt: 'Para investor global mulai melirik potensi besar di kawasan industri baru yang sedang berkembang pesat dengan insentif pajak menarik.',
      author: 'Bambang Susanto',
      date: '24 Oktober 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABHIwR9mj9H9C6hCUCacsKHv8Xlp0B871aXAyIIxJKEnj_v7uJmM7hjG8P6FUU9BkyyDW7nqySvXp7J2bcoGzH4ZUCweLV8hVe03N5Tq2wEcm_bzu3UyIODAaqQU8zh_1ISJOml2DlpXKcUCg7aHGaJfTCrkawMIO-XkdIZniHCfKDGNasj5T6PDbL-3u3ZpOZoqLa_nlWm50Bc_NtKGVxYyG9tlvWfBrfZ1G0-eOeLHuWBP8QyFZxcBRQEgH15ml0WD7ASx-k1lI'
    },
    {
      id: 3,
      slug: 'startup-lokal-menembus-pasar-global-ai-suara',
      category: 'TEKNOLOGI',
      title: 'Startup Lokal Menembus Pasar Global Melalui AI Suara',
      excerpt: 'Inovasi dalam pengenalan suara bahasa daerah membawa perusahaan rintisan asal Yogyakarta ini meraih pendanaan seri B besar.',
      author: 'Riska Amalia',
      date: '23 Oktober 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVg5iG-Q2iY03w3GtOXW0wkL7AbOpM6xvPKof5G-2Bzm55e5rRCkSUrT2tInTxFLRhPY-bBhn-ouFz_TM-F1acIpgUHRBfg5Qcc8m6vftv2o19uMlaMQyhbQVzEEVaizPQjo_HAPicca1oAheqrctiX4wAkZU2NV8xDhBAJFb3AqNKjCR-Iww7F_G-um1Oj7WY38Ab4ZX4MG3LOy7dSQ820Mrpug_CQ9vbVsNnafD7ac6b1jk9TFsUKklbfjzWbFX3jQYfC-6oNlM'
    },
    {
      id: 4,
      slug: 'revisi-kurikulum-nasional-literasi-digital',
      category: 'PENDIDIKAN',
      title: 'Revisi Kurikulum Nasional Fokus pada Literasi Digital',
      excerpt: 'Perubahan besar dalam sistem pendidikan akan mulai diterapkan tahun depan untuk membekali siswa dengan keahlian masa depan.',
      author: 'Eko Prasetyo',
      date: '23 Oktober 2024',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9cEsaqbSUHFNCkl9CwmQUe46a0CS-f0K4U-TutaUzqSieh7kKs2wdjwDcEZRUW-ehBoODSOJf44yKaF2XAxkVElGUvHm3PkKdliTRQAPX0gjiR2OuGRvf1U0jb27LItzWiilkDQN8ku2tH2QVVSE-VOttHxOoxEqH6K5fKr0UPmsYBykMkY_jfpIIinIOaHL6t9rrmVQcABXrs2z5EGgoUw8kRCA7q7Lkvk3FfxA4WBHVwxte-1xzkzPwTo6fiNcTJV-EFo9kKag'
    },
    {
      id: 5,
      slug: 'ihsg-menguat-tipis-sentimen-suku-bunga',
      category: 'MARKETS',
      title: 'IHSG Menguat Tipis di Tengah Sentimen Suku Bunga Global',
      excerpt: 'Pasar saham domestik menutup perdagangan dengan kenaikan tipis menyusul ekspektasi pelonggaran kebijakan moneter.',
      author: 'Sari Putri',
      date: '2 jam yang lalu',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvAFjgSBUIRuWUTOt-jqgm30e1-ayGoKIJNg64DF8f9BH7iGl6HeW5GCPdTPr1QUZabJ6pim8rUWqSu2GydEvAHk0CriChjZYZsWyBqmvdZekO86QjpvSo-yUuhmhHO8aQW4Cilv_KXCO7rvzQ7DmMj_76u76spze-l9D5q8al-SdydsnbuQmh03nbSeWMGI38OsqtkgjRpn47_CQ6e__uwifHl0GI8r9GObkjCqsEQ9QnEXwAq66_So5yIfQrso6NdLw-NTsadaM'
    },
    {
      id: 6,
      slug: 'cbdc-masa-depan-rupiah-digital-bi',
      category: 'TECH',
      title: 'CBDC: Masa Depan Rupiah Digital di Tangan BI',
      excerpt: 'Bank Indonesia terus memajukan riset digital rupiah sebagai langkah strategis di era transaksi cashless.',
      author: 'Rizki Anwar',
      date: '5 jam yang lalu',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA68iteDS05758cslIdRmPVdnmZpCNAu18QV822EQYSUCBLQgLuBc3466i-w2vPTfsTHgOfoWNzd2UQAWuhYtWz0q2AsQsObIGMBAKeTSVTXtBuIxBfcD1hp0TcMJ0y1MFG72Qro6t8clzFlgSMX7btk4ZPh7Iy051EO3CpYgJuBnnHBujQO2IDFbVE9dHYIfEjC9-eXpJT5Ca2EJKtwFbUzwOITZyv1vj6xiqXT69AcWsv1Fi6iGcLfeGJQMVy-prMXQIOVtRwdM4'
    }
  ];

  function renderCard(item, variant) {
    if (variant === 'related') {
      return `
        <div class="group cursor-pointer news-card">
          <img alt="${item.title}" class="w-full aspect-[16/9] object-cover mb-3 rounded" src="${item.image}" />
          <span class="font-label-md text-caption text-secondary uppercase">${item.category}</span>
          <h4 class="font-headline-md text-[18px] leading-tight text-primary group-hover:text-secondary mt-1 transition-colors">
            <a class="after:absolute after:inset-0" href="artikel.html?slug=${item.slug}">${item.title}</a>
          </h4>
          <p class="font-caption text-caption text-on-surface-variant mt-2">${item.date}</p>
        </div>`;
    }

    return `
      <article class="group relative flex flex-col sm:flex-row gap-6 p-4 hover:bg-white hover:shadow-md transition-all border-b border-outline-variant pb-8 last:border-0 news-card">
        <div class="sm:w-48 h-32 flex-shrink-0 overflow-hidden bg-surface-container rounded">
          <img alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${item.image}" />
        </div>
        <div class="flex-grow">
          <span class="font-label-md text-caption text-secondary uppercase font-bold tracking-wider mb-2 block">${item.category}</span>
          <h3 class="font-headline-md text-headline-md text-primary group-hover:text-secondary transition-colors mb-2">
            <a class="after:absolute after:inset-0" href="artikel.html?slug=${item.slug}">${item.title}</a>
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">${item.excerpt}</p>
          <div class="flex items-center gap-3 font-label-md text-caption text-on-surface-variant">
            <span class="font-bold text-on-surface">${item.author}</span>
            <span class="text-outline-variant">|</span>
            <span>${item.date}</span>
          </div>
        </div>
      </article>`;
  }

  function applyNews(container, items, variant) {
    if (!container) return;
    container.innerHTML = items.map((item) => renderCard(item, variant)).join('');
    container.dispatchEvent(new CustomEvent('news:rendered', { detail: { variant }, bubbles: true }));
  }

  function renderDetail(item) {
    const category = document.getElementById('article-category');
    const title = document.getElementById('article-title');
    const author = document.getElementById('article-author');
    const date = document.getElementById('article-date');
    const image = document.getElementById('article-image');
    const caption = document.getElementById('article-caption');
    const body = document.getElementById('article-body');
    const sourcesContainer = document.getElementById('article-sources');

    if (category) category.textContent = item.category;
    if (title) title.textContent = item.title;
    if (author) author.textContent = item.author;
    if (date) date.textContent = item.date;
    if (image) {
      image.src = item.image;
      image.alt = item.title;
    }
    if (caption) caption.textContent = `${item.title} — ${item.category}`;
    
    // --- PERUBAHAN DI SINI ---
    if (body) {
      // Jika di JSON ada properti 'body', tampilkan isi 'body'. 
      // Jika tidak ada, tampilkan 'excerpt' sebagai cadangan agar halaman tidak kosong.
      body.innerHTML = item.body ? item.body : `<p class="font-body-lg text-body-lg text-on-surface leading-relaxed">${item.excerpt}</p>`;
    }

    if (sourcesContainer) {
      // Cek apakah artikel memiliki data sumber dan datanya berupa array
      if (item.sumber && Array.isArray(item.sumber) && item.sumber.length > 0) {
        
        // Looping data sumber menggunakan .map()
        sourcesContainer.innerHTML = item.sumber.map((src) => {
          return `
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[18px] text-secondary">link</span>
              <a href="${src.link}" target="_blank" rel="noopener noreferrer" class="hover:text-primary transition-colors underline decoration-dotted">
                ${src.judul}
              </a>
            </li>
          `;
        }).join(''); 

      } else {
        sourcesContainer.innerHTML = `<li class="text-on-surface-variant italic">Tidak ada sumber acuan spesifik.</li>`;
      }
    }

    document.title = `${item.title} | News Syndicate`;
  }

  function loadNews() {
    fetch('data/news.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load data/news.json');
        return response.json();
      })
      .then((items) => {
        const homeList = document.getElementById('news-list');
        const relatedList = document.getElementById('related-news');

        if (homeList) applyNews(homeList, items.slice(0, 4), 'home');
        if (relatedList) {
          const slug = new URLSearchParams(window.location.search).get('slug');
          const activeArticle = items.find((item) => item.slug === slug) || items[0];
          const relatedItems = items.filter((item) => item.slug !== (activeArticle && activeArticle.slug)).slice(0, 4);
          applyNews(relatedList, relatedItems, 'related');
          if (document.getElementById('article-title')) renderDetail(activeArticle);
        }
      })
      .catch(() => {
        const homeList = document.getElementById('news-list');
        const relatedList = document.getElementById('related-news');

        if (homeList) applyNews(homeList, fallbackNews.slice(0, 4), 'home');
        if (relatedList) {
          const slug = new URLSearchParams(window.location.search).get('slug');
          const activeArticle = fallbackNews.find((item) => item.slug === slug) || fallbackNews[0];
          const relatedItems = fallbackNews.filter((item) => item.slug !== (activeArticle && activeArticle.slug)).slice(0, 4);
          applyNews(relatedList, relatedItems, 'related');
          if (document.getElementById('article-title')) renderDetail(activeArticle);
        }
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNews);
  } else {
    loadNews();
  }
})();
