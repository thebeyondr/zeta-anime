import type { LoaderFunctionArgs } from "@remix-run/node";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react";
import axios from "axios";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}/full`)
    return response.data
  } catch (errors) {
    console.error(errors)
    return null
  }
};

export default function RouteComponent() {
  const responseData = useLoaderData<typeof loader>()
  const animeData = responseData.data
  console.log({animeData})

  return (
    <div className="h-96">
      <div style={{ backgroundImage: `url(${animeData.images.webp.large_image_url})`}} className="h-full w-full bg-fit"></div>
      <h1 className="text-4xl font-bold">{animeData.title}</h1>
      <p className="text-lg">{animeData.synopsis}</p>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <h2>Somethin went wrong</h2>
  }
  return <div />
}