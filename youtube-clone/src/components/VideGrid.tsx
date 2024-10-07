import { VideoCard } from "./VideoCard";

const Videos = [
    {
        title: "Killgill123 - The Best Player in the World",
        channel: "Killgill123",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "Warzone tips and tricks",
        channel: "Killgill123",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    },
    {
        title: "random ass video",
        channel: "idk",
        views: "1.2M",
        date: "1 week ago",
        channelimage: "profile.jpg",
        thumbnail: "photo.jpg"
    }
]

export function VideoGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {Videos.map(video => <div>
                  <VideoCard 
                    title={video.title}
                    channelimage={video.channelimage}
                    thumbnail={video.thumbnail}
                    views={video.views }
                    date={video.date}
                  />
              </div>)}
        </div>
    );
}