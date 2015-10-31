<?php

class BlogPost extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $content;
    
    /**
     * Holds the tags
     * @var String
     */
    public $tags;
    
    /**
     * Holds the created date
     * @var String
     */
    public $created;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'blog_post';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogPost[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogPost
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
