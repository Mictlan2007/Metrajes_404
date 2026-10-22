const videoData = [
  {
    title: 'Signal From the Sixth Floor',
    channel: 'Archive 47',
    views: '1.3M',
    date: '3 days ago',
    duration: '12:47',
    badge: 'ARCHIVE',
    tag: 'haunted',
    accent: 'linear-gradient(135deg, #2b1f2d 0%, #4b2b50 40%, #7d5a8a 100%)',
    url: 'https://www.youtube.com/watch?v=3tmd-ClpJxA'
  },
  {
    title: 'The Basement Window',
    channel: 'Night Watch',
    views: '845K',
    date: '5 days ago',
    duration: '08:21',
    badge: 'UNLISTED',
    tag: 'unknown',
    accent: 'linear-gradient(135deg, #0f1d2f 0%, #183d5c 45%, #62a8b8 100%)',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  },
  {
    title: 'Corner Store After Midnight',
    channel: 'Forgotten Video',
    views: '632K',
    date: '1 week ago',
    duration: '10:13',
    badge: 'LOCAL',
    tag: 'urban',
    accent: 'linear-gradient(135deg, #1f1c19 0%, #454231 40%, #b38d4d 100%)',
    url: 'https://www.youtube.com/watch?v=2Vv-BfVoR4g'
  },
  {
    title: 'Pedestrian Loop 03',
    channel: 'Out of Frame',
    views: '410K',
    date: '2 weeks ago',
    duration: '06:48',
    badge: 'FOUND',
    tag: 'surveillance',
    accent: 'linear-gradient(135deg, #0b1a18 0%, #285750 45%, #7bc7b3 100%)',
    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ'
  },
  {
    title: 'The Red Phone Line',
    channel: 'Call Sign 404',
    views: '980K',
    date: '3 weeks ago',
    duration: '15:02',
    badge: 'SUSPECT',
    tag: 'haunted',
    accent: 'linear-gradient(135deg, #2b1818 0%, #5d2121 40%, #d15c5c 100%)',
    url: 'https://www.youtube.com/watch?v=2Vv-BfVoR4g'
  },
  {
    title: 'Maintenance Room B',
    channel: 'Obsidian Files',
    views: '310K',
    date: '1 month ago',
    duration: '09:07',
    badge: 'ARCHIVE',
    tag: 'unknown',
    accent: 'linear-gradient(135deg, #121214 0%, #363746 42%, #8c97d8 100%)',
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  }
];

const feed = document.getElementById('video-feed');
const filterButtons = document.querySelectorAll('.chip');

function renderVideos(filter = 'all') {
  if (!feed) return;

  const visibleVideos = filter === 'all'
    ? videoData
    : videoData.filter((video) => video.tag === filter);

  feed.innerHTML = visibleVideos
    .map(
      (video) => `
        <article class="video-card" data-tag="${video.tag}">
          <a href="${video.url}" target="_blank" rel="noreferrer">
            <div class="card-thumb" style="background: ${video.accent};">
              <span class="card-badge">${video.badge}</span>
              <span class="card-duration">${video.duration}</span>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span>${video.views} views</span>
                <span>${video.date}</span>
              </div>
              <h3 class="card-title">${video.title}</h3>
              <div class="card-channel">${video.channel}</div>
            </div>
          </a>
        </article>
      `
    )
    .join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((chip) => chip.classList.remove('active'));
    button.classList.add('active');
    renderVideos(button.dataset.filter);
  });
});

renderVideos();
