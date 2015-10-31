<?php

class BlogSubscriptions extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $uid;

    /**
     *
     * @var string
     */
    public $email_address;

    /**
     *
     * @var string
     */
    public $created;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'blog_subscriptions';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogSubscriptions[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return BlogSubscriptions
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
