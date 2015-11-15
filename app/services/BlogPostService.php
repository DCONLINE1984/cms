<?php

/**
 * The blog post service
 * @author Dean CLow
 */

class BlogPostService
{
    /**
     * Get all blog posts
     * @return Array
     */
    public function getPosts()
    {
        $results    = BlogPost::find(array(
                    "order" => "created DESC"
                ));
        $datasource = array();
        foreach($results as $result){
            $datasource[] = array('html' => $result->content,
                                  'tags' => $result->tags,
                                  'id'   => $result->id);
        }
        return $datasource;
    }
    
    /**
     * Get single post
     * @return Array
     */
    public function getSinglePost($id)
    {
        $result     = BlogPost::findFirst("id = {$id}");
        return array('html'     => $result->content,
                     'tags'     => $result->tags,
                     'id'       => $result->id,
                     'created'  => $result->created);
    }
    
    /**
     * Add a new blog post
     * @param Array $parameters
     * @return Boolean
     */
    public function addPost($parameters)
    {
        $model = new BlogPost();
        $result = $model->save( $parameters,
                                array('content',
                                      'tags',
                                      'created'));
        return $result;
    }
    
    /**
     * Edit the post
     * @param type $parameters
     * @return type
     */
    public function editPost($parameters)
    {
        //get the original created date
        $rs = $this->getSinglePost($parameters['id']);
        $parameters['created'] = $rs['created'];
        $model = new BlogPost();
        $result = $model->save( $parameters,
                                array('content',
                                      'tags',
                                      'created',
                                      'id'));
        return $result;
    }
    
    /**
     * Delete a post
     * @param Int $id
     * @return Boolean
     */
    public function delete($id)
    {
        $model = BlogPost::findFirst("id = {$id}");
        return $model->delete();
    }
}