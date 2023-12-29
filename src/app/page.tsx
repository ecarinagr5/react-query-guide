"use client";
import { useQuery } from "@tanstack/react-query";
import Card from "./components/Card/Card";
import getMovies from "./api/getMovies";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getMovies(),
    queryKey: ["movies"], //Array according to Documentation
  });

  const loading = () => {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  };
  if (isLoading) return loading();
  if (isError) return <div>Sorry There was an Error</div>;

  return (
    <div className="container mx-auto">
      <h1 className="p-5 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center font-bold">React Query Movies</h1>
      <div className="grid grid-cols-4 gap-4 p-10">
        {data?.results?.map(
          (movie: { id: number; title: string; poster_path: string }) => {
            return (
              <Card
                key={"movie" + movie.id}
                title={movie.title}
                image={movie.poster_path}
              ></Card>
            );
          }
        )}
      </div>
    </div>
  );
}
