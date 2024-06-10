import { Router, Request, Response } from "express";
import Post from "../models/post";
import CreatePost from "../dtos/createPost.dto";

const router = Router();

const posts: Post[] = [
  { id: 1, title: "post1", body: "post1" },
  { id: 2, title: "post2", body: "post2" },
  { id: 3, title: "post3", body: "post3" },
];

router.get("/",(req: Request,res: Response)=>{
    res.status(200).json(posts)

})
router.post("/",(req: Request,res: Response)=>{
const {title, body}= req.body as CreatePost
const post = new Post(title, body)
posts.push(post)
res.status(201).json(post)

})

export default router