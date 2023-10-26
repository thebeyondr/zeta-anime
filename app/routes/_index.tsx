import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "zeta" },
    { name: "description", content: "Best anime and manga website" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime')
    return response.data
  } catch (errors) {
    console.error(errors)
    return null
  }
};

export default function Index() {
  const animeData = useLoaderData<typeof loader>();
  const topAnime = animeData.data

  return (
    <main className="p-6">
      <Link to="/"><Button variant={"outline"} className="text-lg rounded-full font-bold">ζ</Button></Link>
      <div className="py-4"></div>
      <h1 className="text-7xl font-medium tracking-tight">zeta</h1>
      <p className="text-muted-foreground">Anime and manga at your finger tips</p>
      <p className="text-muted-foreground font-mono"><span className="text-primary">{'>'}</span> testing bun and Remix</p>
      <div className="p-4"> </div>
      {topAnime &&
        (<section>
          <h2 className="text-3xl font-bold">Most popular</h2>
          <div className="p-3"></div>
          <div className="flex flex-wrap gap-6 w-full">
            {topAnime.map((anime: any) => (
              <div className="group w-52 relative overflow-hidden rounded-lg hover:cursor-pointer border-2 border-secondary" key={anime.mal_id} title={anime.title}>
                <img src={anime.images?.webp.large_image_url} alt={anime.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform ease-out" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 ease-in-out"></div>
              </div>
              // <Card key={anime.mal_id}>
              //   <CardHeader>
              //   </CardHeader>
              //   <CardContent>
              //     <CardTitle>{anime.title_english}</CardTitle>
              //     <CardDescription>{anime.title_japanese}</CardDescription>
              //     <p className="line-clamp-3 overflow-hidden">{anime.synopsis}</p>
              //   </CardContent>
              // </Card>
            ))}
          </div>
        </section>)}
    </main>
  );
}
