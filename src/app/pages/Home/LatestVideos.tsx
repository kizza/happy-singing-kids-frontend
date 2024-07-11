import Title from "@/components/Title"
import YouTube from "@/components/YouTube"
import { YOUTUBE_URL } from "@/consts"
import classnames from "classnames"

export default function LatestVideos() {
  return <div className={classnames("inner")}>
    <Title styles={["text-aqua"]}>
      Watch the latest videos
    </Title>
    <p>And check out <a href={YOUTUBE_URL}>the full collection</a> on YouTube.</p>
    <div className="md:grid md:grid-cols-2 md:gap-6 md:gap-y-10 my-4">
      <YouTube src="https://www.youtube.com/embed/videoseries?si=EF44vLkT0Vy_6MR0&amp;list=PL9mOhnHTMV-FdwyAe35qQnawNUcfu8GKm" title="Mystery Alphabet Reveal Series" />
      <YouTube src="https://www.youtube.com/embed/videoseries?si=JodT8qCQ1gOCbyIR&amp;list=PL9mOhnHTMV-G_oTvYfDZYFvQxs5gHQDrx" title="Happy Highlights: Fun Favourites from Happy Singing Kids" />
      <YouTube id="ffcZOl1QKMc" title="Teddy Bear you're the best!" />
      <YouTube id="fdd5Wd6mDB4" title="Uh oh spaghetti-oh!" />
    </div>
    <p>Want more? There are <a href={YOUTUBE_URL}>more videos here</a>.</p>
  </div>
}
