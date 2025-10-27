import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/atoms/Button";
import { openDrawer } from "@/features/posts/postsSlice";
import { useAppDispatch } from "@/store/hooks"; 
import { PostCard } from "@/components/organisms/PostCard";
import { CommentsSection } from "@/components/organisms/CommentsSection";

export const Drawer = () => {

    const {isOpen, post} = useAppSelector(state => state.posts.drawerContent);
    const dispatch = useAppDispatch();
  
    return (
    <div
      className={`fixed top-0 right-0 z-40 h-screen p-4 transition-transform bg-black/60 w-[100%] border-l border-platinum ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      aria-labelledby="drawer-right-label"
    > 
      <Button
        variant="icon"
        className="bg-transparent z-1 border-none font-bold absolute top-4 right-4 text-platinum text-2xl"
        onClick={() => dispatch(openDrawer({isOpen: false, post: null}))}
      >
        X
      </Button>
      <aside className="fixed top-0 right-0 h-screen mb-4 rounded-l-lg overflow-y-auto w-[100%] md:w-[50%] lg:w-120 border-l border-platinum bg-oxford-blue/70 shadow-lg backdrop-blur-lg">
        <main className="relative">
          {
            !post && <p className="text-platinum p-5">No Post Selected</p>
          }
          {
            post && (
              <>
                <div>
                  <PostCard {...post} withComments={false} fullText={true} images={post.images}/>
                </div>
                <div className="border-t border-t-platinum/20">
                  <h3 className="font-bold text-platinum px-5 py-2">Comments:</h3>
                  <CommentsSection comments={post.comments || []} postId={post.post_id}/>
                </div>
              </>
            )
          }
        </main>
        <footer>

        </footer>
      </aside>
    </div>
  );
};

export default Drawer;
