import { CreatePost } from "../components/CreatePost";

export const CreatePostPage = () => {
    return (
        <div className="pt-20">
            <h2 className="text-6xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">Créer une nouvelle publication</h2>
            <CreatePost />
        </div>
    )
};