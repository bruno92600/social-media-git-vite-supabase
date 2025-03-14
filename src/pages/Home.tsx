import { PostList } from "../components/PostList";

export const Home = () => {
  return (
    <div className="pt-10">
      <h2 className="text-6xl font-bold mb-6 h-20 text-center bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
        Publications récentes
      </h2>
      <div>
        <PostList />
      </div>
    </div>
  );
};
