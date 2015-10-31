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
     * Add a new blog post
     * @return Json
     */
    public function addBlogPostAction()
    {
        $this->setJsonResponse();
        $service = new BlogPostService();
        $result = $service->addPost(array(  'content' => $this->request->getPost("content"),
                                            'tags'    => $this->request->getPost("tags"),
                                            'created' => date("Y-m-d H:i:s")));
        if(!$result){
            return array('success' => false,
                         'message' => 'Failed to add blog post');
        }
        return array('success' => true);
    }
    
    public function voteAction($testId)
    {
        //forward to another action
        return $this->dispatcher->forward(array(
            'action'  => 'test',
            'params'  => array(1) //parameter to send over (i.e. /test/1)
        ));
    }
}

