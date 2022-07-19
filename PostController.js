import Post from "./Post.js"
import PostService from "./PostService.js"

class PostController{
    async create(req,res){
        try{
            console.log(req.files)
            const post = await PostService.create(req.body)
            res.redirect('/client');
        }
        catch (e){
            res.status(500).json(e)
        }
     
    }
    async getAll(req,res){
        try{
            const posts = await PostService.getAll();
            return res.json(posts);
        }
        catch (e){
            res.status(500).json(e)
        }
    }
    async getone(req,res){
        try{
            const post = await PostService.getone(req.params.id);
            return res.json(post);
        } 
        catch (e){
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const updatePost = await PostService.update(req.body)
            return res.json(updatePost);
        }
        catch (e){
            res.status(500).json(e.massage)
        }
    }
    async delete(req,res){
        try{
            const post = await PostService.delete(req.params.id);
            return res.json(post);
        }
        catch (e){
            res.status(500).json(e)
        }
    }
}


export default new PostController()