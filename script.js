const videos = [
  {
    title: "The Bell in the Walls",
    channel: "Night Signals",
    views: "149K views",
    age: "2 days ago",
    duration: "08:42",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Ride the Static",
    channel: "Static Archive",
    views: "83K views",
    age: "4 days ago",
    duration: "11:08",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Hospital Hallway Recording",
    channel: "Old Broadcast",
    views: "204K views",
    age: "1 week ago",
    duration: "06:27",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "What Was Behind the Red Door",
    channel: "Open Channel",
    views: "92K views",
    age: "3 weeks ago",
    duration: "13:41",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "No Signal, No Sleep",
    channel: "Night Signals",
    views: "328K views",
    age: "1 month ago",
    duration: "09:54",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "The Last Upload",
    channel: "Static Archive",
    views: "492K views",
    age: "2 months ago",
    duration: "17:12",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
  },
];

const grid = document.getElementById("videoGrid");

grid.innerHTML = videos
  .map(
    (video) => `
      <article class="video-card">
        <div
          class="thumbnail"
          style="background-image: linear-gradient(180deg, rgba(16,16,18,0.12), rgba(16,16,18,0.52)), url('${video.image}');"
        >
          <span class="duration">${video.duration}</span>
        </div>
        <div class="card-meta">
          <div class="channel-avatar">${video.channel.charAt(0)}</div>
          <div class="video-copy">
            <h3>${video.title}</h3>
            <p>${video.channel}</p>
            <p>${video.views} • ${video.age}</p>
          </div>
        </div>
      </article>
    `
  )
  .join("");
