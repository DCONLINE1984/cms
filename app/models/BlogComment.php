<?php

/**
 * The blog comment
 * @author Dean Clow
 */

class BlogComment extends \Phalcon\Mvc\Model
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
    public $title;

    /**
     *
     * @var string
     */
    public $created_by;

    /**
     *
     * @var string
     */
    public $body;

    /**
     *
     * @var integer
     */
    public $up_votes;

    /**
     *
     * @var integer
     */
    public $down_votes;

    /**
     *
     * @var integer
     */
    public $blog_post_id;

    /**
     *
     * @var string
     */
    public $date;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'blog_comment';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogComment[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogComment
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }
}