<?php

/**
 * The image uploader service
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
}