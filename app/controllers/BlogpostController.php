<?php

class BlogpostController extends CommonController
{
    /**
     * Get a complete list of blog posts
     * @return Json
     */
    public function getBlogPostsAction()
    {
        $this->setJsonResponse();
        $service = new BlogPostService();
        return $service->getPosts();
    }
    
    /**
     * Get a single blog post
     * @return Json
     */
    public function getBlogPostAction()
    {
        $this->setJsonResponse();
        $service = new BlogPostService();
        return $service->getSinglePost($this->request->get("id"));
    }
    
    /**
     * Add a new blog post
     * @return Json
     */
    public function addBlogPostAction()
    {
        $this->setJsonResponse();
        $service = new BlogPostService();
        $id = $this->request->getPost("id");
        if(empty($id)){
            $result = $service->addPost(array(  'content' => $this->request->getPost("content"),
                                                'tags'    => $this->request->getPost("tags"),
                                                'created' => date("Y-m-d H:i:s")));
        }else{
            //update an existing post
            $result = $service->editPost(array(  'content' => $this->request->getPost("content"),
                                                 'tags'    => $this->request->getPost("tags"),
                                                 'id'      => $id));
        }
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to add blog post');
        }
        return array('success' => true);
    }
    
    /**
     * Delete a post
     * @return Json
     */
    public function deletePostAction()
    {
        $this->setJsonResponse();
        $service = new BlogPostService();
        $id = $this->request->getPost("id");
        $result = $service->delete($id);
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to add blog post');
        }
        return array('success' => true);
    }
}

